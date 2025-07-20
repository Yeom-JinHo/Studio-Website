"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import giftBoxAnimation from "/public/assets/GiftBox.json";
import confetti from 'canvas-confetti';

const LottieGiftBox = () => {
  const lottieRef = useRef<any>(null);

  const triggerConfetti = () => {
    const heart = confetti.shapeFromText({
      text: '❤️'
    });


    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: [heart]
    });

    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 3,
      shapes: [heart]
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  };


  return (
    <div className="flex flex-col items-center gap-4">
      {/* Lottie 애니메이션 */}
      <div className="w-64 h-64">
        <Lottie
          lottieRef={lottieRef}
          animationData={giftBoxAnimation}
          loop={true}
          autoplay={true}
          onClick={triggerConfetti}
        />
      </div>
    </div>
  );
};

export default LottieGiftBox; 