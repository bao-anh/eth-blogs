/* eslint-disable import/no-unresolved */
import React from 'react';
import { Typography } from 'antd';
import useUserSelector from 'features/user/redux/selectors';
import MenuHorizontal from './MenuHorizontal';
import HeaderStyled from './styled';

const Header = () => {
  const { userAccount } = useUserSelector();
  const { Title } = Typography;
  return (
    <HeaderStyled className="header">
      <div className="header__logo">
        <img src="/images/wolf_logo.jpeg" height="100%" alt="logo" />
        <Title level={3}>Wolfable</Title>
      </div>
      <MenuHorizontal />
      {userAccount}
    </HeaderStyled>
  );
};

export default Header;
