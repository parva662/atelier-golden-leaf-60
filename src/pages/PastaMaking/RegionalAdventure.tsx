import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RegionalAdventure from "@/components/PastaMaking/RegionalAdventure";


const RegionalAdventurePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RegionalAdventure />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default RegionalAdventurePage;
