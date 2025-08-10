import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const vineData = [
  {
    navn: "Hjejlen",
    billede: "/hjejlen.jpg",
    druetype: "Rondo",
    alkohol: "12%",
    aargang: "2022",
    beskrivelse:
      "En fyldig og frugtig rødvin med noter af kirsebær og solbær. Perfekt til rødt kød og ost.",
  },
  {
    navn: "Isfuglen",
    billede: "/isfuglen.jpg",
    druetype: "Solaris",
    alkohol: "11,5%",
    aargang: "2023",
    beskrivelse:
      "Frisk og sprød hvidvin med citrusnoter og en let sødme. Velegnet til fisk og skaldyr.",
  },
  {
    navn: "Isfuglen Dark",
    billede: "/isfuglendark.jpg",
    druetype: "Regent & Rondo",
    alkohol: "11%",
    aargang: "2022",
    beskrivelse:
      "Let og sommerlig rosé med smag af jordbær og hindbær. Perfekt til terrassen.",
  },
  {
    navn: "Svanen",
    billede: "/svanen.jpg",
    druetype: "Solaris",
    alkohol: "12%",
    aargang: "2021",
    beskrivelse:
      "Elegant mousserende vin med fine bobler og frisk syre. Ideel til festlige lejligheder.",
  },
  {
    navn: "Placeholder Vin 1",
    billede: "/vinflaske.png",
    druetype: "Muscaris",
    alkohol: "13%",
    aargang: "2020",
    beskrivelse:
      "Sød dessertvin med noter af honning og abrikos. God til ost og desserter.",
  },
  {
    navn: "Placeholder Vin 1",
    billede: "/vinflaske.png",
    druetype: "Muscaris",
    alkohol: "13%",
    aargang: "2020",
    beskrivelse:
      "Sød dessertvin med noter af honning og abrikos. God til ost og desserter.",
  },
];

const Vine = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#f5efe6] to-white min-h-screen px-[3%] py-16">
        <h1 className="text-5xl md:text-7xl font-black text-[#191919] mb-12 tracking-[-0.04em] text-center drop-shadow-lg">
          Vores Vine
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {vineData.map((vin, idx) => (
            <div
              key={idx}
              className="bg-white/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-3xl border border-[#ece7df]"
            >
              <div className="relative w-full h-60 md:h-72 overflow-hidden">
                <img
                  src={vin.billede}
                  alt={vin.navn}
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  style={{ objectPosition: "center 60%" }}
                />
                <div className="absolute top-4 right-4 bg-[#fff8] px-3 py-1 rounded-full text-xs font-semibold text-[#7c5e3c] shadow">
                  {vin.aargang}
                </div>
              </div>
              <div className="p-7 flex flex-col gap-3 flex-1">
                <h2 className="text-2xl font-extrabold text-[#7c5e3c] tracking-tight mb-1">
                  {vin.navn}
                </h2>
                <p className="text-base text-[#191919] opacity-80 mb-2">
                  {vin.beskrivelse}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-sm font-medium text-[#7c5e3c] border border-[#e2d3b6]">
                    Druetype:{" "}
                    <span className="font-semibold">{vin.druetype}</span>
                  </span>
                  <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-sm font-medium text-[#7c5e3c] border border-[#e2d3b6]">
                    Alkohol:{" "}
                    <span className="font-semibold">{vin.alkohol}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vine;
