import React from "react";
import PropTypes from "prop-types";
import chat from "../../assets/icon-chat.png";
import money from "../../assets/icon-money.png";
import security from "../../assets/icon-security.png";
import classes from "./Feature.module.css";

const Feature = (props) => {
  let image = "";


/* A switch statement that is checking the value of the img property of the element object. If the
value is pictureChat, it will set the image variable to the chat variable. If the value is
pictureMoney, it will set the image variable to the money variable. If the value is pictureSecurity,
it will set the image variable to the security variable. If the value is none of these, it will do
nothing. */
  switch (props.element.img) {
    case "pictureChat":
      image = chat;
      break;

    case "pictureMoney":
      image = money;
      break;

    case "pictureSecurity":
      image = security;
      break;
    default:
      break;
  }

  return (
    <div className={classes["feature-item"]}>
      <img
        src={image}
        alt={props.element.title}
        className={classes["feature-icon"]}
      />
      <h3 className={classes["feature-item-title"]}>{props.element.title}</h3>
      <p>{props.element.text}</p>
    </div>
  );
};

Feature.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Feature;
