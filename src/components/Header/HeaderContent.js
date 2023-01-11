import { Fragment } from "react";
//import arrow from "../../assets/arrow.jpg";
import classes from "./HeaderContent.module.css";
const HeaderContent = (props) => {
  return (
    <Fragment>
      <div className={classes["header-top"]}>
        <label className={classes.space}/>
     
        <label className={classes.download}>Download our App</label>
        <label className={classes.locator}>Store Locator</label>
        <label className={classes.language}>EN</label>
      </div>
    </Fragment>
  );
};
export default HeaderContent;
