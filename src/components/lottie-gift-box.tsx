"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import giftBoxAnimation from "/public/assets/GiftBox.json";
import confetti from 'canvas-confetti';

const LottieGiftBox = () => {
  const lottieRef = useRef<any>(null);

  const triggerConfetti = (event: React.MouseEvent) => {
    // 클릭한 위치 계산
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const heart = confetti.shapeFromText({
      text: '❤️'
    });

    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0.8,
      decay: 0.94,
      startVelocity: 30,
      origin: { x, y }, // 클릭한 위치에서 시작
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    // 첫 번째 confetti (하트 모양)
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: [heart]
    });

    // 첫 번째 confetti (하트 모양)
    confetti({
      ...defaults,
      particleCount: 60,
      scalar: 2,
      shapes: [heart]
    });

    // 세 번째 confetti (원형)
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
      <div className="w-64 h-64 cursor-pointer">
        <Lottie
          lottieRef={lottieRef}
          animationData={giftBoxAnimation}
          loop={true}
          autoplay={true}
          onClick={triggerConfetti}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default LottieGiftBox; 