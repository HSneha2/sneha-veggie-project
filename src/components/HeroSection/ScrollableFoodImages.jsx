import React from 'react';

const ScrollableFoodImages = () => {
  return (
    <div
      style={{
        height: '44%',
        width: '11%',
        position: 'relative',
        aspectRatio: 2 / 3,
      }}
    >
      <img
        src={
          process.env.PUBLIC_URL +
          `/assets/images/hero-section-slide-food-1.png`
        }
        alt='scrollImage'
        style={{ height: '122%' }}
      />
    </div>
  );
};

export default ScrollableFoodImages;
