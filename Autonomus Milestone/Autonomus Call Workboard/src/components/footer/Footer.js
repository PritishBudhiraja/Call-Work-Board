import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    pageNumber: state.callWorkBoard.pageNumber,
    dataUserCallbook: state.callWorkBoard.dataUserCallbook,
    searchView: state.callWorkBoard.searchView,
    searchResults: state.callWorkBoard.searchResults,
  };
};

export default connect(
  mapStateToProps,
  null
)(function Footer(props) {
  const {
    pageNumber,
    dataUserCallbook = {},
    searchView,
    searchResults = {},
  } = props;
  const { overview = {} } = dataUserCallbook;
  const customerCount = overview.totalCustomerCount / 5;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexFlow: "row nowrap",
        placeContent: "center space-between",
        justifyContent: "space-between",
        width: "95%",
        marginLeft: "2%",
      }}
    >
      {!searchView ? (
        <div
          style={{
            textAlign: "right",
            font: "normal normal normal 16px Roboto",
            letterSpacing: "0px",
            color: "#FFFFFFA6",
            opacity: 1,
          }}
        >
          Viewing {overview.totalCustomerCount > 0 ? pageNumber + 1 : 0} -{" "}
          {Math.ceil(customerCount)} of {Math.ceil(customerCount)}
        </div>
      ) : (
        <div
          style={{
            textAlign: "right",
            font: "normal normal normal 16px Roboto",
            letterSpacing: "0px",
            color: "#FFFFFFA6",
            opacity: 1,
          }}
        >
          Viewing {searchResults.total ? 1 : 0} - {searchResults.total} of {searchResults.total}
        </div>
      )}
      <div
        style={{
          textAlign: "left",
          font: "normal normal normal 16px Roboto",
          letterSpacing: "0px",
          color: "#FFFFFFA6",
          opacity: 1,
        }}
      >
        © Copyright 2021 HighRadius. All Rights Reserved.
      </div>
    </div>
  );
});
