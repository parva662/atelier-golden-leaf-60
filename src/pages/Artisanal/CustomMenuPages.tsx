import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomMenus from "@/components/Artisanal/CustomMenus";


const CustomMenusPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CustomMenus />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default CustomMenusPage;
