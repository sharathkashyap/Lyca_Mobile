//Check the SIM and add to cartS
import {Fragment, useState} from "react";
import classes from "./Check.module.css";
import phone from "../../assets/phoneSIM.PNG";
import e from "../../assets/eSIM.PNG";

const Check = (props) => {
  return (
    <Fragment>
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
        <button id="btn" onClick={props.onClick} className={classes.addButton}>
          <div className={classes.addButtonText}>Confirm and add to cart</div>
        </button>
      </div>
    </Fragment>
  );
};
// const [isEnabled,setIsEnabled]=useState(false);
// const enablingHandler =()=>
// {
//     var SIM=document.getElementById("SIM");
//     var eSIM=document.getElementById("eSIM");
//     var btn=document.getElementById("btn");

//     if(SIM||eSIM)
//     {
//         setIsEnabled(true);
//         btn.disabled=false;
//     }

// }
console.log("wjdhwuhsiqjs");
export default Check;
