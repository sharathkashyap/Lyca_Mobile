import React, { Fragment } from "react";
import classes from "./Option.module.css";

const Option = (props) => {
  return (
    <div className={classes.main}>
      {props.data.map((service) => {
        return (
          <Fragment>
            <div key={service.id}>
              <div className={classes.serviceName}>{service.serviceName}</div>
              <div className={classes.serviceDesc}>{service.serviceDesc}</div>
              <button className={classes.orderButton}>
                <div className={classes.orderButtonText}>{service.buttonText}</div>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Option;
