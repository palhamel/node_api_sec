import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserSchema } from "../models/userModel";


const User = mongoose.model("User", UserSchema);

export const loginRequired = (req, res, next) => {

}