import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClassicItalian from "../../components/PastaMaking/ClassicItalian";


const ClassicItalianPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ClassicItalian />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default ClassicItalianPage;
