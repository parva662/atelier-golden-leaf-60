import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import PastaMaking from "@/components/PastaMaking";


const PastaMakingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PastaMaking />
      <BookingCTA title="Want to book a pasta workshop?" description="Send the group size, preferred date, location, and workshop style you are interested in." />
      <Footer />
    </div>
  );
};

export default PastaMakingPage;
