import Header from "@/components/Header";
import Artisanal from "@/components/PastaMaking/Artisinal";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ArtisinalPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Artisanal />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default ArtisinalPage;
