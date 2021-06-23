import React from "react";

import { connect } from "react-redux";

import { Divider, Paper } from "@material-ui/core";

import Header from "./../components/header/Header";
import Footer from "./../components/footer/Footer";
import FreedaChat from "./../components/freeda/FreedaChat";
import GridComponent from "./../components/charts/GridComponent";
import VerticalDrawer from "./../components/verticalDrawer/VerticalDrawer";
import TabAndSummaryInfo from "./../components/tabAndSummaryInfo/TabAndSummary";

import "./styles.css";

const mapStateToProps = (state) => {
  return {
    showFreeda: state.showFreeda.showFreeda,
  };
};

export default connect(
  mapStateToProps,
  null
)(function CallWorkBoard(props) {
  const { showFreeda } = props;
  return (
    <>
      <div className="leftpane">
        <VerticalDrawer />
      </div>
      <Paper style={{ width: "100%", height: "100%" }}>
        {!showFreeda ? (
          <div className="rightpane">
            <Header />
            <div>
              <TabAndSummaryInfo />
              <GridComponent />
            </div>
            <Footer />
          </div>
        ) : (
          <>
            <div className="rightpane">
              <Header />
              <div>
                <div className="left-freeda-pane">
                  <TabAndSummaryInfo />
                  <GridComponent />
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="right-freeda-pane">
                  <FreedaChat />
                </div>
              </div>
              <Footer />
            </div>
          </>
        )}
      </Paper>
    </>
  );
});
