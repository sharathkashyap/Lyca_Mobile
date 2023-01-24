import {Fragment} from "react";
import Carousel from "./Carousel";
import classes from "./Header.module.css";
import HeaderContent from "./HeaderContent";
import HeaderMainContent from "./HeaderMainContent";
const Header = (props) => {
  return (
    <Fragment>
      <div className={classes["grid-container"]}>
        <div className={classes.item1}>
          <HeaderContent />
        </div>
        <div className={classes.item2}>
          <HeaderMainContent {...props} />
        </div>
        <div className={classes.item3}>
          <Carousel />
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
