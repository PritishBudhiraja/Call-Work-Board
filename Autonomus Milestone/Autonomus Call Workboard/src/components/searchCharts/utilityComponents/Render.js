import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";

import FlexGrid from "./../../charts/utilityComponents/FlexGrid";
import layoutConfig from "./../../charts/layout-config/layoutConfig.json";
import ComponentGetterSearch from "./../../../utils/component-getters/ComponentGetterSearch";

class Render extends Component {
  getComponent = (componentID) => {
    return <ComponentGetterSearch componentId={componentID} />;
  };

  render() {
    const { width } = this.props;
    const layoutConfigView = layoutConfig["0"][width];

    return (
      <FlexGrid
        layoutConfiguration={layoutConfigView}
        getComponent={this.getComponent}
      />
    );
  }
}

export default withWidth()(Render);
