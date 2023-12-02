import React from 'react';
import styled from 'styled-components';
import typography from '../../themes/typography';

export const StyledBtn = styled.button`
height: 10%;
border-radius: 6px;
background-color: orange;
width: 28%;
}
`;

const Greetings = () => {
  return (
    <div
      style={{
        height: '48%',
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <div style={{ ...typography.variants.headlineXL, width: '95%' }}>
        Healthy & Fresh Food For You
      </div>
      <div style={{ ...typography.variants.body, width: '55%' }}>
        Created for lovers of healthy, delicious and non-obvious food
      </div>
      <StyledBtn> Check menu</StyledBtn>
    </div>
  );
};

export default Greetings;
