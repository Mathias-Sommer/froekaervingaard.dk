function ArrangementKort({ title, subtitle, description, price, items }) {
  return (
    <div className="bg-[#f8f8f8] shadow-2xl rounded-3xl p-8 w-80 border border-[#e0e7ef] hover:scale-105 hover:shadow-purple-200 transition-all duration-300 flex flex-col items-start">
      <h2 className="text-2xl font-bold mb-1 text-[#191919]">{title}</h2>
      {subtitle && <p className="text-base text-[#555] mb-4">{subtitle}</p>}
      {description && (
        <p className="text-base text-[#555] mb-4">{description}</p>
      )}
      <p className="text-lg font-bold mb-3 text-[#9333ea]">Pris: {price}</p>
      <ul className="list-none list-inside text-base mb-4 text-[#374151] space-y-1">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 relative pl-6"
            style={{ listStyleType: "none" }}
          >
            {/* Purple checkmark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#9333ea] flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrangementKort;
