import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import FamilyWorkshop from "@/components/PastaMaking/FamilyWorkshop";


const FamilyWorkshopPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FamilyWorkshop />
      <BookingCTA title="Book this pasta workshop" description="Send your preferred date, group size, location, and any dietary needs." />
      <Footer />
    </div>
  );
};

export default FamilyWorkshopPage;
