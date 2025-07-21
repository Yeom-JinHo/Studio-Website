"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import giftBoxAnimation from "/public/assets/GiftBox.json";
import confetti from 'canvas-confetti';
import { BlurIn } from './reveal-animations';
import { cn } from "@/lib/utils";

const LottieGiftBox = () => {
  const lottieRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const triggerConfetti = (event: React.MouseEvent) => {

    // Lottie 애니메이션 천천히 사라지기
    setIsVisible(false);
    setIsOpen(true);
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
      particleCount: 60,
      scalar: 2,
      shapes: [heart]
    });

    // 두 번째 confetti (하트 모양, 다른 크기)
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 3,
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

  const resetGift = () => {
    setIsVisible(true);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className='relative w-64 h-64 flex justify-center items-center'>
      <div className="absolute w-64 h-64 cursor-pointer transition-opacity duration-2000 ease-in-out flex justify-center items-center">
      {
        isOpen && (
          <>
            <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "font-bold mt-2 text-3xl text-transparent text-slate-800 ml-3 text-left",
                      "cursor-default text-edge-outline font-display"
                    )}
                  >
                    청람으로 ^__^
                  </h1>
                </BlurIn>
          </>
        )
      }
      </div>
            {/* Lottie 애니메이션 */}
            <div 
        className="absolute w-64 h-64 cursor-pointer transition-opacity duration-2000 ease-in-out"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 2s ease-in-out'
        }}
      >
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
      {/* Reset 버튼 */}
      {!isVisible && (
        <>
        에-계?  이게 다라고?
        
        <Button 
          onClick={resetGift}
          variant="outline"
          className="border-2 border-gray-300 hover:bg-gray-100 transition-all duration-300"
        >
          다시보기.
        </Button>
        </>
      )}
    </div>
  );
};

export default LottieGiftBox; 