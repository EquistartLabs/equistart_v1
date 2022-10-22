const tokenFactory = artifacts.require("TokenFactory");
const ERC20Token = artifacts.require("ERC20Token");
const crowdsale = artifacts.require("Crowdsale");
const crowdsaleFactory = artifacts.require("CrowdsaleFactory");
const timelockController=artifacts.require("TimelockController");
const mygo=artifacts.require("MyGovernor");
const proposers= ["0xe6Aba2eac9AF22D196F904dcd378Dcd25D1ecc13"];
const executors= ["0xe6Aba2eac9AF22D196F904dcd378Dcd25D1ecc13"];
const owner="0xe6Aba2eac9AF22D196F904dcd378Dcd25D1ecc13"


module.exports =  (deployer)=> {
  // deployer.deploy(tokenFactory);
  deployer.deploy(ERC20Token,"Yakshesh","YAKSH",100,owner).then(()=>{
    console.log("ERC 20 TOken Contract address:", ERC20Token.address);
    return deployer.deploy(crowdsale,1,owner,ERC20Token.address)
  })
  deployer.deploy(crowdsaleFactory);
  deployer.deploy(timelockController,11,proposers,executors).then(()=>{
     return deployer.deploy(mygo,ERC20Token.address,timelockController.address);
   })
};
