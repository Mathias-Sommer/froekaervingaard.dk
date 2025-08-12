import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const aboutData = [
  {
    title: "Vores Historie",
    text: `Frøkær Vingård er en dansk familieejet vingård beliggende i det smukke, bakkede landskab nær Kolding. Vingården blev grundlagt i 2005 af Jens, hvis passion for vin og respekt for naturens rytme har drevet projektet siden starten.`,
    imgSrc: "/gallery8.jpg",
    imgAlt: "Vingård landskab",
  },
  {
    title: "Håndværk og Kvalitet",
    text: `Vi dyrker vores egne druer og følger hele processen – fra mark til flaske – for at sikre, at hver vin bærer præg af både vores passion og det lokale terroir. Vi arbejder med Solaris, Rondo og Regent, der trives i det danske klima.`,
    imgSrc: "/gallery4.jpg",
    imgAlt: "Drueklaser på vinstok",
  },
  {
    title: "Unikke Oplevelser",
    text: `Hos Frøkær Vingård handler det ikke bare om vin – det handler om oplevelsen. Vi tilbyder vinsmagninger, rundvisninger og arrangementer i vores idylliske orangeri og vinmarker.`,
    imgSrc: "/gallery10.jpg",
    imgAlt: "Vinsmagning arrangement",
  },
  {
    title: "Bæredygtighed",
    text: `Vi prioriterer skånsom produktion, genbrug af ressourcer og naturlig dyrkning uden unødvendige kemikalier. Vores mål er at efterlade et positivt aftryk – både i flasken og i landskabet.`,
    imgSrc: "/gallery7.jpg",
    imgAlt: "Bæredygtig vinproduktion",
  },
  {
    title: "Velkommen til Vingården",
    text: `Uanset om du er ny i vinens verden eller passioneret entusiast, glæder vi os til at byde dig velkommen. Her er der plads til fordybelse, smag og fællesskab.`,
    imgSrc: "/gallery11.jpg",
    imgAlt: "Velkommen ved vingården",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white w-full min-h-screen flex flex-col items-center px-[5%] py-[80px]">
        <h1 className="text-[#191919] text-5xl md:text-7xl font-black tracking-[-0.04em] mb-16 text-center">
          Om Frøkær Vingård
        </h1>

        <div className="flex flex-col gap-20 max-w-6xl w-full">
          {aboutData.map((item, idx) => {
            const isImageRight = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center bg-[#f9f9f9] rounded-2xl shadow-md overflow-hidden min-h-[300px]"
              >
                {isImageRight ? (
                  <>
                    <div className="p-8 md:w-1/2">
                      <h2 className="text-3xl font-bold text-[#191919] mb-4 tracking-[-0.02em]">
                        {item.title}
                      </h2>
                      <p className="text-[#333] text-lg leading-relaxed opacity-80 tracking-[-0.01em]">
                        {item.text}
                      </p>
                    </div>

                    <div className="md:w-1/2 h-64 md:h-auto max-h-[400px] overflow-hidden">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 h-64 md:h-auto max-h-[400px] overflow-hidden order-last md:order-first">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-8 md:w-1/2">
                      <h2 className="text-3xl font-bold text-[#191919] mb-4 tracking-[-0.02em]">
                        {item.title}
                      </h2>
                      <p className="text-[#333] text-lg leading-relaxed opacity-80 tracking-[-0.01em]">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
