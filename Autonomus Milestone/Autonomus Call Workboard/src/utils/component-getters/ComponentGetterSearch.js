import React from "react";

import { MY_RENDER_APP } from "../Constants";

import FirstCard from "./../../components/searchCharts/gridElementsSearch/FirstCard";
import SecondCard from "./../../components/searchCharts/gridElementsSearch/SecondCard";
import ThirdCard from "./../../components/searchCharts/gridElementsSearch/ThirdCard";
import FouthCard from "./../../components/searchCharts/gridElementsSearch/FourthCard";
import FifthCard from "./../../components/searchCharts/gridElementsSearch/FifthCard";
import SixthCard from "./../../components/searchCharts/gridElementsSearch/SixthCard";

function componentGetter(props) {
  const { componentId } = props;
  switch (componentId) {
    case MY_RENDER_APP.FIRST_CARD:
      return <FirstCard />;

    case MY_RENDER_APP.SECOND_CARD:
      return <SecondCard />;

    case MY_RENDER_APP.THIRD_CARD:
      return <ThirdCard />;

    case MY_RENDER_APP.FOURTH_CARD:
      return <FouthCard />;

    case MY_RENDER_APP.FIFTH_CARD:
      return <FifthCard />;

    case MY_RENDER_APP.SIXTH_CARD:
      return <SixthCard />;

    default:
      return null;
  }
}

export default componentGetter;
