import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Fab } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import {
  pageIncrement,
  pageDecrement,
} from "./../../actions/pageIncrementAndDecrement";
import { apiCall } from "./../../actions/callWorkBoard";
import GridElements from "./../../views/GridElements";
import GridSearchElements from "./../../views/GridSearchElements";

import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#5DAAE0",
    "&:hover": {
      backgroundColor: "#5DAAE0",
    },
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  background: {
    background: "#5daae0 0% 0% no-repeat padding-box",
    opacity: "1",
  },
}));

const mapStateToProps = (state) => {
  return {
    pageNumber: state.callWorkBoard.pageNumber,
    dataUserCallbook: state.callWorkBoard.dataUserCallbook,
    searchView: state.callWorkBoard.searchView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiCall: () => dispatch(apiCall()),
    pageIncrement: () => dispatch(pageIncrement()),
    pageDecrement: () => dispatch(pageDecrement()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function GridComponent(props) {
  const {
    apiCall,
    pageNumber,
    pageIncrement,
    pageDecrement,
    dataUserCallbook = {},
    searchView = false,
  } = props;
  const { overview = {} } = dataUserCallbook;
  const classes = useStyles();
  useEffect(() => {
    apiCall();
  }, [pageNumber]);

  const leftButtonHandler = (event) => {
    if (pageNumber >= 1) pageDecrement();
  };

  const rightButtonHandler = (event) => {
    if (
      pageNumber >= 0 &&
      pageNumber < dataUserCallbook.overview.totalCustomerCount / 5 - 1
    )
      pageIncrement();
  };

  let value = 0,
    customerCount = overview.totalCustomerCount;
  if (Math.floor(customerCount / 5) === customerCount / 5) {
    value = customerCount / 5 - 1;
  } else {
    value = Math.floor(customerCount / 5);
  }
  return (
    <div>
      {!searchView && pageNumber >= 1 ? (
        <Fab
          className={classes.root}
          align={{
            vertical: "middle",
            horizontal: "start",
          }}
          style={{
            position: "absolute",
            top: "57%",
            left: "5px",
            zIndex: 1,
            boxShadow: "none",
            backgroundColor: "rgba(52, 52, 52, 0.3)",
          }}
        >
          <KeyboardArrowLeftIcon
            onClick={leftButtonHandler}
            style={{ color: "#FFFFFF" }}
          />
        </Fab>
      ) : null}
      {searchView ? <GridSearchElements /> : <GridElements />}
      {!searchView && value > pageNumber ? (
        <Fab
          className={classes.root}
          align={{
            vertical: "middle",
            horizontal: "start",
          }}
          style={{
            position: "absolute",
            top: "57%",
            right: "24px",
            zIndex: 1,
          }}
        >
          <KeyboardArrowRightIcon
            onClick={rightButtonHandler}
            style={{ color: "#FFFFFF" }}
          />
        </Fab>
      ) : null}
    </div>
  );
});
