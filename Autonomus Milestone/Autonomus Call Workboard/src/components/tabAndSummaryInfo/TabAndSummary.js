import React from "react";
import { connect } from "react-redux";

import { apiCall } from "./../../actions/callWorkBoard";

import { Typography, Divider, Button } from "@material-ui/core";
import "./styles.css";

const mapStateToProps = (state) => {
  return {
    pageNumber: state.callWorkBoard.pageNumber,
    searchView: state.callWorkBoard.searchView,
    dataUserCallbook: state.callWorkBoard.dataUserCallbook,
    searchResults: state.callWorkBoard.searchResults,
    totalCustomerCountInUserCallBook:
      state.callWorkBoard.totalCustomerCountInUserCallBook,
    completedCallingMinutes: state.callWorkBoard.completedCallingMinutes,
    expectedCallingMinutes: state.callWorkBoard.expectedCallingMinutes,
    totalPastDueProcessed: state.callWorkBoard.totalPastDueProcessed,
    totalPastDueAmount: state.callWorkBoard.totalPastDueAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiCall: () => dispatch(apiCall()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function TabAndSummary(props) {
  const {
    dataUserCallbook = {},
    searchResults = {},
    totalCustomerCountInUserCallBook,
    expectedCallingMinutes,
    completedCallingMinutes,
    totalPastDueProcessed,
    totalPastDueAmount,
    searchView,
    pageNumber,
  } = props;
  const { overview = {} } = dataUserCallbook;

  const apiCallHandler = (event) => {
    apiCall();
  };

  const customerCount = 5;

  return (
    <div className="container">
      <div className="to-and-finished-call">
        {searchView ? (
          <Button
            onClick={apiCallHandler}
            style={{
              backgroundColor: "transparent",
              marginRight: "2%",
              marginLeft: "2%",
              color: "#5DAAE0",
              textAlign: "center",
              font: "normal normal medium 18px/24px Roboto",
              letterSpacing: "0.71px",
              opacity: 1,
              borderBottom: "1px solid #5DAAE0BF",
              borderRadius: 0,
            }}
          >
            TO CALL LIST ({totalCustomerCountInUserCallBook})
          </Button>
        ) : (
          <Button
            style={{
              backgroundColor: "transparent",
              marginRight: "2%",
              marginLeft: "2%",
              color: "#FFFFFFA6",
              textAlign: "center",
              font: "normal normal medium 18px/24px Roboto",
              letterSpacing: "0.71px",
              opacity: 1,
              borderBottom: "1px solid #FFFFFFA6",
              borderRadius: 0,
            }}
          >
            TO CALL LIST ({totalCustomerCountInUserCallBook})
          </Button>
        )}
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#5DAAE0",
            textAlign: "center",
            font: "normal normal medium 18px/24px Roboto",
            letterSpacing: "0.71px",
            opacity: 1,
            borderBottom: "1px solid #5DAAE0BF",
            borderRadius: 0,
          }}
        >
          FINISHED CALL LIST (12)
        </Button>
        {searchView ? (
          <Button
            style={{
              backgroundColor: "transparent",
              marginRight: "2%",
              marginLeft: "2%",
              color: "#FFFFFFA6",
              textAlign: "center",
              font: "normal normal medium 18px/24px Roboto",
              letterSpacing: "0.71px",
              opacity: 1,
              display: "none !important",
              borderBottom: "1px solid #FFFFFFA6",
              borderRadius: 0,
            }}
          >
            SEARCH RESULTS ({searchResults.total})
          </Button>
        ) : null}
      </div>
      <div className="stats-on-customers">
        <div className="total-customer-called">
          <Typography>
            {totalCustomerCountInUserCallBook > customerCount * (pageNumber + 1)
              ? customerCount * (pageNumber + 1)
              : customerCount * pageNumber +
                totalCustomerCountInUserCallBook -
                customerCount * pageNumber}{" "}
            / {totalCustomerCountInUserCallBook}
          </Typography>
          <Typography className="blue-color-call-heading">
            Total Customers Called
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="total-time-spent-on-call">
          <Typography>
            {completedCallingMinutes} min / {expectedCallingMinutes} mins
          </Typography>
          <Typography className="blue-color-call-heading">
            Total Time Spent On Call
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="total-pass-due-touched">
          <Typography>
            ${(totalPastDueProcessed / 1000).toFixed(2)}K / $
            {(totalPastDueAmount / 1000).toFixed(2)}K
          </Typography>
          <Typography className="blue-color-call-heading">
            Total Pass Due Touched
          </Typography>
        </div>
      </div>
    </div>
  );
});
