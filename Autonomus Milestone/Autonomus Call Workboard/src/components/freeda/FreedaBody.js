import React from "react";

import FreedaIcon from "./../../assets/Group 1206.png";
import MeIcon from "./../../assets/Group 1087.png";

import "./styles.css";

export default function (props) {
  return (
    <div>
      <div className="freeda-chat">
        <img
          src={FreedaIcon}
          alt={"Unable To Load"}
          className="freeda-icon-rotate"
        ></img>
        <div>
          <p className="text-freeda">Hi John</p>
          <p className="text-freeda">How can I help you!</p>
        </div>
      </div>
      <div className="pull-me-text">
        <div>
          <p className="text-freeda" style={{ marginLeft: "10%" }}>
            Pull up account walmart
          </p>
        </div>
        <img src={MeIcon} alt={"Unable To load"} className="me-icon-right" />
      </div>
      <div className="walmart-freeda-icon">
        <img
          src={FreedaIcon}
          alt={"Unable to Load"}
          className="img-walmart"
        ></img>
        <p className="text-freeda">
          I found 3 customers by name Walmart, which one should I pull up?
        </p>
      </div>
      <div className="walmart-locations">
        <p classname="walmart" style={{ marginLeft: "5%" }}>
          Walmart USA
        </p>
        <p className="walmart-number">4435434232</p>
      </div>
      <div className="walmart-locations">
        <p classname="walmart" style={{ marginLeft: "5%" }}>
          Walmart Asia
        </p>
        <p className="walmart-number">3645344343</p>
      </div>
      <div className="walmart-locations">
        <p classname="walmart" style={{ marginLeft: "5%" }}>
          Walmart Malaysia
        </p>
        <p className="walmart-number">265464543</p>
      </div>
      <div className="pull-me-text">
        <div>
          <p className="text-freeda" style={{ marginLeft: "10%" }}>
            Okey, select Walmart Asia
          </p>
        </div>
        <img src={MeIcon} alt={"Unable To load"} className="me-icon-right" />
      </div>
    </div>
  );
}
