const Footer = () => {
  return (
    <footer className="bg-warm-gray text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/butterfly-bites-logo.png" alt="Butterfly Bites Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl">Butterfly Bites</span>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Sharing the art of handmade cuisine and bringing people together around the table, one meal at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#catering" className="hover:text-primary transition-colors">Artisanal Catering</a></li>
              <li><a href="#pasta" className="hover:text-primary transition-colors">Pasta Making Classes</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Culinary Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2024 Butterfly Bites. Made with love and local ingredients.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;