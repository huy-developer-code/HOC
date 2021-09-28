import React, { Children, Component } from "react";
export default function (WrapperComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        isHovered: false
      };
    }
    onMouseEnter = () => {
      this.setState({ isHovered: true });
    };
    onMouseLeave = () => {
      this.setState({ isHovered: false });
    };
    render() {
      return (
        <div
          style={{ opacity: this.state.isHovered ? 0.5 : 1 }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrapperComponent {...this.props} />
        </div>
      );
    }
  };
}
