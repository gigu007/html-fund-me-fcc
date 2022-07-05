 import { ethers } from "./ethers-5.6.esm.min.js"
import {abi,contractAddress} from "./constants.js"
// const { ethers } = require("ethers")
// const connectButton = document.getElementById("connectButton")
// const fundButton = document.getElementById("fundButton")
// connectButton.onClick = connect
// fundButton.onClick = fund
const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fund")
connectButton.onClick = connect
fundButton.onClick = fund
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        connectButton.innerHTML = "connected"
    } else {
        connectButton.innerHTML =
            "Please install metamask"
    }
}

async function fund() {
  const ethAmount="77"
    console.log(`Funding with ${ethAmount}...`)
    if (typeof window.ethereum !== "undefined") {
        //to send a transaction we need
        //1: provider /connection to the block chain
        //2: signer /wallet /someone with some gas
        //3: contract we are interacting with
        //to get that contract,we are going to need
        //4: ABI and address

        //1:
        const provider = new ethers.provider.web3Provider(window.ethereum)
        //web3 provider is an object in ethers that allows us to wrap around stuff like metamask,
        //it is similar to jsonRPC provider which is where we put our alchemy endpoint or when we are working,
        //with metamask whatever enpoint we have in our network section,
        //the web3Provider takes that http endpoint and automatically sticks it in ethers for us
        //since our provider is connected to the metamask,we can get the signers or wallet
        
        //2:
        const signer = provider.getSigner()
        //it is going to return whatever wallet is connected to the provider.our provider is our metamask
        console.log(signer)
        //:3
        const contract =new ethers.Contract(contractAddress,abi,signers)
        const transactionResponse =await contract.fund({value:ethers.utils.parseEther(ethAmount),
        }
        )

    }
}
