import React from "react";
import { connect } from "react-redux";

import Render from "./../components/searchCharts/utilityComponents/Render";

const mapStateToProps = (state) => {
  return { searchResults: state.callWorkBoard.searchResults };
};

export default connect(
  mapStateToProps,
  null
)(function GridElements(props) {
  const { searchResults = {} } = props;
  return (
    <div>
      {searchResults.total !== 0 ? (
        <div
          style={{ height: "682px", padding: "20px", boxSizing: "border-box" }}
        >
          <Render />
        </div>
      ) : (
        <div
          style={{
            marginTop: "15%",
            marginBottom: "20%",
            textAlign: "center",
            font: "normal normal medium 20px/24px Roboto",
            letterSpacing: "0.71px",
            color: "#FFFFFFA6",
            opacity: 1,
          }}
        >
          No Matching Results Found
        </div>
      )}
    </div>
  );
});
