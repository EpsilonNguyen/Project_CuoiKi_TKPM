import { createError } from "./error.js";
import jwt, { verify } from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "User chưa được xác thực!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token không chính xác!"));

    req.user = user;
    next();
  })
}

export const verifyUser = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Bạn chưa được cấp quyền!"));
    }
  });
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Bạn chưa được cấp quyền!"));
    }
  });
};