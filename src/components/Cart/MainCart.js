import React, {useEffect, useState} from "react";
import {Buffer} from "buffer";
import styles from "./MainCart.module.css";

const MainCart = (props) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    const encodedString = Buffer.from("Sharath:Sharath").toString("base64");
    fetch("http://localhost:8080/cart?_format=json", {
      method: "GET",
      headers: {
        //'Commerce-Cart-Token': 'sharath',
        Accept: "application/json",
        Authorization: "Basic " + encodedString,
        "X-Csrf-Token": document.CSRF_TOKEN,
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
          setTotalAmount(result[0].total_price.formatted);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      );
  }, []);
  return (
    <div>
      <h3 className={styles.cartTitle}>My Cart</h3>
      <table style={{width: "100%"}}>
        <tr>
          <th className={styles.productNameTitle}>Product Name</th>
          <th className={styles.quantity}>Quantity</th>
          <th className={styles.quantity}>Price</th>
          <th className={styles.quantity}>Total Price</th>
        </tr>
        {data?.map((item) => (
          <tr>
            <td className={styles.productName}>{item.title}</td>
            <td className={styles.quantity}>{item.quantity}</td>
            <td className={styles.quantity}>{item.unit_price.formatted}</td>
            <td className={styles.quantity}>{item.total_price.formatted}</td>
          </tr>
        ))}
        <tr className={styles.totalContainer}>
          <td colSpan={3} className={styles.total}>
            Total
          </td>
          <td className={styles.quantity}>{totalAmount}</td>
        </tr>
      </table>
    </div>
  );
};
export default MainCart;
