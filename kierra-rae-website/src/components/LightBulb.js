import React, { useEffect, createRef } from 'react';

import lottie from 'lottie-web';
import animation from '../animations/4090-light-bulb (1).json';

const LightBulbLottie = () => {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy();
  }, []);

  return (
    <div>
      <div
        className="animation-container"
        style={{ height: 50, width: 50, }}
        ref={animationContainer}
      />
    </div>
  );
};

export default LightBulbLottie;
