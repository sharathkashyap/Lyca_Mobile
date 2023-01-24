import React, {useEffect, useState} from "react";

const MainCart = (props) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/cart?_format=json")
      //.then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let results = [];
          result.hits.hits.forEach((element) => {
            console.log(element);
            results.push(element);
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      );
  });
  return (
    <div>
      {data?.map((item) => (
        <p>{item.purchased_entity.title}</p>
      ))}
    </div>
  );
};
export default MainCart;
