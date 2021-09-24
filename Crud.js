const { default: axios } = require("axios");
const DigimonModel = require("./mySchema");
const digimonDATA = async (req, res) => {
  try {
    const digimon = await axios.get(
      `https://digimon-api.vercel.app/api/digimon`
    );
    res.status(200).send(digimon.data);
  } catch (err) {
    console.log(err);
  }
};

const getDid = async (req, res) => {
  const email = req.query.email;
  console.log(email);
  try {
    const digimon = await DigimonModel.find({ email });
    res.status(200).send(digimon);
  } catch (err) {
    console.log(err);
  }
};

const createDid = (req, res) => {
  DigimonModel.create(req.body);
};
const updateDid = (req, res) => {
  DigimonModel.findByIdAndUpdate(req.params.id, req.body);
};
const deleteDid = (req, res) => {
  console.log(req.params.id);
  DigimonModel.findByIdAndRemove(req.params.id)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = { digimonDATA, getDid, updateDid, deleteDid, createDid };
