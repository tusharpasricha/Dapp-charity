var charity = artifacts.require("charity");

module.exports = function (deployer) {
  deployer.deploy(charity,10000,3600);
};
