let web3;
let myContract;
let currentAccount;

async function connectToMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            currentAccount = accounts[0];
            document.getElementById("connectBtn").innerText = "Connected: " + currentAccount.slice(0,6) + "...";
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert("Please install MetaMask!");
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(ethereum);

        const contractAddress = ""; 

        const contractAbi = [

	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "certificateId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "candidateName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"name": "CertificateIssued",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_candidateName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_grade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "issueCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "certificateDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "candidateName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateID",
				"type": "string"
			}
		],
		"name": "getCertificate",
		"outputs": [
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "candidateName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}

];

        myContract = new web3.eth.Contract(contractAbi, contractAddress);

    } else {
        alert("MetaMask not detected. Please install it.");
    }
});