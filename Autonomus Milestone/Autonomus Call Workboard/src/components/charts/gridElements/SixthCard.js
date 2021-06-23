import React, { useEffect } from "react";
import { connect } from "react-redux";

import Highcharts from "highcharts";

import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#273D49BF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000033",
    opacity: "1",
  },
});

const mapStateToProps = (state) => {
  return {
    remainingSummary: state.callWorkBoard.remainingSummary,
    pageNumber: state.callWorkBoard.pageNumber,
    dataUserCallbook: state.callWorkBoard.dataUserCallbook,
  };
};

export default connect(
  mapStateToProps,
  null
)(function SixthCard(props) {
  const { remainingSummary = {}, dataUserCallbook = {}, pageNumber } = props;
  const { overview = {} } = dataUserCallbook;
  const classes = useStyles();
  const highChartRender = () => {
    if (
      !(
        Object.keys(remainingSummary).length === 0 &&
        remainingSummary.constructor === Object
      )
    ) {
      const combinedData = [
        remainingSummary.upcomingOpenAmount,
        ...remainingSummary.upcomingPastDueBucketDocumentAmount,
      ];
      combinedData.pop();
      combinedData.pop();
      let sum = combinedData.reduce((acc, ele) => {
        return acc + ele;
      }, 0);
      const chart = Highcharts.chart("sixthCard", {
        chart: {
          type: "column",
          backgroundColor: "#273D49BF",
          height: "60%",
        },
        title: {
          text: "",
          style: {
            font: "normal normal bold 30px/37px Roboto",
            letterSpacing: "0px",
            color: "#FFFFFF80",
            opacity: 1,
          },
        },
        credits: {
          enabled: false,
        },
        tooltip: { enabled: false },
        yAxis: {
          visible: false,
        },
        xAxis: {
          categories: ["Current Due", "0-30", "31-60", "61-90", "91-120"],
          lineWidth: 2,
          minorGridLineWidth: 0,
          lineColor: "#FFFFFF80",
          tickLength: 0,
          labels: {
            rotation: 0,
            step: 1,
          },
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: true,
              overflow: "allow",
              crop: false,
              formatter() {
                if (this.point.y <= 1000)
                  return `${((this.point.y / sum) * 100).toFixed(2)}%<br>$${
                    this.point.y
                  }`;
                else
                  return `${((this.point.y / sum) * 100).toFixed(2)}%<br> $${(
                    this.point.y / 1000
                  ).toFixed(2)}K`;
              },
              style: {
                textAlign: "center",
                font: "normal normal normal 16px/19px Roboto",
                letterSpacing: "0px",
                color: "#FFFFFF80",
                opacity: "1",
                textOutline: "none",
              },
            },
          },
        },
        series: [
          {
            showInLegend: false,
            data: combinedData,
            color: "#5DAAE0",
          },
        ],
      });
      return chart;
    } else {
      return null;
    }
  };

  let value = 0,
    customerCount = overview.totalCustomerCount;
  if (Math.floor(customerCount / 5) === customerCount / 5) {
    value = customerCount / 5 - 1;
  } else {
    value = Math.floor(customerCount / 5);
  }

  useEffect(() => {
    if (pageNumber < value) {
      highChartRender();
      window.addEventListener("resize", highChartRender);
      return () => {
        window.removeEventListener("resize", highChartRender);
      };
    }
  }, [remainingSummary]);

  return (
    <Card className={classes.root}>
      {!(
        Object.keys(remainingSummary).length === 0 &&
        remainingSummary.constructor === Object
      ) ? (
        <div>
          {pageNumber < value ? (
            <div
              style={{
                textAlign: "left",
                font: "normal normal bold 20px Roboto",
                letterSpacing: "0px",
                color: "#FFFFFF80",
                opacity: 1,
                background: "#273D49BF 0% 0% no-repeat padding-box",
                boxShadow: "0px 3px 6px #00000033",
              }}
            >
              Remaining Balance Summary
            </div>
          ) : null}
          <div id="sixthCard"></div>
        </div>
      ) : (
        <div className="demo"></div>
      )}
    </Card>
  );
});
