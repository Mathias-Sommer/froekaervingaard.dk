function ArrangementBillede({ images }) {
  return (
    <div className="w-full px-[5%] flex flex-wrap gap-10 justify-center mb-16">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="bg-[#191919] shadow-2xl rounded-3xl w-150 h-150 border border-[#e0e7ef] overflow-hidden flex items-center justify-center relative group"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white font-semibold text-lg drop-shadow">
              {img.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArrangementBillede;
