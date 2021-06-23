import React from "react";
import { connect } from "react-redux";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

import { showFreeda } from "./../../actions/showFreeda";

const mapDispatchToProps = (dispatch) => {
  return {
    showFreeda: () => {
      dispatch(showFreeda());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(function FreedaChatHeader(props) {
  const { showFreeda } = props;

  const freedaChatHandler = (event) => {
    showFreeda();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        borderTopColor: "#FC7500",
        borderStyle: "solid",
        borderLeftColor: "#2D4250",
        borderRightColor: "#2D4250",
        borderBottomColor: "#2D4250",
        padding: "3%",
      }}
    >
      <p
        style={{
          textAlign: "left",
          font: "normal normal normal 20px Roboto",
          letterSpacing: "0px",
          color: "#FFFFFF",
          opacity: "0.65",
        }}
      >
        FREEDA
      </p>
      <Button onClick={freedaChatHandler} style={{ background: "transparent" }}>
        <CloseIcon style={{ marginRight: "2%", color: "#ffffff" }} />
      </Button>
    </div>
  );
});
