import { Image } from "./Image";
import React, { useState, useEffect } from "react";

interface ArticlesProps {
  image: string;
  title: string;
  content: string;
}

interface Slide {
  image: string;
  title: string;
  content: string;
  url?: string; // Optional: for navigation
}

interface SliderProps {
  slides: Slide[];
}

export const Articles = ({ image, title, content }: ArticlesProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px]">
      {/* Images Section */}
      <div className="">
        <Image src={image} alt={title} />
      </div>
      {/* Text Section */}
      <div className="flex flex-col items-center justify-start gap-[10px]">
        <h2 className="font-vietnam font-extrabold text-[30px] text-white">
          {title}
        </h2>
        <p className="text-[18px] text-white font-light max-w-[400px] text-center">
          {content}
        </p>
      </div>
    </div>
  );
};

export const Slider = ({ slides }: SliderProps) => {
  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [slideWidth, setSlideWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = slides.length;

  // Duplicate slides for infinite effect
  const extendedSlides = [
    ...slides.slice(-visibleCount),
    ...slides,
    ...slides.slice(0, visibleCount),
  ];

  // Start at the first "real" slide
  const [index, setIndex] = useState(visibleCount);

  // Animation state
  const [isTransitioning, setIsTransitioning] = useState(false);

  // For button click animation
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  // Move to next/prev slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setRightActive(true);
    setTimeout(() => setRightActive(false), 100); // animation duration
    setIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setLeftActive(true);
    setTimeout(() => setLeftActive(false), 100); // animation duration
    setIndex((prev) => prev - 1);
  };

  // Handle the infinite loop effect
  useEffect(() => {
    if (!isTransitioning) return;
    const handle = setTimeout(() => {
      setIsTransitioning(false);
      if (index === extendedSlides.length - visibleCount) {
        setIndex(visibleCount);
      } else if (index === 0) {
        setIndex(total);
      }
    }, 300); // match transition duration
    return () => clearTimeout(handle);
  }, [index, isTransitioning, extendedSlides.length, total, visibleCount]);

  // Calculate translateX
  const gap = 32; // px
  const baseTranslate = -(index * (slideWidth + gap));

  // Responsive slide width
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) setSlideWidth(280);
      else if (window.innerWidth < 1024) setSlideWidth(320);
      else setSlideWidth(380);
    }
  }, [visibleCount]);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[1300px] mx-auto">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`absolute left-[0px] top-[100px] translate-x-[-10%]  w-[110px] h-[110px] max-xl:w-[80px] max-xl:h-[80px] max-sm:w-[60px] max-sm:h-[60px] bg-white rounded-r-full shadow flex items-center justify-center text-2xl z-10 transition-transform duration-100 ${
          leftActive ? "scale-90 bg-green-100" : ""
        }`}
        aria-label="Previous"
      >
        &#8592;
      </button>

      {/* Slides Wrapper */}
      <div
        className="overflow-hidden"
        style={{
          width: `${visibleCount * slideWidth + (visibleCount - 1) * gap}px`,
        }}
      >
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${baseTranslate}px)`,
            transition: isTransitioning
              ? "transform 0.3s cubic-bezier(0.4,0,0.2,1)"
              : "none",
          }}
        >
          {extendedSlides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-[24px] shadow-lg p-0 group cursor-pointer transition-transform duration-200 hover:scale-105"
              style={{ width: `${slideWidth}px` }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover rounded-t-[24px]"
                />
                {/* Read more button, shown on hover */}
                <button
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/90 text-green text-[16px] font-medium px-4 py-1 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-200 shadow"
                  style={{
                    pointerEvents: hoveredIdx === idx ? "auto" : "none",
                  }}
                >
                  Read More...
                </button>
              </div>
              <div className="py-8 px-4">
                <h3
                  className={`font-vietnam font-normal text-[24px] mb-3 transition-colors duration-200 ${
                    hoveredIdx === idx ? "text-green" : "text-dark"
                  }`}
                >
                  {slide.title}
                </h3>
                <p className="text-[18px]  text-dark font-light max-w-[320px]">
                  {slide.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`absolute right-[0px] top-[100px] translate-x-[10%]  w-[110px] h-[110px] max-xl:w-[80px] max-xl:h-[80px] max-sm:w-[60px] max-sm:h-[60px] bg-[#ECECEF] rounded-full shadow flex items-center justify-center text-2xl z-10 transition-transform duration-100 ${
          rightActive ? "scale-90 bg-green-100" : ""
        }`}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
};
