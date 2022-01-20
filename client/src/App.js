import { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

const App = () => {
  const [account, setAccount] = useState(null);

  const load = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const accounts = await web3.eth.requestAccounts();

    setAccount(accounts[0]);
  };

  useEffect(() => {
    load();
  });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      Your account is
      {account}
    </div>
  );
};

export default App;
