import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectWeb3 } from './helpers/config';
import { userAccountSelector } from './features/user/redux/selectors';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const userAccount = useSelector(userAccountSelector);

  const load = async () => {
    await connectWeb3(dispatch);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      Your account is
      {userAccount}
    </div>
  );
};

export default App;
