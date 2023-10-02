import userModel from "../models/user.js";

export default class UserManager {
  getUsers = async (param) => {
    return userModel.find(param).lean();
  };

  getUsersBy = (params) => {
    return userModel.findOne(params).lean();
  };

  createUsers = (user) => {
    return userModel.create(user);
  };

  updateUsers = (id, user) => {
    return userModel.findByIdAndUpdate(id, user);
  };

  updateOne = (parm, elem) => {
    return userModel.updateOne(parm, elem);
  };
  
  deleteUsers = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}