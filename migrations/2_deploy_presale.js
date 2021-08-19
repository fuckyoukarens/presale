const Presale = artifacts.require("FuKPresale");

module.exports = function(deployer) {
    deployer.deploy(Presale);
};