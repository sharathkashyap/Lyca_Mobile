import {useState} from "react";
//import classes from "./Cart.module.css";
import Modal from "./Modal";
import Check from "./Check";
import Confirm from "./Confirm";
import {Buffer} from 'buffer';

const Cart = (props) => {
  console.log(props);
  const [confirmIsClicked, setconfirmIsClicked] = useState(true);
  const showconfirmHandler = () => {
    try {
      const encodedString = Buffer.from("Sharath:Sharath").toString('base64');
      console.log("ID to be invoked",props.data.data.product_id[0].toString());
      /*fetch("http://localhost:8080/cart/1/items?_format=json",{
        method: 'DELETE',
        headers: {
            'Commerce-Cart-Token': 'sharath',
            Accept: 'application/json',
        },}).then(() => {*/
        fetch("http://localhost:8080/cart/add?_format=json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //'Commerce-Cart-Token': 'sharath',
            'Authorization': 'Basic ' + encodedString,
            'X-Csrf-Token':document.CSRF_TOKEN,
            //"Set-Cookie": "connect.sid=s%3A_9c3LkWU8QJzOH86nte5Hoc707OwSxGW.7wsLGm4VPD0uadi5BpRoB0EmD0irfQ3QQ3N8sSNXnUQ; SESS49960de5880e8c687434170f6476605b=t6T%2C9tQA3mysl3Gu-Uzo9bk6dOCUabRfMBlz7HVPKbKAOGWP"
          },
          //credentials: 'include',
          body: JSON.stringify([{
            purchased_entity_type: props.data.data.entity_type[0]+"_variation",
            purchased_entity_id: props.data.data.product_id[0].toString(),
            quantity: "1",
            combine: true
          }]),
        }).then(() => {
          setconfirmIsClicked(false);
          console.log("Successfully");
        });
      //});
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
