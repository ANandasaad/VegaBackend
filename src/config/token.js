import jwt from "jsonwebtoken";

export const tokenGenerator = (id) => {
  return jwt.sign({ userId: id }, "secret", {
    expiresIn: "1d",
  });
};
