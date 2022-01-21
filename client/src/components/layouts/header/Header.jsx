/* eslint-disable import/no-unresolved */
import React from 'react';
import useUserSelector from 'features/user/redux/selectors';
import HeaderStyled from './styled';

const Header = () => {
  const { userAccount } = useUserSelector();
  return (
    <HeaderStyled className="header">
      {userAccount}
    </HeaderStyled>
  );
};

export default Header;
