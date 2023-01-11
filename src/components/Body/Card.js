import React, { Fragment } from "react";
import classes from "./Card.module.css";
//key={Math.random()} 
const Card = (props) => {
    
  return (
    
    <div className={classes.main}>
    
        {props.data.map((card) => {
          const totalAmount = `€${card.simAmount.toFixed(2)}`;
          return (
            <Fragment>
              <div  key={card.id}  className={classes["card-contrainer"]}>
                <div  className={classes.top}>
                  <div className={classes.simType} >{card.simType}</div>
                  <div  className={classes.simValue} >{card.simValue}</div>
                  <div  className={classes.dataValue} >{card.dataValue}</div>
                  

                </div>
                <div  className={classes.middle}>
                  <div className={classes.simAmount}>{totalAmount}</div>
                  <div  className={classes.simValidity} >{card.simValidity}</div>
                  <button className={classes.orderButton}>
                    <div className={classes.orderButtonText}>
                    Order Sim
                        </div></button>
                </div>
                <div className={classes.bottom}>
                  
                  <div className={classes.nationalData}>{card.detailedValue}</div>
                  <div className={classes.nationalMins}>{card.detailedCallDuration}</div>
                  <div className={classes.nationalSMS}>{card.detailedSMSDuration}</div>
                  <div className={classes.roamingDetails}>{card.roamingDetails}</div>
                </div>
              </div>
            </Fragment>
          );
        })}
      
    </div>
  );
};
export default Card;
