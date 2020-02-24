import React, { Component } from "react";
import Image  from "../Image";
import ImageMouse  from "../ImageMouse";

export default class Card extends Component {
  render() {
    const {
      header,
      image = null,
      images = null,
      text,
      options,
      className
    } = this.props;
    const optionsClass = options ? `card-box--${options}` : "";
    return (
      <div className={`${className} card-box ${optionsClass}`}>
        <div className="card-box__header">{header}</div>
        {image ? (
          <Image className="card-box__image" image={image} />
        ) : images ? (
          <ImageMouse className="card-box__image" images={images} />
        ) : (
          ""
        )}
        <div className="card-box__text">{text}</div>
      </div>
    );
  }
}
