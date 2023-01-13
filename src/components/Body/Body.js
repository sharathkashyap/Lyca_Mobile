import React, { Fragment,useState, useEffect } from "react";
import Card from "./Card";
import classes from "./Body.module.css";
import Service from "./Service";
import image from "../../assets/16-Million.jpg";
import footer from "../../assets/footer.PNG";
import lycaimage from "../../assets/lycamobile-app-new.webp";
import Option from "./Option";
import HorizontalScroll from "react-horizontal-scrolling";


// const simData = [
//   {
//     id: 1,
//     x: "",
//     simType: "National",
//     simValue: "10 GB",
//     dataValue: "data",
//     simAmount: 7.0,
//     simValidity: "30 days",
//     detailedValue: "10GB national data",
//     detailedCallDuration: "Unlimited national mins",
//     detailedSMSDuration: "Unlimited national SMS",
//     roamingDetails: "EU roaming",
//   },
//   {
//     id: 2,
//     x: "",
//     simType: "National",
//     simValue: "10 GB",
//     simAmount: 7.0,
//     simValidity: "30 days",
//     detailedValue: "10GB national data",
//     detailedCallDuration: "Unlimited national mins",
//     detailedSMSDuration: "Unlimited national SMS",
//     roamingDetails: "EU roaming",
//   },
//   {
//     id: 3,
//     x: "",
//     simType: "National",
//     simValue: "10 GB",
//     simAmount: 7.0,
//     simValidity: "30 days",
//     detailedValue: "10GB national data",
//     detailedCallDuration: "Unlimited national mins",
//     detailedSMSDuration: "Unlimited national SMS",
//     roamingDetails: "EU roaming",
//   },
//   {
//     id: 4,
//     x: "",
//     simType: "National",
//     simValue: "10 GB",
//     simAmount: 7.0,
//     simValidity: "30 days",
//     detailedValue: "10GB national data",
//     detailedCallDuration: "Unlimited national mins",
//     detailedSMSDuration: "Unlimited national SMS",
//     roamingDetails: "EU roaming",
//   },
// ];
const serviceData = [
  {
    id: 1,
    serviceName: "Service",
    serviceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
  },
  {
    id: 2,
    serviceName: "Service",
    serviceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    serviceName: "Service",
    serviceDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit , consectetur adipiscing elit ",
  },
];
const optionData = [
  {
    id: 1,
    serviceName: "Activate a SIM",
    serviceDesc: "Got your new SIM? Activate and start using now",
    buttonText: "Activate SIM",
  },
  {
    id: 2,
    serviceName: "Recharge",
    serviceDesc: "Recherge with a quick top-up or one of our bundles",
    buttonText: "Recharge",
  },
];
const onPlayStoreClick = () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.lycadigital.lycamobile&pli=1";
};
const onAppStoreClick = () => {
  window.location.href =
    "https://apps.apple.com/gb/app/lycamobile/id1234252942";
};

const Body = (props) => {
   // try{
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        useEffect(() => {
            fetch("http://localhost:3000/simData")
           .then(res => res.json())
              .then(
                (result) => {
                  console.log(result);
                  setIsLoaded(true);
                  setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])
        
         
        //}
        // catch(exceptions)
        // {
        //     console.log(exceptions);
        // }
        
  return (
    
    <Fragment>
      <div className={classes["grid-container"]}>
        <div>
            
        </div>
        <div className={classes.item1}>
          <label>Great value SIM only deals</label>
        </div>
        <div className={classes.item2}>
          <label className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit,
          </label>
        </div>
        <div className={classes.item3}>
    
          <Card showPopUp={props.onShowPopUp} data={items} />
          
        </div>
        <div className={classes.item4}>
          <button className={classes.viewAllButton}>
            <div className={classes.viewAllButtonText}>View all plans</div>
          </button>
        </div>
        <div className={classes.item5}>
          <label>Explore our services</label>
        </div>
        <div className={classes.item6}>
          <label className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consectetur adipiscing elit,
          </label>
        </div>
        <div className={classes.item7}>
          <Service data={serviceData} />
        </div>

        <div className={classes.item8}>
          <img className={classes.image} src={image} alt="LYCA_Image_New" />
        </div>
        <div className={classes.item9}>
          <button className={classes.switch}>
            <div className={classes.switchText}>Switch to Lycamobile</div>
          </button>
        </div>
        <div className={classes.item10}>
          <label>Already with us?</label>
        </div>
        <div className={classes.item11}>
          <Option data={optionData} />
        </div>
        <div className={classes.item12}>
          <img className={classes.lycaimage} src={lycaimage} alt="LYCA_Image" />
          <div className={classes.stores}>Track your spending on the go</div>
          <div className={classes.storesDesc}>
            The Lyca Mobile app is the safest and fastest way to manage your
            Lyca Mobile account. You can check your balance, buy plans, check
            rates and more, all on the go.
          </div>

          <img
            className={classes.playStore}
            onClick={onPlayStoreClick}
            src="https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/02065749/google-play.webp"
            alt="playstore"
          />
          <img
            className={classes.appStore}
            onClick={onAppStoreClick}
            src="https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/02065750/app-store-2.webp"
            alt="playstore"
          />
        </div>
        <div className={classes.item13}>
          <img className={classes.footerImage} src={footer} alt="Footer" />
        </div>
      </div>
    </Fragment>
  );
};
export default Body;
