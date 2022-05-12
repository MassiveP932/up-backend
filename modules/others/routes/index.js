const express = require("express");
const router = express.Router();
const OthersController = require("../controllers");
const AuthModel = require("../../auth/model/index");
const { body, query, param } = require("express-validator");
const { validator } = require("../../middlewares");
const routeGuard = require("../../auth/middlewares/guard");

// CAMPAIGNS
router.get(
  "/campaigns",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  OthersController.getCampaigns
);

router.post(
  "/campaign",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN],
  }),
  body([
    "campaign",
  ])
    .exists()
    .isString(),
  
  validator,
  OthersController.addCampaign
);


router.delete(
  "/campaign/:id",
  routeGuard({
    allowedTypes: [
      AuthModel.TYPE_ADMIN
    ],
  }),
  param("id").exists().isMongoId(),
  validator,
  OthersController.deleteCampaign
);


// REASONS
router.get(
  "/reasons",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  OthersController.getReasons
);
router.post(
  "/reason",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN],
  }),
  body([
    "reason",
  ])
    .exists()
    .isString(),
  
  validator,
  OthersController.addReason
);
router.delete(
  "/reason/:id",
  routeGuard({
    allowedTypes: [
      AuthModel.TYPE_ADMIN
    ],
  }),
  param("id").exists().isMongoId(),
  validator,
  OthersController.deleteReason
);



router.get(
  "/airlines",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  OthersController.getAirlines
);
router.get(
  "/airports",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  OthersController.getAirports
);
router.get(
  "/agencies",
  routeGuard({
    allowedTypes: [AuthModel.TYPE_ADMIN,AuthModel.TYPE_USER],
  }),
  validator,
  OthersController.getAgencies
);
module.exports = router;
