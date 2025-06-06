import { useState, useEffect } from "react";

const images = [
  "./images/einsteinSlider.jpg",
  "./images/hawkingSlider.avif",
  "./images/teslaSlider.jpg",
];

function preloadImages(imageArray) {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex">
        <div className="w-[1000px] mx-auto overflow-hidden rounded-md shadow-lg h-auto pt-2 relative">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
            
            {images.map((src, i) => (
            <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full flex-shrink-0 h-auto object-cover"
            />
            ))}
        </div>
        </div>
    </div>
  );
}