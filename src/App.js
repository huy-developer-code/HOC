import React, { Component } from "react";
import AwesomeImage from "./component/AwesomeImage";
import OpaticyHover from "./component/OpaticyHover";
import WidthHoverOpacity from "./component/WidthHoverOpacity";

export default class App extends Component {
  render() {
    const HoverOpaticyAwesomeImage = WidthHoverOpacity(AwesomeImage);
    return (
      <OpaticyHover>
        <HoverOpaticyAwesomeImage src="https://vaithuhayho.com/wp-content/uploads/2021/03/hinh-anh-dep-ve-tinh-yeu-9-1.jpg" />
      </OpaticyHover>
    );
  }
}
