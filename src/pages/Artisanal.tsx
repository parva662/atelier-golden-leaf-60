import Header from "@/components/Header";
import Artisanal from "@/components/Artisanal.tsx";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const ArtisanalPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Artisanal />
      <BookingCTA title="Planning catering?" description="Share your date, guest count, location, and menu needs so Butterfly Bites can shape the right catering proposal." />
      <Footer />
    </div>
  );
};

export default ArtisanalPage;
