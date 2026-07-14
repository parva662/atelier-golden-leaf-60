
import Header from "@/components/Header";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import About from "@/components/About";


const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <BookingCTA title="Want to plan a table with Pari?" description="For catering, pasta workshops, or culinary gatherings, send a request with your date, guest count, and ideas." />
      <Footer />
    </div>
  );
};

export default AboutPage;
