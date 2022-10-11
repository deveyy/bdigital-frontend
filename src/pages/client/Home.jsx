import React, { useEffect, useState } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);
  const [Homes, fetchHomes] = useState([]);

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

  return (
    <div className="mb-3">
      <ul>
        {loading ? (
          <>Loading..</>
        ) : (
          Homes.map((item, i) => {
            return <li key={i}>{item.title}</li>;
          })
        )}
      </ul>
    </div>
  );
}
export default Home;
