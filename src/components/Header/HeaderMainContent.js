import classes from "./HeaderMainContent.module.css";
import logo from "../../assets/logo_new.svg";
import cart from "../../assets/shopping-cart_new.svg";
import user from "../../assets/user_new.svg";

const HeaderMainContent = (props) => {
  return (
    <header className={classes["header-main"]}>
      <img className={classes.logo} src={logo} alt="LYCA_LOGO" />
      <label className={classes.bundle}>Plans</label>
      <label className={classes.recharge}>Recharge</label>
      <label className={classes.rate}>Rates</label>
      <label className={classes.offer}>Offer</label>
      <label className={classes.help}>Help</label>
      <label className={classes.space} />
      <img
        className={classes.cart}
        src={cart}
        alt="cart"
        onClick={props.onCartClick}
      />
      <img className={classes.user} src={user} alt="user" />
      <label className={classes.signin}>Sign in</label>
    </header>
  );
};
export default HeaderMainContent;
