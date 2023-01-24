import {useState} from "react";
//import classes from "./Cart.module.css";
import Modal from "./Modal";
import Check from "./Check";
import Confirm from "./Confirm";

const Cart = (props) => {
  const [confirmIsClicked, setconfirmIsClicked] = useState(true);
  const showconfirmHandler = () => {
    try {
      fetch("http://localhost:8080/cart/1/items?_format=json").then(() => {
        fetch("http://localhost:32775/cart/add?_format=json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            purchased_entity_type: "",
            purchased_entity_id: props.id,
            quantity: "1",
          },
        }).then(() => {
          setconfirmIsClicked(false);
          console.log("Successfully");
        });
      });
    } catch {}
    //setconfirmIsClicked(false);
  };

  return (
    <Modal onClose={props.onClose}>
      {confirmIsClicked && <Check onClick={showconfirmHandler} />}
      {!confirmIsClicked && <Confirm onClose={props.onClose} />}
    </Modal>
  );
};
export default Cart;
