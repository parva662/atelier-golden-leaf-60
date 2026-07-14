import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import ClassicItalian from "../../components/PastaMaking/ClassicItalian";


const ClassicItalianPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ClassicItalian />
      <BookingCTA title="Book this pasta workshop" description="Send your preferred date, group size, location, and any dietary needs." />
      <Footer />
    </div>
  );
};

export default ClassicItalianPage;
