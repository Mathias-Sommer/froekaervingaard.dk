import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleriSektion from "../components/GalleriSektion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-[#ffffff] flex flex-col items-start justify-start relative overflow-hidden w-full">
        {/* Header Section */}
        <div className="relative w-full overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="bg-[#191919]/40 backdrop-blur-sm px-[5%] flex flex-col md:flex-row items-center justify-between w-full relative z-10">
            <div className="flex flex-col gap-16 items-start justify-start w-full md:w-1/2 max-w-[816px]">
              <div className="flex flex-col gap-6 w-full">
                <h1 className="text-[#f3f3f3] font-black text-5xl md:text-5xl tracking-[-0.04em]">
                  Velkommen til
                </h1>
                <h1 className="text-[#f3f3f3] font-black text-5xl md:text-7xl tracking-[-0.04em]">
                  Frøkær Vingård
                </h1>
                <p className="text-[#ffffff] text-2xl opacity-50 tracking-[-0.04em]">
                  Dansk kvalitetsvin fra vores vingård i hjertet af Danmark.
                  Oplev vores unikke vine, der er skabt med kærlighed og
                  passion. Udforsk vores sortiment og find din favorit blandt
                  vores prisvindende vine.
                </p>
              </div>
              <div className="w-full max-w-xs">
                <button
                  onClick={() => navigate("/vine")}
                  className="bg-white rounded-[10px] p-6 w-full text-[#191919] text-2xl font-bold tracking-[-0.04em] hover:bg-[#191919] hover:text-white transition duration-300 ease-in-out"
                >
                  Se vine
                </button>
              </div>
            </div>
            <div className="w-full md:w-[50%] h-[500px] md:h-[960px] mt-12 md:mt-0 flex items-center justify-center">
              <span className="text-white text-center text-[32px] font-black opacity-25 tracking-[-0.04em]"></span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white px-[5%] py-[80px] flex flex-col md:flex-row gap-12 items-start justify-start w-full">
          <div className="flex flex-col gap-16 items-start justify-start w-full md:w-1/2 max-w-[816px]">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-[#191919] text-5xl md:text-7xl font-black tracking-[-0.04em]">
                Om vingården
              </h2>
              <p className="text-black text-2xl opacity-60 tracking-[-0.04em]">
                Frøkær Vingård er vores familieprojekt, hvor vi med passion og
                respekt for naturen dyrker druer i hjertet af Danmark nær
                Kolding. Siden 2005 har Jens stået i spidsen for vingården, hvor
                han med stor kærlighed og håndværksmæssig stolthed skaber unikke
                vine, der afspejler områdets jord og klima.
              </p>
              <p className="text-black text-2xl opacity-60 tracking-[-0.04em]">
                Med en baggrund i både landbrug og vinproduktion brænder Jens
                for at kombinere tradition og innovation, så hver flaske
                fortæller historien om vores vingård og de mange timer, der
                lægges i arbejdet. Hos Frøkær Vingård handler det om mere end
                vin – det handler om at dele glæden ved kvalitetsvin,
                bæredygtighed og fællesskab.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button
                className="bg-[#191919] rounded-[10px] p-6 flex-1 text-white text-2xl font-bold tracking-[-0.04em] hover:bg-[#333] transition"
                onClick={() => navigate("/arrangementer")}
              >
                Arrangementer
              </button>
              <button
                className="rounded-[10px] border-4 border-[#191919] p-6 flex-1 text-[#191919] text-2xl font-bold tracking-[-0.04em] 
             hover:bg-[#191919] hover:text-white transition duration-300 ease-in-out"
                onClick={() => navigate("/kontakt")}
              >
                Kontakt
              </button>
            </div>
          </div>
          <div className="bg-[#f8f8f8] rounded-[50px] w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <img
              src="/guldmedalje2023.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-[2px]"
            />
          </div>
        </div>

        <GalleriSektion />
      </div>
      <Footer />
    </>
  );
};

export default Home;
