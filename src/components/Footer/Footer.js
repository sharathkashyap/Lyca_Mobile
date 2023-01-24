import React, { Fragment } from "react";
import classes from "./Footer.module.css";

import footer from "../../assets/footer.PNG";
const Footer =()=>
{
    return(<Fragment>
        <div>
        <img className={classes.footerImage} src={footer} alt="Footer" />
      </div>
    
    </Fragment>)
    ;

}
export default Footer;