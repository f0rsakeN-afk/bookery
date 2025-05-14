import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
} from "@/utils/ImageExports";

interface sliderDataTypes {
  name: string;
  alt: string;
}

const sliderData: sliderDataTypes[] = [
  { name: banner1, alt: "Image 1" },
  { name: banner2, alt: "Image 2" },
  { name: banner3, alt: "Image 3" },
  { name: banner4, alt: "Image 4" },
  { name: banner5, alt: "Image 5" },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const slideInterval: number = 4000;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold: number = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prevSlide) => {
      let nextSlide = prevSlide + newDirection;
      if (nextSlide >= sliderData.length) nextSlide = 0;
      if (nextSlide < 0) nextSlide = sliderData.length - 1;
      return nextSlide;
    });
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        paginate(1);
      }, slideInterval);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleSlideNavigation = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="bg-figmaBgSecondary w-full  dark:bg-background">
      <div className="container mx-auto max-w-6xl px-2 xl:px-0">
        <motion.div
          className="relative aspect-[1320/400] w-full overflow-hidden rounded-lg"
          onHoverStart={() => setIsAutoPlaying(false)}
          onHoverEnd={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(
                _e: MouseEvent | TouchEvent | PointerEvent,
                { offset, velocity }
              ) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute h-full w-full"
            >
              <img
                src={sliderData[currentSlide].name}
                alt={sliderData[currentSlide].alt}
                className="h-full w-full rounded-lg object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideNavigation(index)}
                className={cn(
                  "h-1 w-4 md:w-6 xl:w-12 rounded-md transition-all",
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;
