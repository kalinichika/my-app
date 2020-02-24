import React, { Component } from "react";
import Loader from "../Loader";

export default class Image extends Component {
  render() {
    const { image, images, mouse, className } = this.props;
    const { url, name = "" } = image ? image : images ? images[mouse] : {};
    return url ? (
      <div className={`${className} image-container image-fill--${mouse}`}>
        <img src={url} alt={name} />
      </div>
    ) : (
      <Loader />
    );
  }
}
