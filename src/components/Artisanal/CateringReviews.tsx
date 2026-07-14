const placeholderReviews = [
  {
    id: "review-placeholder-1",
    quote: "Review placeholder - replace with approved client quote.",
    client: "Client name or initials",
    eventType: "Event type",
  },
  {
    id: "review-placeholder-2",
    quote: "Review placeholder - replace with approved client quote.",
    client: "Client name or initials",
    eventType: "Event type",
  },
];

const CateringReviews = () => (
  <section className="container mx-auto px-4 py-12 max-w-5xl">
    <div className="bg-background rounded-2xl border border-border p-8 md:p-10">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Reviews</p>
        <h2 className="text-3xl font-bold text-foreground">Client words will live here</h2>
        <p className="text-muted-foreground mt-3">
          This section is prepared for approved catering reviews in Phase 2B.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {placeholderReviews.map((review) => (
          <article key={review.id} className="rounded-xl bg-card border border-border p-6">
            <blockquote className="italic text-muted-foreground mb-4">"{review.quote}"</blockquote>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">{review.client}</p>
                <p className="text-sm text-muted-foreground">{review.eventType}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-cream border border-dashed border-primary/50 flex items-center justify-center text-xs text-muted-foreground">
                Image
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-8" aria-label="Review carousel controls placeholder">
        <button type="button" className="px-4 py-2 rounded-md border border-border text-muted-foreground" disabled>
          Previous
        </button>
        <button type="button" className="px-4 py-2 rounded-md border border-border text-muted-foreground" disabled>
          Next
        </button>
      </div>
    </div>
  </section>
);

export default CateringReviews;
