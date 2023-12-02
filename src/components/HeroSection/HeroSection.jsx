import React from 'react';
import styled from 'styled-components';
import Greetings from './Greetings';
import ScrollableFoodImages from './ScrollableFoodImages';

export const MainContainer = styled.div`
  margin-top: 80px;
  display: flex;
  height: '100%';
`;
const HeroSection = () => {
  return (
    <>
      <MainContainer>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '4%',
          }}
        >
          <Greetings />
          <ScrollableFoodImages />
          <div
            style={{
              flexGrow: 1,
              backgroundColor: 'green',
              height: '650px',
            }}
          />
        </div>
      </MainContainer>
      <div>Footer</div>
    </>
  );
};

export default HeroSection;
