import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeAboutTeaser from "@/components/HomeAboutTeaser";
import Services from "@/components/Services";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import GalleryPreview from "@/components/GalleryPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HomeAboutTeaser />
      <GalleryPreview />
      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Index;
