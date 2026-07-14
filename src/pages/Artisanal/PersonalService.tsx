import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import PersonalService from "@/components/Artisanal/PersonalService";


const PersonalServicePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PersonalService />
      <BookingCTA title="Need personal catering support?" description="Use the request form to share your event style, date, guest count, and service needs." />
      <Footer />
    </div>
  );
};

export default PersonalServicePage;
