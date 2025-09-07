import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PersonalService from "@/components/Artisanal/PersonalService";


const PersonalServicePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PersonalService />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default PersonalServicePage;
