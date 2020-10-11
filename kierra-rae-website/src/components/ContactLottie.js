import React, { useEffect, createRef } from 'react';


import lottie from 'lottie-web';
import animation from '../animations/data.json';

const ContactLottie = () => {
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
      <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default ContactLottie;
