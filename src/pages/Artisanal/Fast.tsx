import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Fast from "@/components/Artisanal/Fast";


const FastPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Fast />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default FastPage;
