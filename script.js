// Smart contract ABI and address
const contractABI = [ /* Paste the ABI here */ ];
const contractAddress = "0xYourContractAddress"; // Replace with your deployed contract address

let web3;
let valetContract;

// Initialize Web3 and contract
async function initialize() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    valetContract = new web3.eth.Contract(contractABI, contractAddress);
  } else {
    alert("Please install MetaMask to use this feature.");
  }
}

// Issue Access Token
async function issueAccessToken() {
  const requesterAddress = document.getElementById("requesterAddress").value;
  const tokenDuration = document.getElementById("tokenDuration").value;
  const accounts = await web3.eth.getAccounts();

  valetContract.methods.issueAccessToken(requesterAddress, tokenDuration).send({ from: accounts[0] })
    .then(receipt => {
      document.getElementById("issueResult").innerText = `Token Issued: ${receipt.events.TokenIssued.returnValues.tokenId}`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("issueResult").innerText = "Error issuing token.";
    });
}

// Validate Access Token
async function validateAccessToken() {
  const tokenId = document.getElementById("tokenIdValidate").value;

  valetContract.methods.validateAccessToken(tokenId).call()
    .then(isValid => {
      document.getElementById("validateResult").innerText = `Token Valid: ${isValid}`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("validateResult").innerText = "Error validating token.";
    });
}

// Revoke Access Token
async function revokeAccessToken() {
  const tokenId = document.getElementById("tokenIdRevoke").value;
  const accounts = await web3.eth.getAccounts();

  valetContract.methods.revokeAccessToken(tokenId).send({ from: accounts[0] })
    .then(receipt => {
      document.getElementById("revokeResult").innerText = `Token Revoked: ${tokenId}`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("revokeResult").innerText = "Error revoking token.";
    });
}

// Initialize on load
window.addEventListener('load', initialize);
