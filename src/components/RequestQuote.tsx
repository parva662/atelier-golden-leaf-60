import { useState } from "react";

const RequestQuote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = "Parvaneh550@gmail.com"; // <-- Replace with your email address
    const subject = encodeURIComponent("New Catering Quote Request");
    const utcNow = new Date().toISOString();
    const body = encodeURIComponent(
      `${form.name} ${form.email}\n${form.eventType} ${form.date}\n${form.guests}\n\n${form.message}\n\nsent at ${utcNow}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="text-4xl font-bold text-foreground mb-6 text-center">Request a Quote</h1>
        <p className="text-muted-foreground mb-8 text-center">Tell us about your event and we’ll get back to you with a custom proposal.</p>
        {submitted ? (
          <div className="bg-card rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">Thank you!</h2>
            <p className="text-muted-foreground">Your request has been received. Chef Ibrahim will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-1">Event Type</label>
              <input type="text" id="eventType" name="eventType" placeholder="Wedding, Dinner Party, etc." value={form.eventType} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">Event Date</label>
              <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-1">Number of Guests</label>
              <input type="number" id="guests" name="guests" min="1" value={form.guests} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Additional Details</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="w-full px-4 py-2 rounded bg-background border border-border focus:outline-none" />
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-primary text-background font-bold rounded-full shadow hover:bg-sage transition">Submit Request</button>
          </form>
        )}
      </div>
    </main>
  );
};

export default RequestQuote;
