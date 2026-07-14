const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Pari's Journey of
            <span className="block text-primary bg-gradient-to-r from-golden to-sage bg-clip-text text-transparent">
              Hospitality & Handmade Food
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start text-left mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Culinary Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Butterfly Bites grew from Pari's love of Persian hospitality: generous tables, fragrant herbs, careful
                preparation, and the feeling of being welcomed like family.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her cooking brings those roots together with handmade food, fresh pasta, and Italian inspiration. It is a
                personal culinary project shaped around warm hosting and shared tables.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Philosophy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-muted-foreground">Persian hospitality makes every table feel generous and welcoming</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-sage mt-2.5"></div>
                  <p className="text-muted-foreground">Handmade preparation brings care into every dish</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-muted-foreground">Fresh pasta workshops add an Italian-inspired, hands-on experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-sage mt-2.5"></div>
                  <p className="text-muted-foreground">Food brings people together around the table</p>
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
