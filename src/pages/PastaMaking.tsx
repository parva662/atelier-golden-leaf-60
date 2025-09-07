import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PastaMaking from "@/components/PastaMaking";


const PastaMakingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PastaMaking />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default PastaMakingPage;
