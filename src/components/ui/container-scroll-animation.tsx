"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type DeviceType = "tablet" | "phone";

export const ContainerScroll = ({
  titleComponent,
  children,
  deviceType = "tablet",
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  deviceType?: DeviceType;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // RESTORED: Original animation transforms
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} deviceType={deviceType}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center mb-10">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  deviceType,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  deviceType: DeviceType;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 7px 10px #0000004a, 0 20px 20px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={cn(
        "mx-auto -mt-40 md:-mt-20 relative bg-[#171717] border-[#262626] border-[8px] md:border-[12px]",
        // SMOOTHER CORNERS: Using higher values for a "Squircle" look
        deviceType === "tablet" && "max-w-5xl h-[30rem] md:h-[40rem] rounded-[40px] md:rounded-[60px]",
        deviceType === "phone" && "max-w-[360px] h-[720px] rounded-[56px]"
      )}
    >
      {/* DYNAMIC ISLAND: Replaces the old notch */}
      {deviceType === "phone" && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50">
          <div className="h-7 w-28 bg-black rounded-full border border-white/5 shadow-inner flex items-center justify-end px-3">
             {/* Small lens detail */}
             <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
        </div>
      )}

      {/* TABLET CAMERA: Small dot for tablet mode */}
      {deviceType === "tablet" && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-800 z-30" />
      )}

      {/* INTERNAL SCREEN: Nested radius math for smoothness */}
      <div className="h-full w-full p-1.5 md:p-2 overflow-hidden rounded-[inherit]">
        <div 
          className={cn(
            "h-full w-full overflow-hidden bg-white dark:bg-neutral-950",
            // Inner radius is smaller than outer frame for perfect nesting
            deviceType === "tablet" ? "rounded-[30px] md:rounded-[48px]" : "rounded-[42px]"
          )}
        >
          {children}
        </div>
      </div>
      
      {/* HARDWARE BUTTONS: Visual depth during rotation */}
      <div className="absolute -right-[2px] top-32 w-[3px] h-14 bg-neutral-800 rounded-l-md" />
      <div className="absolute -left-[2px] top-28 w-[3px] h-10 bg-neutral-800 rounded-r-md" />
    </motion.div>
  );
};
