export function TrustBar() {
  const partners = [
    // 'گروه صنعتی ایران',
    // 'فناوران نوین',
    // 'داده‌پردازان',
    // 'شبکه امن',
    // 'ابر پارس',
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-6">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-lg font-heading font-bold text-muted-foreground/30 hover:text-muted-foreground/50"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
