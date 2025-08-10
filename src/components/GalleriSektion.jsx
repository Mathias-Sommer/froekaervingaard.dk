import React, { useState, useEffect } from "react";

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );

  // Handle ESC and arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          showPrev();
          break;
        case "ArrowRight":
          showNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="bg-white px-[5%] py-[80px] w-full">
      <h2 className="text-[#191919] text-5xl md:text-7xl font-black tracking-[-0.04em] mb-12 text-center">
        Galleri
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="bg-[#f8f8f8] rounded-[10px] overflow-hidden h-[500px] cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={img}
              alt={`Galleri billede ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedIndex]}
              alt="Galleri"
              className="max-h-[80vh] max-w-full object-contain rounded-lg mx-auto"
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
            >
              &times;
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/60 rounded-full p-2"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 hover:bg-black/60 rounded-full p-2"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
