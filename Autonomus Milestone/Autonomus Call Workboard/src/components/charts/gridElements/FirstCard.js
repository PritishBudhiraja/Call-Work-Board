import React, { useEffect } from "react";
import { connect } from "react-redux";

import Highcharts from "highcharts";

import Broken from "./../../../assets/Symbol 34 – 1.png";
import NotBroken from "./../../../assets/Symbol 33 – 1.png";

import { Card } from "@material-ui/core";

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
    dataUserCallBookFirst: state.callWorkBoard.dataUserCallbook,
  };
};

export default connect(
  mapStateToProps,
  null
)(function FirstCard(props) {
  const { dataUserCallBookFirst = {} } = props;
  const classes = useStyles();
  const { workbookItems = [] } = dataUserCallBookFirst;
  const data = workbookItems[0];
  const highChartRender = () => {
    if (data) {
      const combinedData = [
        data.totalCurrentOpenAmount,
        ...data.pastDueBucketDocumentAmount,
      ];
      combinedData.pop();
      combinedData.pop();
      let sum = combinedData.reduce((acc, ele) => {
        return acc + ele;
      }, 0);
      const chart = Highcharts.chart("firstCard", {
        chart: {
          type: "column",
          backgroundColor: "#273D49BF",
          height: "88%",
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
          lineColor: "#FFFFFFA6",
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
                font: "normal normal normal 16px Roboto",
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

  useEffect(() => {
    highChartRender();
    window.addEventListener("resize", highChartRender);
    return () => {
      window.removeEventListener("resize", highChartRender);
    };
  }, [dataUserCallBookFirst]);

  return (
    <Card className={classes.root}>
      {data ? (
        <div>
          <div className="companyDetails">
            <div className="customerName">{data.customerName}</div>
            <div className="customerNumber">{data.customerNumber}</div>
          </div>
          <div className="chart-image" style={{ backgroundColor: "#273D49BF" }}>
            <div id="firstCard" style={{ width: "70%" }}></div>
            <div style={{ width: "30%" }}>
              {data.totalBrokenPromises > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      font: "normal normal normal 24px Roboto",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                      opacity: 1,
                    }}
                  >
                    {data.totalBrokenPromises}
                  </p>
                  <img
                    src={Broken}
                    style={{ marginRight: "10%" }}
                    alt={"Unable To Load"}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      font: "normal normal normal 20px/24px Roboto",
                      letterSpacing: "0px",
                      color: "#FFFFFF80",
                      opacity: 1,
                    }}
                  >
                    Broken Promises
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={NotBroken}
                    style={{ marginRight: "10%" }}
                    alt={"Unable To Load"}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      font: "normal normal normal 20px/24px Roboto",
                      letterSpacing: "0px",
                      color: "#FFFFFF80",
                      opacity: 1,
                    }}
                  >
                    No Broken Promises
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="demo"></div>
      )}
    </Card>
  );
});
