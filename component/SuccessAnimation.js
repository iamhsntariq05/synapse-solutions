import React from 'react'
import Lottie from 'react-lottie'
import animationdata from './animationdata.json'


const LottieAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationdata,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 0.1
  }

  return (
    <div style={{ pointerEvents: 'none' }}>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        loop={false} // Set loop prop to false to prevent the animation from looping
      autoplay={true}
      />
    </div>
  )
}

export default LottieAnimation