import { Star } from "lucide-react";
import { staticData } from "../../../server/storage";

const TestimonialComponent = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-16">
            Huellas Felices
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {staticData.testimonials?.length ? (
              staticData.testimonials.map((t, i: number) => (
                <div key={i} className="bg-background p-8 rounded-3xl relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-sm">
                    💬
                  </div>
                  <div className="flex justify-center gap-1 text-yellow-400 mb-4 mt-2">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    "{t.content}"
                  </p>
                  <div className="font-bold text-lg">{t.clientName}</div>
                  <div className="text-sm text-primary font-medium">
                    {t.petName && `Dueño de ${t.petName}`}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-muted-foreground">
                Cargando opiniones tt...
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComponent;
