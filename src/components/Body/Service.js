import React, { Fragment } from "react";
import classes from "./Service.module.css";

const Service = (props) => {
  return (
    <div className={classes.main}>
      {props.data.map((service) => {
        return (
          <Fragment>
            <div key={service.id}>
              <div className={classes.serviceName}>{service.serviceName}</div>
              <div className={classes.serviceDesc}>{service.serviceDesc}</div>
              <button className={classes.orderButton}>
                <div className={classes.orderButtonText}>View</div>
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Service;
