/* eslint-disable import/no-unresolved */
import Web3 from 'web3';
import truffleContract from '@truffle/contract';
import { setAccount } from 'features/user/redux/actions';
import { initContract as initContractAction } from 'features/contract/redux/actions';
import AnimeContract from '../../../contracts/build/contracts/Animes.json';
import TodoContract from '../../../contracts/build/contracts/Todos.json';

const getWeb3 = async () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  let web3 = null;
  const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
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
    web3 = new Web3(provider);
  }
  return { web3, provider };
};

export const connectWeb3 = async (dispatch) => {
  const { web3, provider } = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  const userAccount = accounts[0];
  setAccount(dispatch, userAccount);
  return { provider };
};

export const initContract = async (dispatch) => {
  const { provider } = await connectWeb3(dispatch);

  const animeProvider = truffleContract(AnimeContract);
  animeProvider.setProvider(provider);
  const todoProvider = truffleContract(TodoContract);
  todoProvider.setProvider(provider);

  const todoContract = await todoProvider.deployed();
  const animeContract = await animeProvider.deployed();

  initContractAction(dispatch, {
    animeContract,
    todoContract,
  });
};
