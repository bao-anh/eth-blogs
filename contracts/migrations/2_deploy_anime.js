
const Animes = artifacts.require("./Animes.sol");

module.exports = function(deployer) {
  deployer.deploy(Animes);
};