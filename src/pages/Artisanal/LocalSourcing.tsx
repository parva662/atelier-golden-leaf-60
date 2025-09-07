import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocalSourcing from "@/components/Artisanal/LocalSourcing";

const LocalSourcingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LocalSourcing />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default LocalSourcingPage;
