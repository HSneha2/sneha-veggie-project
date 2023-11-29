import React, { useState } from 'react';
import styled from 'styled-components';
// import Logo from '../../../public/assets/icons/logo.svg';
export const TopNavBar = styled.div`
  display: flex;
  border: 1px solid grey;
  align-items: center;
  height: 80px;
  flex-wrap: wrap;
  :first-child {
    flex-grow: 4;
    padding-left: 2%;
  }

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
  flex: 1;
  padding-right: 2%;
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
        <div>
          <img src='/assets/icons/logo.svg' alt='logo' />
        </div>
        {!showBurgerMenu ? (
          <NavItem>
            <div
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              About us
            </div>
            <div
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Menu
            </div>
            <div
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Contact us
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
