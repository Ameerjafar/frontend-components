"use client";
import Card from "./component/Card";
import firstCar from "@/public/firstCar.png";
import secondCar from "@/public/secondCar.png";
import thirdCar from '@/public/thirdCar.png'
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [touchComponent, setTouchComponent] = useState<boolean>(false);
  const rotateDegree = [-20, -10, 0, 20];
  const xAxis = [-300, -50, 240, 450];
  const yAxis = [-60, -120, -140, -100];
  const initialRotation = [0, 6, 12, 17];
  const zIndex = [40, 30, 20, 10];
  return (
    <div
      className="flex justify-center min-h-screen relative bg-gray-100 mt-40"
      onClick={() => {
        setTouchComponent(!touchComponent);
        console.log(touchComponent);
      }}
    >
      {rotateDegree.map((value, ind) => {
        return (
          <motion.div
            key={ind}
            initial={{
              x: 0,
              y: 0,
            }}
            animate={
              touchComponent
                ? { x: xAxis[ind], y: yAxis[ind], rotate: value }
                : { x: 0, y: 0 }
            }
            transition={{
              ease: easeInOut,
            }}
            style={{
              zIndex: zIndex[ind],
              rotate: initialRotation[ind],
            }}
            className={`absolute flex justify-center items-center h-screen`}
          >
            <Card
              imgSrc={firstCar}
              title="F1 Race Car"
              secTitle="First Generation"
              aboutProduct="A fast, lightweight race car built for speed and precision."
              speed="260 mph"
              acceleration="0–200 km/h"
              housePower="1,000 hp"
              aeroDynamics="10-level rear"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
