import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const About = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      {data.map((item) => {
        return (
          <>
            <div style={{ color: "#fff", padding: 30 }}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default About;
