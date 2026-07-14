import { ChangeEvent, FormEvent, useState } from "react";

const RequestQuote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    guests: "",
    location: "",
    dietaryNeeds: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipient = "Parvaneh550@gmail.com";
    const subject = encodeURIComponent("New Butterfly Bites Request");
    const utcNow = new Date().toISOString();
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service type: ${form.serviceType}
Preferred date: ${form.preferredDate}
Guest count: ${form.guests}
Location: ${form.location}
Dietary needs: ${form.dietaryNeeds}

Message:
${form.message}

Sent at ${utcNow}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-6 text-center">Request a Quote</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Share the details for catering, a pasta workshop, or a future event inquiry.
        </p>
        <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone (optional)</label>
            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-1">Service Type</label>
              <select id="serviceType" name="serviceType" required value={form.serviceType} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none">
                <option value="">Select a service</option>
                <option value="catering">Catering</option>
                <option value="pasta-workshop">Pasta workshop</option>
                <option value="event-experience">Event / culinary experience</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
              <input type="date" id="preferredDate" name="preferredDate" value={form.preferredDate} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-1">Guest Count</label>
              <input type="number" id="guests" name="guests" min="1" value={form.guests} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">Location</label>
              <input type="text" id="location" name="location" value={form.location} onChange={handleChange} placeholder="Where will this take place?" className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="dietaryNeeds" className="block text-sm font-medium text-foreground mb-1">Dietary Needs</label>
            <textarea id="dietaryNeeds" name="dietaryNeeds" rows={3} value={form.dietaryNeeds} onChange={handleChange} placeholder="Allergies, vegetarian, vegan, gluten-free, or other needs" className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Additional Details</label>
            <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell me about the occasion, timing, style, or questions." className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Submit Request</button>
        </form>
      </div>
    </main>
  );
};

export default RequestQuote;
