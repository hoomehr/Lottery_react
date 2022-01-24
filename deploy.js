// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'Your Wallet key Here (phrases)',
    'https://rinkeby.infura.io/v3/e2f6e517c5654d3e93f80a0dd954cdac'

);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from a account', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({ gas: '1000000', from: accounts[0] });
    console.log(interface);
    console.log('contrct deployed to : ', result.options.address);
    provider.engine.stop();

};
deploy();