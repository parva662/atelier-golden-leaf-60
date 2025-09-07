import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FamilyWorkshop from "@/components/PastaMaking/FamilyWorkshop";


const FamilyWorkshopPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FamilyWorkshop />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default FamilyWorkshopPage;
