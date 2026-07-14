import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import LocalSourcing from "@/components/Artisanal/LocalSourcing";

const LocalSourcingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LocalSourcing />
      <BookingCTA title="Planning a handmade food table?" description="Share your gathering details and sourcing preferences through the request form." />
      <Footer />
    </div>
  );
};

export default LocalSourcingPage;
