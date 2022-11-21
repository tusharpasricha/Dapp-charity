var charity = artifacts.require("charity");

module.exports = function (deployer) {
  deployer.deploy(charity,1000,36000);
};

