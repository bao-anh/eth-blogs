import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const MENU_ENUMS = {
  ANIME: 'anime',
  BLOG: 'blog',
  TODO: 'todo',
  ABOUT: 'about',
};

const MenuHorizontal = () => {
  const [selectedItem, setSelectedItem] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelectedItem(location.pathname.substring(1));
  }, [location.pathname]);

  const handleClick = (e) => {
    navigate(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[selectedItem]} mode="horizontal">
      <Menu.Item key={MENU_ENUMS.ANIME}>
        Anime
      </Menu.Item>
      <Menu.Item key={MENU_ENUMS.BLOG}>
        Blog
      </Menu.Item>
      <Menu.Item key={MENU_ENUMS.TODO}>
        Todo
      </Menu.Item>
      <Menu.Item key={MENU_ENUMS.ABOUT}>
        About me
      </Menu.Item>
    </Menu>
  );
};

export default MenuHorizontal;
