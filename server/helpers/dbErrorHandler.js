"use strict";
const getUniqueErrorMessage = (err) => {
  let output;
  try {
    output = "email already exists";
  } catch (ex) {
    output = "Unique field already exists";
  }
  return output;
};

const getErrorMessage = (err) => {
  let message = "";
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errName in err.errors) {
      if (err.errors[errName].message) message = "Something went wrong";
    }
  }
  return message;
};

module.exports = { getErrorMessage };
