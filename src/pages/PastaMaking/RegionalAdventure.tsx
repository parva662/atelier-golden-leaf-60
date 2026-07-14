import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import RegionalAdventure from "@/components/PastaMaking/RegionalAdventure";


const RegionalAdventurePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RegionalAdventure />
      <BookingCTA title="Book this pasta workshop" description="Send your preferred date, group size, location, and any dietary needs." />
      <Footer />
    </div>
  );
};

export default RegionalAdventurePage;
