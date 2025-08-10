import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Kontakt = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] px-4">
        <section className="w-full max-w-3xl flex flex-col items-center text-center mt-4 mb-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#191919] mb-6">
            Kontakt os
          </h1>
          <p className="text-xl md:text-2xl text-[#191919]/80 max-w-2xl mb-2">
            Har du spørgsmål eller vil du besøge os? Her finder du vores
            kontaktoplysninger.
          </p>
        </section>

        {/* Flex container for the two boxes */}
        <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12 max-w-5xl">
          <div className="bg-white/95 rounded-2xl shadow-xl border border-[#e5e7eb] p-8 md:p-12 w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#191919] mb-2">
              Kontaktoplysninger
            </h2>
            <div className="text-lg text-[#191919]/90 flex flex-col gap-1">
              <span>
                <span className="font-semibold">Navn:</span> Jens Graff
              </span>
              <span>
                <span className="font-semibold">Sted:</span> Frøkær Vingård
              </span>
              <span>
                <span className="font-semibold">Adresse:</span> Bønstrupvej 7,
                6580 Vamdrup
              </span>
              <span>
                <span className="font-semibold">Telefon:</span>{" "}
                <a
                  href="tel:+4551222844"
                  className="text-[#6366f1] hover:underline"
                >
                  +45 51 22 28 44
                </a>
              </span>
              <span>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:kontakt@froekaervingaard.dk"
                  className="text-[#6366f1] hover:underline"
                >
                  kontakt@froekaervingaard.dk
                </a>
              </span>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-[#191919]">
                Åbningstider:
              </span>
              <div className="text-[#191919]/80">Alle dage kl. 9-18</div>
            </div>
          </div>

          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-[#e5e7eb] flex">
            <iframe
              title="Frøkær Vingård Kort"
              src="https://www.google.com/maps?q=B%C3%B8nstrupvej+7,+6580+Vamdrup&output=embed&basemap=satellite"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <div className="w-full flex justify-center mb-16">
          <a
            onClick={() => navigate("/kontakt")}
            className="bg-[#191919] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#333] transition"
          >
            Kontakt os
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Kontakt;
