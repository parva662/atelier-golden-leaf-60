
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";


const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
