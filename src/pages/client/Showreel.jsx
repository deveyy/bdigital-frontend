import YoutubeEmbed from 'components/client/video/YoutubeEmbed';
import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import 'styles/styles.css';
import Alert from 'react-bootstrap/Alert';

function Showreel() {
  const [loading, setLoading] = useState(false);
  const [Showreels, fetchShowreels] = useState([]);

  const getData = async () => {
    try {
      setLoading(true); // Set loading before sending API request
      await fetch('https://api.bdigital.vn/api/showreel/latest-uploads')
        .then((res) => res.json())
        .then((res) => {
          fetchShowreels(res);
          setLoading(false); // Stop loading
        });
    } catch (error) {
      setLoading(false); // Stop loading
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {['info'].map((variant) => (
        <Alert key={variant} variant={variant} className="text-center">
          Please, Turn on the dark mode for a better experience !
        </Alert>
      ))}
      <VerticalTimeline>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          Showreels.map((item, i) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgb(33, 150, 243)',
                  color: '#fff',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                dateClassName="text-white"
                date={item.timeline}
                iconStyle={{ background: 'rgb(25, 100, 220)', color: '#fff' }}
                key={i}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.about}
                </h3>
                <Badge bg="info">{item.name}</Badge>{' '}
                <div className="mt-3">
                  <YoutubeEmbed embedId={item.embedId} />
                </div>
              </VerticalTimelineElement>
            );
          })
        )}
      </VerticalTimeline>
    </div>
  );
}

export default Showreel;
