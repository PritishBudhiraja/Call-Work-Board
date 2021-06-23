import React from "react";

import BaselineMenu from "./../../assets/baseline-menu-24px.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Drawer, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  size: {
    backgroundSize: "2px 3px",
  },
  backgroundColor: {
    display: "flex",
    backgroundColor: "#5DAAE0",
  },
  imageSize: {
    width: "100%",
  },
  paper: {
    background: "#5DAAE0",
  },
  buttonColor: {
    backgroundColor: "#2D4250",
  },
  largeIcon: {
    width: "12%",
    height: "12%",
    color: "#FFFFFF",
  },
});

export default function VerticalDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const drawerClickHandler = () => {
    setState(!state);
  };
  const drawerCloseHandler = () => {
    setState(!state);
  };

  return (
    <>
      <Button
        onClick={drawerClickHandler}
        className={classes.backgroundColor}
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src={BaselineMenu}
          className={classes.imageSize}
          alt={"Unable To Load"}
        />
      </Button>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          marginLeft: "1%",
          marginBottom: "1%",
        }}
      >
        <AccountCircleIcon className={classes.largeIcon} />
      </div>
      <Drawer
        open={state}
        classes={{ paper: classes.paper, drawerWidth: classes.drawerWidth }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "nowrap",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <img
            src={BaselineMenu}
            style={{ width: "12%", marginLeft: "5%" }}
            alt={"Unable To Load"}
          />
          <Typography
            style={{
              marginLeft: "8%",
              textAlign: "left",
              font: "normal normal normal 25px Roboto",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 1,
            }}
          >
            MENU
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={drawerCloseHandler}
            style={{ backgroundColor: "transparent" }}
          >
            <ArrowBackIcon />
          </Button>
          <div
            style={{
              marginRight: "10%",
              whiteSpace: "nowrap",
            }}
          >
            Switch Back to Enterprise UI
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            bottom: "0px",
            justifyContent: "space-between",
            alignContent: "center",
            top: "80%",
          }}
        >
          <Typography
            style={{
              marginLeft: "5%",
              textAlign: "left",
              font: "normal normal normal 20px Roboto",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 1,
            }}
          >
            John Smith
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#2D4250",
              marginRight: "5%",
              borderRadius: "20px",
            }}
          >
            <Typography
              onClick={drawerCloseHandler}
              style={{
                textAlign: "left",
                font: "normal normal normal 18px Roboto",
                letterSpacing: "0px",
                color: "#FFFFFF",
                opacity: 1,
              }}
            >
              LOGOUT
            </Typography>
          </Button>
        </div>
      </Drawer>
    </>
  );
}
