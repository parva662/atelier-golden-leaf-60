import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Gallery />
      <BookingCTA />
      <Footer />
    </div>
  );
};

export default GalleryPage;
