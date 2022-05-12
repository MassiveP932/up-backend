const express = require("express");
const router = express.Router();
const UserController = require("../controllers");
const AuthModel = require("../../auth/model/index");
const { body, query, param } = require("express-validator");
const { validator } = require("../../middlewares");
const routeGuard = require("../../auth/middlewares/guard");

router.post(
  "/",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  body([
    "fullName",
    "phone",
    "userType",
    "userLawyerRegNo",
    "userLawyerBench",
    "userLawyerName",
    "userLawyerBank",
    "tcNo",
    "mersis",
    "taxNo",
    "cName",
    "address",
  ])
    .optional()
    .isString(),
  body(["email"]).optional().isEmail(),
  body(["panelMail", "status", "stopaj", "partner", "applicant", "legalPerson"])
    .optional()
    .isBoolean(),
  body(["group"]).optional(),
  validator,
  UserController.addUser
);

router.get(
  "/",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  query(["fullName", "name", "sort"]).optional().isString(),
  query(["limit", "skip"]).optional().toInt().isInt(),
  query(["status"]).optional().isBoolean(),
  query(["group","userType"]).optional(),
  validator,
  UserController.getUsers
);
router.get(
  "/agencies",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  UserController.getAgencies
);
router.get(
  "/managers",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  UserController.getManagers
);
router.get(
  "/:userId",
  routeGuard({
    allowedTypes: [
      AuthModel.TYPE_ADMIN,
      AuthModel.TYPE_USER,
    ],
  }),
  param("userId").exists().isMongoId(),
  validator,
  UserController.getUserWithById
);
router.put(
  "/:userId",
  routeGuard({
    allowedTypes: [
      AuthModel.TYPE_ADMIN,
      AuthModel.TYPE_USER,
    ],
  }),
  param("userId").exists().isMongoId(),
  body(["user"]).exists(),
  validator,
  UserController.updateUserWithById
);
router.post(
  "/:userId/change-user-status",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN, AuthModel.TYPE_USER],
  }),
  param("userId").exists().isMongoId(),
  body(["userStatus"]).exists(),
  validator,
  UserController.changeUserStatusWithById
);
router.post(
  "/:userId/receipt",
  routeGuard({
    allowedTypes: [
      AuthModel.TYPE_ADMIN,
      AuthModel.TYPE_USER,
    ],
  }),
  param("userId").exists().isMongoId(),
  body(["description"]).exists(),
  body(["amount"]).exists().toInt().isInt(),
  body(["receiptDate"]).exists().isISO8601(),
  validator,
  UserController.addReceiptWithById
);
router.delete(
  "/:userId/receipt/:createDate",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN, AuthModel.TYPE_USER],
  }),
  param("userId").exists().isMongoId(),
  param(["createDate"]).exists(),
  validator,
  UserController.deleteOneReceipt
);
router.post(
  "/:userId/changestatus",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN],
  }),
  param("userId").exists().isMongoId(),
  body(["newStatus"]).optional(),
  body(["newUserStatus"]).optional(),

  validator,
  UserController.changeStatusWithById
);

module.exports = router;
