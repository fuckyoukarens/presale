const Migrations = artifacts.require("Migrations");

//0x5e581E1f20fA68752AA2CFd2e584EE8094d2a5a4
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
