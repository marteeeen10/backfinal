import errors from "../constants/errors.js";

export default (error, req, res, next) => {
  res.send({ status: "error", error: error.message });
};
