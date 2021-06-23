import { createMuiTheme } from "@material-ui/core/styles";

export const pxToRem = (px) => `${px / 22.5}rem`;
export const pxToVw = (px) =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = (px) =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: "#58687E",
      light: "rgb(93,175,240,0.5)",
      dark: "rgb(93,175,240,0.2)",
      mainBackground:
        "background: transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box;",
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        marginLeft: "10%",
      },
    },
    MuiDivider: {
      root: { backgroundColor: "#FFFFFF80" },
    },
    MuiTypography: {
      root: {
        margin: "auto 0",
        display: "flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
      },
      h6: {
        font: "normal normal normal 40px/48px Roboto",
        fontFamily: "Roboto",
        letterSpacing: "0px",
        whiteSpace: "nowrap",
      },
      body1: {
        font: "normal normal normal 20px/24px Roboto",
        fontFamily: "Roboto",
        whiteSpace: "nowrap",
      },
      body2: {
        font: "normal normal normal 20px/24px Roboto",
        fontFamily: "Roboto",
        whiteSpace: "nowrap",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "15px",
        backgroundColor: "#283A46 !important",
      },
    },
    MuiIconButton: {
      root: {
        color: "#c1c9c4",
        padding: "30px",
      },
    },
    MuiSvgIcon: {
      root: {
        marginLeft: "0%",
      },
    },
    MuiDrawer: {
      paper: {
        width: "20% !important",
      },
    },
    MuiPaper: {
      root: {
        background:
          "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box",
        opacity: "1",
        color: "#FFFFFF",
        height: "100%",
      },
    },
    MuiButton: {
      label: {
        font: "normal normal normal 20px/24px Roboto",
        whiteSpace: "nowrap",
      },
      root: {
        borderRadius: 10,
        textTransform: "none",
        fontFamily: "Roboto",
      },
      contained: {
        backgroundColor: "#14AFF1",
        color: "#FFFFFF",
        "&:disabled": {
          backgroundColor: "#97A1A9",
          color: "#FFFFFF",
        },
      },
      containedPrimary: {
        backgroundColor: "#14AFF1",
      },
    },
    MuiInputBase: {
      input: {
        font: "normal normal normal 15px/18px Roboto",
        fontFamily: "Roboto",
        color: "#FFFFFF",
        whiteSpace: "nowrap",
      },
    },
  },
});
