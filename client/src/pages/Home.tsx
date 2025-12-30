import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import ShopComponent from "@/components/ShopComponent";
import {
  useServices,
  useProducts,
  useTestimonials,
  useTeam,
} from "@/hooks/use-pawly";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Scissors,
  Hotel,
  ShoppingBag,
  Heart,
  MessageCircle,
  PawPrint,
} from "lucide-react";
import portada from "@/components/img/img4.png";
import img8 from "@/components/img/img8.png";
import Footer from "@/pages/Footer";import TeamComponent from "@/components/TeamComponent";
import TestimonialComponent from "@/components/TestimonialComponent";

export default function Home() {
  const { data: services } = useServices();
  const { data: products } = useProducts();
  const { data: testimonials } = useTestimonials();
  const { data: team } = useTeam();


  // Mocks for fallback if API empty (for demo purposes)
  const defaultServices = [
    {
      title: "Veterinaria",
      description:
        "Consultas, vacunas y cirugías con los mejores especialistas.",
      icon: Stethoscope,
    },
    {
      title: "Peluquería",
      description: "Baños, cortes y spa para que tu mascota luzca increíble.",
      icon: Scissors,
    },
    {
      title: "Hotel",
      description: "Hospedaje seguro y divertido con supervisión 24/7.",
      icon: Hotel,
    },
    {
      title: "Tienda",
      description: "Alimentos premium, juguetes y accesorios exclusivos.",
      icon: ShoppingBag,
    },
  ];

  const benefits = [
    "Supervisión veterinaria 24 horas",
    "Habitaciones climatizadas y cómodas",
    "Áreas de juego y socialización",
    "Reportes diarios con fotos y videos",
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/40 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full -z-10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/10 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Heart className="text-primary w-4 h-4 fill-primary" />
                <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
                  Amor incondicional
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-foreground text-balance">
                La clínica veterinaria{" "}
                <span className="text-primary bg-primary/10 px-4 rounded-xl inline-block -rotate-1">
                  favorita
                </span>{" "}
                de tu mascota
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Cuidamos de ellos como si fueran nuestra propia familia.
                Servicios integrales de salud, belleza y diversión en un solo
                lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
                >
                  Agenda tu cita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-2xl border-2 border-primary/20 hover:border-primary text-primary hover:bg-primary/5 hover:-translate-y-1 transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={portada}
                  alt="Veterinarian hugging a dog"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative blobs */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full blur-2xl -z-10" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-foreground">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que tu mascota necesita para una vida larga, saludable y
              feliz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(services?.length ? services : defaultServices).map(
              (service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  Icon={
                    defaultServices.find((s) => s.title === service.title)
                      ?.icon || Stethoscope
                  }
                  colorClass={
                    idx % 2 === 0 ? "bg-secondary/30" : "bg-accent/30"
                  }
                />
              )
            )}
          </div>
        </div>
      </section>

      
      {/* ABOUT US */}
      <TeamComponent />

      {/* HOTEL HIGHLIGHT */}
      <section
        id="hotel"
        className="py-24 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Hotel Pawly 5 Estrellas ⭐
              </h2>
              <p className="text-primary-foreground/90 text-xl leading-relaxed">
                ¿Sales de viaje? Deja a tu mejor amigo en las mejores manos. Un
                espacio diseñado para que se sientan como en casa, con diversión
                garantizada.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm"
                  >
                    <div className="bg-white text-primary p-1 rounded-full">
                      <PawPrint size={14} />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 rounded-2xl shadow-xl mt-6"
              >
                Reservar Hospedaje
              </Button>
            </div>

            <div className="md:w-1/2 relative">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-[2rem] border border-white/20 rotate-3">
                {/* Stock image: Dog sleeping comfortably */}
                <img
                  src={img8}
                  alt="Dog sleeping comfortably"
                  className="rounded-[1.8rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShopComponent />

      {/* TESTIMONIALS */}
      <TestimonialComponent/>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 flex items-center justify-center"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </a>
    </div>
  );
}
