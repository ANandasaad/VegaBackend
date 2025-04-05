import { body, param } from "express-validator";

export const BlogValidation = {
  create: [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isString()
      .withMessage("Title must be a string"),
    body("description")
      .notEmpty()
      .withMessage("Description is required")
      .isString()
      .withMessage("Description must be a string"),
    body("image")
      .notEmpty()
      .withMessage("Image is required")
      .isURL()
      .withMessage("Please enter a valid URL"),
  ],
  update: [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isString()
      .withMessage("Title must be a string"),
    body("description")
      .notEmpty()
      .withMessage("Description is required")
      .isString()
      .withMessage("Description must be a string"),
    body("image")
      .notEmpty()
      .withMessage("Image is required")
      .isURL()
      .withMessage("Please enter a valid URL"),

    param("id")
      .notEmpty()
      .withMessage("ID is required")
      .isNumeric()
      .withMessage("Please enter a numeric ID"),
  ],

  delete: [
    param("id")
      .notEmpty()
      .withMessage("ID is required")
      .isNumeric()
      .withMessage("Please enter a numeric ID"),
  ],

  getById: [
    param("id")
      .notEmpty()
      .withMessage("ID is required")
      .isNumeric()
      .withMessage("Please enter a numeric ID"),
  ],
};
