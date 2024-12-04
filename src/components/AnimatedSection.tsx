import { AnimatedSectionProps } from "types/animated";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = "fade",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setOffset({
        x: window.innerWidth * 0.05,
        y: window.innerHeight * 0.1,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getAnimationProps = () => {
    switch (animationType) {
      case "left":
        return {
          initial: { opacity: 0, x: -offset.x },
          animate: isInView ? { opacity: 1, x: 0 } : {},
        };
      case "right":
        return {
          initial: { opacity: 0, x: offset.x },
          animate: isInView ? { opacity: 1, x: 0 } : {},
        };
      case "top":
        return {
          initial: { opacity: 0, y: -offset.y },
          animate: isInView ? { opacity: 1, y: 0 } : {},
        };
      case "bottom":
        return {
          initial: { opacity: 0, y: offset.y },
          animate: isInView ? { opacity: 1, y: 0 } : {},
        };
      case "zoom":
        return {
          initial: { opacity: 0, scale: 0.5 },
          animate: isInView ? { opacity: 1, scale: 1 } : {},
        };
      case "fade":
      default:
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : {},
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      ref={ref}
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
