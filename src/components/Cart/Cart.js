import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import phone from "../../assets/phoneSIM.PNG";

import e from "../../assets/eSIM.PNG";

const Cart = (props) => {
  //   const hasItems = cartContext.items.length > 0;
  // const cartItemRemoveHandler =(id)=>{
  //     cartContext.removeItem(id);
  // };
  //  const cartItemAddHandler =(item)=>{
  //     cartContext.addItem({...item,amount:1})
  //  };
  const [confirmIsClicked, setconfirmIsClicked] = useState(true);
  const showconfirmHandler = () => {
    setconfirmIsClicked(false);
  };
  // setconfirmIsClicked(false);
  return (
    <Modal onClose={props.onClose}>
      {confirmIsClicked && (
        <div>
          <div className={classes.total}>
            <span>Confirm SIM Type</span>
          </div>
          <div className={classes["grid-container1"]}>
            <div className={classes["card-contrainer1"]}>
              <div className={classes["radio-container1"]}>
                <input type="radio" value="SIM" name="simType" id="SIM" />
                <div className={classes.radioInput1}>Physical SIM</div>
              </div>
              <img className={classes.phone} src={phone} alt="pSim" />
              <div htmlFor="SIM" className={classes.phoneSIM}>
                Insert to a phone
              </div>
            </div>
            <div className={classes["card-contrainer2"]}>
              <div className={classes["radio-container2"]}>
                <input type="radio" value="eSIM" name="simType" id="eSIM" />
                <div htmlFor="eSIM" className={classes.radioInput2}>
                  eSIM
                </div>
                <div className={classes.save}>save 10%</div>
              </div>
              <img className={classes.e} src={e} alt="eSim" />
              <div className={classes.eSIM}>Pre-built in a phone</div>
            </div>
          </div>
          <div className={classes["grid-container2"]}>
            <div className={classes["card-contrainer3"]}>
              <div className={classes.phoneSIMContent}>
                A physical SIM will be sent with your order
              </div>
            </div>
            <div className={classes["card-contrainer4"]}>
              <div className={classes.eSIMContent1}>
                What's an eSIM
                <br />
                <div className={classes.eSIMContent2}>
                  See compatible list of phones
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <button onClick={showconfirmHandler} className={classes.addButton}>
              <div className={classes.addButtonText}>
                Confirm and add to cart
              </div>
            </button>
          </div>
        </div>
      )}
      {!confirmIsClicked && (
        <div>
          <div className={classes.summaryDiv}>
            <label className={classes.summaryLabel}>
              {" "}
              Cart Summary - 2 items
            </label>
            <div className={classes.itemDiv}>
              <label className={classes.item1Label}>
                {" "}
                New Lyca Mobile SIM- Physical SIM
              </label>
              <label className={classes.change}>change</label>
            </div>
            <div className={classes.itemDiv}>
              <label className={classes.item2Label}>
                {" "}
                National Plus 15GB SIM- only plan €9.00 per month
              </label>
            </div>
            <div className={classes.itemDiv}>
              <label className={classes.saveDiscount}> You save 10%</label>
            </div>
            <div className={classes.itemDiv}>
              <label className={classes.subTotal}>Sub-total</label>
              <label className={classes.amount}>€10.00</label>
            </div>
          </div>
          <div>
            <button className={classes.cartButton}>
              <div className={classes.cartButtonText}>Go to cart</div>
            </button>
          </div>
          <div className={classes.continueDiv}>
            <button onClick={props.onClose} className={classes.continueButton}>
              <div className={classes.continueButtonText}>
                Continue Shopping
              </div>
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default Cart;
