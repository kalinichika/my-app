import React, { Component } from "react";
import Image from "../Image";

export default class Card extends Component {
  render() {
    const {
      header,
      image = null,
      images = null,
      text,
      options,
      className,
      mouse = "top"
    } = this.props;
    const optionsClass = options ? `card-box--${options}` : "";
    return (
      <div className={`${className} card-box ${optionsClass}`}>
        <div className="card-box__header">{header}</div>
        <Image
          className="card-box__image"
          image={image}
          images={images}
          mouse={mouse}
        />
        <div className="card-box__text">{text}</div>
      </div>
    );
  }
}
