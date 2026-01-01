import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideImageProps {
  imageUrl: string;
  index: number;
}

const SlideImage = React.memo(({ imageUrl, index }: SlideImageProps) => (
  <motion.img
    src={imageUrl}
    alt={`slide-${index}`}
    className="absolute inset-0 w-full h-full object-center rounded-lg opacity-100"
    loading="lazy"
  />
));

SlideImage.displayName = "SlideImage";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [_isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [direction, setDirection] = useState<number>(0);

  // Hardcoded images array - EDIT THESE URLs
  const images = useMemo(
    () => [
      "https://res.cloudinary.com/desslvu1w/image/upload/v1767117341/airindia_far_east_vovngw.jpg",
      "https://res.cloudinary.com/desslvu1w/image/upload/v1767245046/british-airways-lg_bjvopq.jpg",
      "https://www.ticketstoindia.co.uk/holidaybanners/img/2024_1/indigo_banner_2.jpg?v=0.03",
      "https://www.ticketstoindia.co.uk/holidaybanners/img/2025/airindia_far_east.jpg?v=0.03",
    ],
    []
  );

  // Memoized slides - automatically created from images array
  const slides = useMemo(
    () => images.map((url) => ({ imageUrl: url })),
    [images]
  );

  // Preload all images for better performance
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageUrl;
    });
  }, [slides]);

  // Handle window resize with debouncing for better performance

  useEffect(() => {
    let timeoutId: number | undefined;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150); // Debounce by 150ms
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto-slide functionality - Reset currentSlide if it exceeds slides length
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  const slideVariants = useMemo(
    () => ({
      enter: (dir: number) => ({
        x: dir > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
      },
      exit: (dir: number) => ({
        zIndex: 0,
        x: dir < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9,
      }),
    }),
    []
  );

  // const swipeConfidenceThreshold = 10000;
  // const swipePower = useCallback((offset, velocity) => {
  //   return Math.abs(offset) * velocity;
  // }, []);

  //   const handleDragEnd = useCallback(
  //     (e, { offset, velocity }) => {
  //       const swipe = swipePower(offset.x, velocity.x);

  //       if (swipe < -swipeConfidenceThreshold) {
  //         nextSlide();
  //       } else if (swipe > swipeConfidenceThreshold) {
  //         prevSlide();
  //       }
  //     },
  //     [nextSlide, prevSlide, swipePower]
  //   );

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 mt-4 ">
      {/* Slider Container */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96  sm:rounded-xl overflow-hidden shadow-lg rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
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
              scale: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            // onDragEnd={handleDragEnd}
            className="absolute inset-0 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl cursor-grab active:cursor-grabbing"
          >
            {/* Image Display */}
            <SlideImage
              imageUrl={slides[currentSlide].imageUrl}
              index={currentSlide}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-200 backdrop-blur-sm z-10"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-200 backdrop-blur-sm z-10"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-600 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
