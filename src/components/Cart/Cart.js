import { useState } from "react";
//import classes from "./Cart.module.css";
import Modal from "./Modal";
import Check from "./Check";
import Confirm from "./Confirm";

const Cart = (props) => {

  const [confirmIsClicked, setconfirmIsClicked] = useState(true);
  const showconfirmHandler = () => {
    setconfirmIsClicked(false);
  };
 
  return (
    <Modal onClose={props.onClose}>
      {confirmIsClicked && (
 <Check onClick={showconfirmHandler}/>
      )}
      {!confirmIsClicked && (
       <Confirm onClose={props.onClose}/>
      )}
    </Modal>
  );
};
export default Cart;
