# Introduction
*Last updated: Mar 27, 2021*

Howdy there partner 🤠! This is my third time participating in a hackathon and first time
participating in Chainlink hackathon! Due to an increase of Non Fungible Tokens (NFT), in 
the past few weeks (Mar 2021), I have decided to utilize ERC-1155, which will represent a 
property with the board game based of a simplified version of Monopoly.

**Participant:** Akira F. Fukushima (<a href="https://linkedin.com/in/akiraff">LinkedIn</a>)

## Smart Contract checklist
* Complete developing all smart contracts
  * **DepositVault.sol** ✔️<br>
    Players initially need to deposit some ETH to the vault, in order to reassure that their
    continue to play the Monopoly game. <br><br>
    
  * **ERC20.sol (OpenZeppelin)** <br>
    A slight modification to ERC20.sol, where the smart contract owner will be able to mint 
    and burn tokens. <br><br>
    
  * **ERC1155.sol (OpenZeppelin)** <br>
    Still doing some research on ERC1155, as I haven't got the change to use it yet. <br><br>
    
  * **RandomNumberConsume.sol (Chainlink)** <br>
    I will be generating random  numbers between `1-120` for cards, `1-12` for dice, and `1-40` 
    for board itself. Which will represent the position the player is on. <br><br>
    
  * **BoardGame.sol** <br>
    Keeps in track the position and the properties of all players. <br><br>
    
  * **CardDeck.sol** <br>
    Responsible in keeping in a track of 120 cards.
    
## Building Smart Contracts
I will be providing a further details on how to compile, and deploy onto Kovan network. Currently
I am using Ganache, and setting up some tests with the Smart Contracts.