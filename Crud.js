const { default: axios } = require("axios");
const DigimonModel = require("./mySchema");
const digimonDATA = async (req, res) => {
  try {
    const digimon = await axios.get(
      `https://digimon-api.vercel.app/api/digimon`
    );
    res.status(200).send(digimon.data);
  } catch (err) {
    res.send(err);
  }
};

const getDid = async (req, res) => {
  const email = req.query.email;
  try {
    const digimon = await DigimonModel.find({ email });
    res.status(200).send(digimon);
  } catch (err) {
    res.send(err);
  }
};

const createDid = async (req, res) => {
  try {
    const test = await DigimonModel.create(req.body);
    res.send(test);
  } catch (err) {
    res.send(err);
  }
};
const updateDid = async (req, res) => {
  try {
    const test = await DigimonModel.findByIdAndUpdate(req.params.id, req.body);
    res.send(test);
  } catch (err) {
    res.send(err);
  }
};
const deleteDid = async (req, res) => {
  try {
    const test = await DigimonModel.findByIdAndRemove(req.params.id);
    res.send(test);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { digimonDATA, getDid, updateDid, deleteDid, createDid };
