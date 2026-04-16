import React from "react";

export function useLimitLengthText(section, text) {


  switch (section) {
    case "name":
      if (text.length < 70) {
        return text;
      } else {
        return `${text.substring(0, 70)} ...`;
      }
      break;
    case "name-left":
        if (text.length < 50) {
          return text;
        } else {
          return `${text.substring(0, 50)} ...`;
        }
        break;
    case "description-left":
      if (text.length < 70) {
        return text;
      } else {
        return `${text.substring(0, 70)} ...`;
      }
    case "description-category":
      if (text.length < 50) {
        return text;
      } else {
        return `${text.substring(0, 50)} ...`;
      }
      break;
    default:
  }

}
