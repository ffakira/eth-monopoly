import React from 'react';

require("prismjs");
require("prismjs/themes/prism.css");

const code = `pragma solidity ^0.8.0;

contract DepositVault {
  public address owner;
  
  struct Player {
    uint256 balance;
    bool locked;
  }
  
  mapping(address => Player) public players;
  
  event Deposit(uint256 amount, address from);
  event Withdraw(uint256 amount, address from);
  
  constructor() {
    owner = msg.sender;
  }
  
  modifier verifyDeposit() {
    require(players[msg.sender].locked == true, "You already deposited!");
    _;
  }
  
  function deposit(uint256 amount) external payable verifyDeposit { 
    require(amount >= 0.1 ether, "Minimum 0.1 ETH required");
    msg.sender.transfer(amount);
    players[msg.sender].balance = amount;
    players[msg.sender].locked = true;
    
    emit Deposit(players[msg.sender].balance, msg.sender);
  }
  
  function withdraw() external verifyDeposit {
    require(players[msg.sender].balance >= 0.1, "Internal error in getting ether balance");
    address(this).transfer(players[msg.sender].balance);
    players[msg.sender].balance = 0;
    players[msg.sender].locked = false;
    
    emit Withdraw(players[msg.sender].balance, msg.sender);
  }
}
`;

function Documentation(): JSX.Element | null {
    return (
        <div>
            <h2>Documentation</h2>
            <p>Here is a documentation of the smart contracts, where you might find it useful.</p>

            <h4>Table of Contents</h4>
            <a href="#DepositVault">DepositVault.sol</a>

            <h6 id="DepositVault" className="font-weight-bold">DepositVault.sol</h6>
            <pre>
                <code className="language-solidity">{code}</code>
            </pre>
        </div>
    );
}

export default Documentation;