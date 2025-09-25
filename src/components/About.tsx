const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            A Journey of
            <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
              Flavor & Tradition
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Culinary Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Growing up in my grandmother's kitchen, I learned that cooking isn't just about following recipes—it's about pouring love into every ingredient, honoring traditions while creating new memories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After years of working in University as an AI developer, I returned to my roots: slow food, handmade pasta, and the simple joy of sharing a meal made with intention and care.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Philosophy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-muted-foreground">Every ingredient has a story worth telling</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-sage mt-2.5"></div>
                  <p className="text-muted-foreground">Handmade is always better than mass-produced</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-muted-foreground">Food brings people together like nothing else</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-sage mt-2.5"></div>
                  <p className="text-muted-foreground">Tradition and innovation can dance together beautifully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;