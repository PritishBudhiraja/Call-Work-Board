import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";

import SearchBar from "./SearchBar";
import FreedaIcon from "./FreedaIcon";

import "./styles.css";

export default function header() {
  return (
    <div className="header-div">
      <div className="arrow-typo">
        <Button disabled style={{ color: "#FFFFFF" }}>
          <ArrowBackIcon style={{ marginLeft: "10%" }} />
        </Button>
        <span id="callWorkboard">Call Workboard</span>
      </div>
      <span id="autonousReceivables">
        &nbsp;&nbsp;Autonomus Receivables&nbsp;&nbsp;
      </span>
      <div className="search-freeda">
        <div style={{ marginRight: "2%" }}>
          <SearchBar />
        </div>
        <div style={{ marginRight: "2%" }}>
          <FreedaIcon />
        </div>
      </div>
    </div>
  );
}
