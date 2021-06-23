import React from "react";
import { connect } from "react-redux";

import { Typography, Button } from "@material-ui/core";

import FreedaImage from "./../../assets/Group 1206.svg";

import { showFreeda } from "./../../actions/showFreeda";
import { makeStyles } from "@material-ui/core/styles";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      borderRadius: "70px",
      background: "#FC7500 0% 0% no-repeat padding-box",
      height: "51px",
      width: "86%",
    },
  },
}));

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
)(function FreedaIcon(props) {
  const { showFreeda = false } = props;
  const classes = useStyles();
  const freedaChatHandler = (event) => {
    showFreeda();
  };

  return (
    <div className={classes.root}>
      <Button
        style={{ backgroundColor: "#FC7500" }}
        onClick={freedaChatHandler}
      >
        <Typography className="freeda-typo">FREEDA</Typography>
        <img src={FreedaImage} alt={"Unable To Load"} />
      </Button>
    </div>
  );
});
