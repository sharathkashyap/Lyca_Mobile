import React, {useEffect, useState} from "react";
import {Buffer} from 'buffer';

const MainCart = (props) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    const encodedString = Buffer.from("Sharath:Sharath").toString('base64');
    fetch("http://localhost:8080/cart?_format=json",{
        method: 'GET',
        headers: {
            //'Commerce-Cart-Token': 'sharath',
            Accept: 'application/json',
            'Authorization': 'Basic ' + encodedString,
            'X-Csrf-Token':document.CSRF_TOKEN,
            //"Set-Cookie": "connect.sid=s%3A_9c3LkWU8QJzOH86nte5Hoc707OwSxGW.7wsLGm4VPD0uadi5BpRoB0EmD0irfQ3QQ3N8sSNXnUQ; SESS49960de5880e8c687434170f6476605b=t6T%2C9tQA3mysl3Gu-Uzo9bk6dOCUabRfMBlz7HVPKbKAOGWP"
        },
        //credentials: 'include'
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let results = [];
          result[0].order_items.forEach((element) => {
            console.log(element);
            results.push(element);
          });
          setData(results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      );
  },[]);
  return (
    <div>
      {data?.map((item) => (
        <p>{item.purchased_entity.title}</p>
      ))}
    </div>
  );
};
export default MainCart;
