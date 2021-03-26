pragma solidity ^0.8.0;

contract DepositVault {
    address public owner;

    struct Player {
        uint256 balance;
        bool locked;
    }

    mapping(address => Player) public players;
    event Transfer(uint256 amount, address from);

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        require(msg.value >= 0.1 ether, "Minimum 0.1 ETH required");

        players[msg.sender].balance = msg.value;
        players[msg.sender].locked = true;

        emit Transfer(msg.value, msg.sender);
    }

    function withdraw() external payable {
        require(players[msg.sender].locked == true, "Internal error in getting ether balance");
        payable(msg.sender).transfer(players[msg.sender].balance);

        emit Transfer(msg.value, msg.sender);
        delete players[msg.sender];
    }
}