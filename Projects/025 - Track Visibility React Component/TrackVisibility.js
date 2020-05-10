import React, { Component } from "react";

class TrackVisibility extends Component {
  ref = React.createRef();

  async componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          // Item is fully visible
          this.props.onVisible();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.8 }
    );
    if (this.ref.current) {
      observer.observe(this.ref.current);
    }
  }
  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}

export default TrackVisibility;
