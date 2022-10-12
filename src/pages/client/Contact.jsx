/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import 'styles/contact.css';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [Contacts, fetchContacts] = useState([]);

  const getData = async () => {
    try {
      setLoading(true); // Set loading before sending API request
      await fetch('https://api.bdigital.vn/api/contact/latest')
        .then((res) => res.json())
        .then((res) => {
          fetchContacts(res);
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
    <section className="banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              Contacts.map((item, i) => {
                return (
                  <div key={i}>
                    <span className="tagline">Hi, Im Bdigital</span>
                    <h1>
                      <span className="txt-rotate">
                        <span className="wrap">Contact us</span>
                      </span>
                    </h1>
                    <p className="wrap">Genernal Contact</p>
                    <p className="tagline">Email: {item.email} </p>
                    <p className="tagline">Website: bdigital.vn </p>
                    <p className="wrap">Business Contact</p>
                    <p className="tagline">Email: thanhthang@bdigital.vn</p>
                    <p className="tagline">Phone: 0326.211.197</p>
                    <p className="wrap">Career</p>
                    <p className="tagline">Email: hr@bdigital.vn</p>
                    <p className="wrap">Viet Nam Office</p>
                    <p className="tagline">{item.address}</p>
                  </div>
                );
              })
            )}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src="./header-img.svg" alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
