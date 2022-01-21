import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  height: 64px;
  box-shadow: 0 2px 8px #f0f1f2;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;

  .header__logo {
    height: 100%;
    display: flex;
    align-items: center;

    h3 {
      transform: translateX(-20px) !important;
      margin-bottom: 0px !important;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .ant-menu-horizontal {
    border-bottom: none !important;
    width: -webkit-fill-available;
  }
`;
