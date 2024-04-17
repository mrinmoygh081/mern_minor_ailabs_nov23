import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState(null);

  console.log(data);

  const getData = () => {
    const requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data &&
        data.map((item, index) => (
          <div className="card p-3 mb-2" key={index}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
    </>
  );
};

export default About;
