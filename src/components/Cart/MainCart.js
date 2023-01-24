import React, { Fragment, useState } from "react";

import classes from "./MainCart.module.css";
const MainCart = () => {
  return (
    <Fragment>
      <div className={classes.item1}>Your shopping cart</div>
      <div className={classes.desc}>Review your cart before checkout</div>
      <br />
      <br />
      <div className={classes.main}>
        <div className={classes.main2}>
          <div className={classes["card-contrainer"]}>
            <div className={classes.top}>
              <div className={classes.newSIM}>New Lyca Mobile SIM</div>
              <div className={classes.simType}>Choose your SIM type:</div>
              <div className={classes.simContainer}>
                <div className={classes["radio-container1"]}>
                  <input
                    className={classes.inputIcon}
                    type="radio"
                    value="SIM"
                    name="simType"
                    id="SIM"
                  />
                  <div className={classes.radioInput1}>Physical SIM</div>
                  <br />
                  <div className={classes.simDescP}>
                    Works on all devices except eSIM
                    <br />
                    only devices (Example: iPhone14){" "}
                  </div>
                </div>
                <div className={classes["radio-container2"]}>
                  <input
                    className={classes.inputIcon}
                    type="radio"
                    value="eSIM"
                    name="simType"
                    id="eSIM"
                  />
                  <div className={classes.radioInput2}>eSIM</div>
                  <br />
                  <div className={classes.simDescE}>
                    Works on selected devices
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.middle}>
              <div className={classes.selectText}>Plan selected:</div>
              <br />
              <br />
              <div className={classes.types}>
                <label className={classes.type}>National Plus</label>
                <label className={classes.typeAmount}> € 10.00</label>
              </div>
              <div className={classes.deets}>
                <label className={classes.deetsLabel}>
                  15 GB data| Unlimited national mins and SMS|
                  <br />
                  EU Roaming
                </label>
                <label className={classes.validity}> 30 days</label>
              </div>
              <div>
                <br />
                <br />
                <label className={classes.renewLabel}> Auto-renewal</label>
                {/* <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span /> */}
              </div>
            </div>
            <div className={classes.bottom}>
              <div className={classes.selectText}>Select a Top-up amount:</div>

              <div className={classes.cards}>
                <div className={classes.small1}>
                  <label> € 5.00</label>
                </div>
                <div className={classes.small2}>
                  <label> € 10.00</label>
                </div>

                <div className={classes.big1}>
                  {" "}
                  <label> € 15.00</label>
                </div>
                <div className={classes.big2}>
                  {" "}
                  <label> € 20.00</label>
                </div>
                <div className={classes.big3}>
                  {" "}
                  <label> € 30.00</label>
                </div>
              </div>
            </div>
          </div>

          <div className={classes["card-contrainer2"]}>
            <div className={classes.addAnother}>Add another SIM</div>
          </div>
        </div>
        <div className={classes.summaryMainDiv}>
        <div className={classes["card-contrainer4"]}>
            Login to apply and get discounted price
        </div>
        <div className={classes["card-contrainer3"]}>
          <div className={classes.summary}>
            <label className={classes.summaryLabel}>Summary</label>
          </div>
          <div className={classes.summaryTypes}>
            <label className={classes.summaryType}>New Lyca Mobile SIM</label>
            <label className={classes.summaryTypeAmount}> FREE</label>
          </div>
          <div className={classes.sumTypes}>
            <label className={classes.sumType}>National Plus</label>
            <label className={classes.sumTypeAmount}>€ 10.00</label>
          </div>
          <div className={classes.sumDeets}>
            <label className={classes.sumDeetsLabel}>
              30 days| 30GB data| Unlimited
              <br />
              national mins and SMS|
            </label>
          </div>
          <div className={classes.delivery}>
            <label className={classes.deliveryType}>Delivery</label>
            <label className={classes.deliveryTypeAmount}> FREE</label>
          </div>
          <div className={classes.applyPromoDiv}>
            <div className={classes.promoDiv}>
              <label className={classes.promo}>Got a promo code?</label>
            </div>
            <br />
            <div className={classes.promoDivBox}>
              <input
                className={classes.promoBox}
                placeholder="Promo code"
              ></input>
            </div>
            <div className={classes.applyDivBox}>
              <button className={classes.applyBox} disabled="true">
                Apply code
              </button>
            </div>
          </div>
          <div className={classes.total}>
            <label className={classes.totalType}>Total</label>
            <label className={classes. totalAmount}>€ 12.00</label>
          </div>
          <div className={classes.tax}>
            <label className={classes.taxType}>Includes Tax:</label>
            <label className={classes. taxAmount}>€ 2.00</label>
            
          </div>
          <div>
        <button id="btn" className={classes.addButton}>
          <div className={classes.addButtonText}>Checkout</div>
        </button>
      </div>
      <div className={classes.email}>Email me this basket</div>
          
        </div>
        </div>
       
     
       
      </div>
    </Fragment>
  );
};
export default MainCart;
