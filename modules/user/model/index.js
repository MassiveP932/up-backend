const mongoose = require("mongoose");
const AuthModel = require("../../auth/model/index");
const STATUS = {
  STATUS_PENDING: "PENDING",
  STATUS_CONFIRMED: "CONFIRMED",
  STATUS_DECLINED: "DECLINED",
};
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: false },
    password: { type: String, required: false },
    email: { type: String, required: false },
    legalPerson: { type: Boolean, default: false },
    cName: { type: String, required: false },
    taxNo: { type: String, required: false },
    mersis: { type: String, required: false },
    fullName: { type: String, required: true },
    tcNo: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    address: { type: String, required: false },
    userLawyerName: { type: String, required: false },
    userLawyerBench: { type: String, required: false },
    userLawyerRegNo: { type: String, required: false },
    userLawyerBank: { type: String, required: false },
    partner: { type: Boolean, default: false },
    group: {
      taraf: { type: Boolean, default: false },
      agent: { type: Boolean, default: false },
      lawyer: { type: Boolean, default: false },
    },
    panelMail: { type: Boolean, required: false },
    status: { type: Boolean, required: false },
    emailAuthCode: { type: String, required: false },
    userType: {
      type: String,
      enum: [AuthModel.TYPE_ADMIN, AuthModel.TYPE_PERSON, AuthModel.TYPE_USER],
      required: true,
    },
    userStatus: {
      type: String,
      enum: [
        STATUS.STATUS_CONFIRMED,
        STATUS.STATUS_DECLINED,
        STATUS.STATUS_PENDING,
      ],
      default: STATUS.STATUS_PENDING,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("users", UserSchema);

module.exports = {
  User,
  UserSchema,
  ...STATUS,
};
