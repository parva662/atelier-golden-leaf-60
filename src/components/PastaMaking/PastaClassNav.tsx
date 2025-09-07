import { Link } from "react-router-dom";
import { pastaClassLinks, scrollToTop } from "./pastaClassNavUtils";

const PastaClassNav = () => (
  <nav className="container mx-auto px-4 mb-12">
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {pastaClassLinks.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className="px-6 py-3 bg-gradient-to-r from-golden to-sage text-background rounded-full font-semibold shadow hover:scale-105 transition"
          onClick={scrollToTop}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </nav>
);

export default PastaClassNav;
