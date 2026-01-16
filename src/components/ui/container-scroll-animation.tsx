"use client";
import React, { useRef } from "react";
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
    offset: ["start start", "end start"],
  });
  
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.7, 0.9] : [0.9, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[100rem] flex items-center justify-center relative p-2 md:p-20"
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
      }}
      className={cn(
        "mx-auto relative bg-neutral-900 border-neutral-800 border-8 shadow-2xl",
        // Tablet Dimensions
        deviceType === "tablet" && "max-w-5xl h-[35rem] md:h-[50rem] rounded-[3rem]",
        // Phone Dimensions
        deviceType === "phone" && "max-w-[350px] h-[700px] rounded-[4rem]"
      )}
    >
      {/* Notch / Camera Detail */}
      <div className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-800 z-20",
        deviceType === "tablet" ? "w-2 h-2 rounded-full mt-4" : "w-32 h-6 rounded-b-2xl"
      )} />

      {/* Internal Screen Container */}
      <div className="h-full w-full overflow-hidden p-1 rounded-[inherit]">
        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-background">
          {children}
        </div>
      </div>
      
      {/* Side Buttons (Visual Polish) */}
      <div className="absolute -right-[10px] top-24 w-[2px] h-16 bg-gradient-to-b from-transparent via-neutral-600 to-transparent" />
    </motion.div>
  );
};
