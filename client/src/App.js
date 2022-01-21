/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/layouts/header/Header';
import { connectWeb3, initContract } from 'helpers/config';
import useUserSelector from 'features/user/redux/selectors';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { userAccount } = useUserSelector();

  const load = async () => {
    await connectWeb3(dispatch);
  };

  useEffect(() => {
    load();
    initContract(userAccount, dispatch);
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
