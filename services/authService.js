import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { AuthenticationError, ConflictError } from "../utils/appError.js";
import { User } from "../models/associations.js";

export class AuthService {
  async login(user) {
    try {
      const payload = { id: user.id, email: user.email };
      const token = jwt.sign(payload, config.jwtSecret, {
        expiresIn: config.jwtExpires,
      });
      return token;
    } catch (e) {
      throw new AuthenticationError("Failed to generate token");
    }
  }

  async register(payload) {
    const existingUser = await User.findOne({
      where: { email: payload.email },
    });
    if (existingUser) {
      throw new ConflictError("User with the same email already exists");
    }
    const user = User.create(payload);
    return user;
  }
}

export default new AuthService();
