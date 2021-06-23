import React, { useCallback } from "react";
import { connect } from "react-redux";

import { searchApi } from "./../../actions/eCustomerSearch";
import { apiCall } from "../../actions/callWorkBoard";

import SearchIcon from "./../../assets/Symbol 129 – 1.svg";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  rounded: {
    borderRadius: "34px",
    border: "1px solid #5DAAE0",
    height: "49px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    alignContent: "center",
  },
}));

const mapStateToProps = (state) => {
  return {
    searchResults: state.callWorkBoard.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchApi: (data) => dispatch(searchApi(data)),
    apiCall: () => dispatch(apiCall()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CustomizedInputBase(props) {
  const [crossIconState, setCrossIcon] = React.useState(true);
  const { searchApi, apiCall, searchResults = {} } = props;
  const classes = useStyles();

  const debounce = (fun, delay) => {
    let clearTimeoutId;
    return function (...args) {
      if (clearTimeoutId) {
        clearTimeout(clearTimeoutId);
      }
      clearTimeoutId = setTimeout(() => {
        fun(...args);
      }, delay);
    };
  };

  const searchCustomerHandler = (event) => {
    setCrossIcon(false);
    const customerName = event.target.value;
    const data = { data: customerName };
    if (customerName.length >= 3) searchApi(data);
    if (customerName.length === 0) {
      callWorkBookApiCallHandler();
      apiCall();
    }
  };

  const optimisedSeacrhHandler = useCallback(
    debounce(searchCustomerHandler, 600),
    [searchCustomerHandler]
  );

  const callWorkBookApiCallHandler = () => {
    setCrossIcon(true);
    document.getElementById("search_input").value = "";
    apiCall();
  };

  return (
    <div className={classes.rounded}>
      <img src={SearchIcon} alt={"Unable To Load"} />
      <InputBase
        id="search_input"
        className={classes.input}
        placeholder="Search Name"
        onChange={optimisedSeacrhHandler}
      ></InputBase>
      {crossIconState ? (
        <ArrowDropDownIcon />
      ) : (
        <Button
          onClick={callWorkBookApiCallHandler}
          style={{ color: "#5DAAE0", backgroundColor: "transparent" }}
        >
          <CloseIcon />
        </Button>
      )}
    </div>
  );
});
