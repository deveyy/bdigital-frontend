/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

function Home() {
  const [loading, setLoading] = useState(false);
  const [Homes, fetchHomes] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const getData = async () => {
    try {
      setLoading(true); // Set loading before sending API request
      await fetch('https://bdigital-5o7iy.ondigitalocean.app/api/home/latest')
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          fetchHomes(res);
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

  const Image = styled.img`
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 43rem;
    outline: none;
  `;

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          Homes.map((item, i) => {
            return (
              <Carousel.Item interval={2000} key={i}>
                <Image src={item.url} alt="bdigital" />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        )}
      </Carousel>
    </div>
  );
}
export default Home;
