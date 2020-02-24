import React, { Component } from "react";
import { connect } from "react-redux";

class ImageMouse extends Component {
  render() {
    const { images, mouse, className} = this.props;
    return (
      <div className={`${className} image-container`}>
        {Object.keys(images).map(image => {
          const visibility = mouse === image ? "visible" : "";
          return <div key={image} className={`image-${image} ${visibility}`}/>;
        })}
        ;
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mouse: state.about.mouse,
});
export default connect(mapStateToProps)(ImageMouse);
