
import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import Events from "@/components/Events";


const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Events />
      <BookingCTA title="Interested in a future Butterfly Bites event?" description="Use the request form for private experiences, workshop ideas, or future event inquiries." />
      <Footer />
    </div>
  );
};

export default EventsPage;
