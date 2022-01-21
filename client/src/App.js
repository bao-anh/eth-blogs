/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { connectWeb3, initContract } from './helpers/config';
import useUserSelector from './features/user/redux/selectors';
import Header from './components/layouts/header/Header';
import Anime from './features/anime';
import Blog from './features/blog';
import Todo from './features/todo';
import About from './features/about';
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
      <div className="App__content">
        <Routes>
          <Route path="/anime" element={<Anime />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
