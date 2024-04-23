import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState(null);
  const [isActive, setIsActive] = useState(false);

  // let sample = [
  //   {
  //     userId: 4,
  //     id: 31,
  //     title: "ullam ut quidem id aut vel consequuntur",
  //     body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
  //   },
  // ];

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
  }, [isActive]);

  return (
    <div>
      <button className="btn btn-danger" onClick={() => setIsActive(!isActive)}>
        RELOAD
      </button>
      <div className="container">
        <div className="row">
          {data &&
            data.map((item, i) => {
              return (
                <div className=" col-12" key={i}>
                  <div className="card my-3">
                    <h2 className="title">{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
