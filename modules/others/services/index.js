const {
  Campaign,
  Agency,
  Reason,
  Airline,
  Airport,
} = require("../model/index");

const getCampaigns = async () => {
  return Campaign.find();
};

const addCampaign = async (name) => {
  console.log(name);
  return new Campaign({ name: name }).save();
};

const deleteCampaign = async (id) => {
  await Campaign.deleteOne({ _id: id });
  return true;
};

const getReasons = async () => {
  return Reason.find();
};

const addReason = async (name) => {
  console.log(name);
  return new Reason({ name: name }).save();
};

const deleteReason = async (id) => {
  await Reason.deleteOne({ _id: id });
  return true;
};

const getAgencies = async () => {
  return Agency.find();
};
const getAirlines = async () => {
  return Airline.find();
};
const getAirports = async () => {
  return Airport.find();
};
module.exports = {
  getCampaigns,
  addCampaign,
  deleteCampaign,
  getReasons,
  addReason,
  deleteReason,
  getAgencies,
  getAirlines,
  getAirports,


};
