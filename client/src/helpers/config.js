/* eslint-disable import/no-unresolved */
import Web3 from 'web3';
import { setAccount } from 'features/user/redux/actions';
import { initContract as initContractAction } from 'features/contract/redux/actions';
import AnimeContract from '../../../contracts/build/contracts/Animes.json';
import TodoContract from '../../../contracts/build/contracts/Todos.json';

const getWeb3 = async () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  let web3 = null;
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
    } catch (error) {
      console.error(error);
    }
  } else if (window.web3) {
    // Use Mist/MetaMask's provider.
    return window.web3;
  } else {
    const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
    web3 = new Web3(provider);
  }
  return web3;
};

export const connectWeb3 = async (dispatch) => {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  setAccount(dispatch, accounts[0]);
};

export const initContract = async (account, dispatch) => {
  const web3 = await getWeb3();
  const animeContract = new web3.eth.Contract(AnimeContract.abi, account, {
    transactionConfirmationBlocks: 1,
  });
  const todoContract = new web3.eth.Contract(TodoContract.abi, account, {
    transactionConfirmationBlocks: 1,
  });
  initContractAction(dispatch, {
    animeContract,
    todoContract,
  });
};
