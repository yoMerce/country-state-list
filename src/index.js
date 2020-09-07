const assert = require("assert");
const Data = require("./data");

function getCountryInfo(code) {
  assert(code, "A valid contry code is required");

  const country = Data[code];

  if(!country) {
    throw new Error("A valid country code is required.");
  }

  return country;
}

function getStates(code) {
  const country = getCountryInfo(code);

  return country.states;
}

module.exports = {
  getCountryInfo,
  getStates
};
