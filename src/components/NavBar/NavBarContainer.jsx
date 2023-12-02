import React, { useState } from 'react';
import styled from 'styled-components';
// import Logo from '../../../public/assets/icons/logo.svg';
import theme from '../../themes';
export const TopNavBar = styled.div`
  display: flex;
  box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 80px;
  flex-wrap: wrap;
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 768px) {
    :first-child {
      flex-grow: 10;
      padding-left: 2%;
    }
  }
`;

// TO check: width its not taking in %, changes are not reflected
export const NavItem = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  flex-grow: 1;
  padding-right: 2%;
  justify-content: space-between;
`;

const BurgerMenu = styled.div`
  display: none; /* Hidden by default */
  cursor: pointer;
  flex: 2;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex; /* Displayed on smaller screens */
    padding-right: 4%;
  }
`;

const NavBarContainer = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const { typography } = theme;

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setShowBurgerMenu(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log('showBurgerMenu', showBurgerMenu);
  return (
    <>
      <TopNavBar>
        <div style={{ display: 'flex', flexGrow: 24 }}>
          <img
            src={process.env.PUBLIC_URL + `/assets/icons/logo.svg`}
            alt='logo'
            style={{ paddingLeft: '5%' }}
          />
        </div>
        {!showBurgerMenu ? (
          <NavItem>
            <div
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                ...typography.variants.caption,
              }}
            >
              ABOUT US
            </div>
            <div
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                ...typography.variants.caption,
              }}
            >
              MENU
            </div>
            <div
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                ...typography.variants.caption,
              }}
            >
              CONTACT US
            </div>
          </NavItem>
        ) : (
          <BurgerMenu onClick={toggleBurgerMenu}>☰</BurgerMenu>
        )}
      </TopNavBar>
    </>
  );
};

export default NavBarContainer;
