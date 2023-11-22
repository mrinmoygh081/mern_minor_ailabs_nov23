import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Product = () => {
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
      <h1 style={{ backgroundColor: "#ff0000", color: "#fff" }}>
        This will be our PRODUCT page
      </h1>
    </>
  );
};

export default Product;
