import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrangementKort from "../components/ArrangementKort";

function Arrangementer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#ffffff] flex flex-col items-start justify-start relative overflow-hidden w-full min-h-screen">
        {/* Header Section */}
        <div className="w-full px-[5%] py-[40px] flex flex-col items-center justify-center bg-[#191919]">
          <h1 className="text-5xl md:text-7xl font-black text-[#f3f3f3] tracking-[-0.04em] mb-6 text-center">
            Arrangementer
          </h1>
          <p className="text-[#ffffff] text-2xl opacity-50 tracking-[-0.04em] max-w-2xl text-center">
            Oplev unikke arrangementer på Frøkær Vingård – fra hyggelige
            omgivelser til festlige aftener med historie, tapas og vin i
            særklasse.
          </p>
        </div>
        <div className="w-full px-[5%] flex flex-wrap gap-10 justify-center mb-16">
          <ArrangementKort
            title="Vinsmagning"
            subtitle="En oplevelse for vinelskere med smagsprøver og rundvisning"
            description="Varighed: 2,5 timer"
            price="200 DKK/deltager"
            items={[
              "Smagning af mindst 5 vine",
              "Historien om vingården",
              "Rundvisning i vineriet",
              "Rundvisning i vinmarken",
              "Let tapas anretning",
            ]}
          />
          <ArrangementKort
            title="Pintrip"
            subtitle="Mulighed for at overnatte på vingården i autocamper"
            description="Kontakt os for at høre nærmere"
            price="Fra 0 DKK"
            items={[
              "Mulighed for bad og toilet",
              "Mulighed for strøm",
              "Mulighed for at købe vin",
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Arrangementer;
