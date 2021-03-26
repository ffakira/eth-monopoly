const DepositVault = artifacts.require("DepositVault");

module.exports = function (deployer) {
    deployer.deploy(DepositVault);
}