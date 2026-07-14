import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import CustomMenus from "@/components/Artisanal/CustomMenus";


const CustomMenusPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CustomMenus />
      <BookingCTA title="Ready to shape a custom menu?" description="Send your occasion, guest count, date, and any dietary needs to start a catering request." />
      <Footer />
    </div>
  );
};

export default CustomMenusPage;
