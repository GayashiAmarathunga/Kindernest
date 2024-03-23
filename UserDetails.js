const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    parentname: String,
    childname: String,
    Kindergartenname: String,
    lass: String,
    dob: String,
    email: { type: String, unique: true },
    password: String,
    confirmpassword: String,
  },
  {
    timestamps: true,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserDetailSchema);
