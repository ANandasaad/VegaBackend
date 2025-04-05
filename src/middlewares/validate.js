import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorArray = errors.array();

    const sendNextError = (index) => {
      if (index < errorArray.length) {
        return res.status(400).json({
          success: false,
          message: errorArray[index].msg,
        });
      }
      next();
    };

    sendNextError(0);
  } else {
    next();
  }
};
