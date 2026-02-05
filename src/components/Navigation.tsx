import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Hotel", href: "#hotel" },
    { name: "Tienda", href: "#shop" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-pink-500 p-2 rounded-full text-white">
            <PawPrint size={24} fill="currentColor" />
          </div>
          <span className="text-2xl font-bold font-[Quicksand] text-pink-500 tracking-tight">
            Pawly Vet
          </span> 
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href} 
              className="font-[Quicksand] text-stone-600 hover:text-pink-500 font-semibold transition-colors text-base capitalize tracking-wide"
            > 
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-pink-500 hover:bg-ping-500 text-white rounded-full px-6 shadow-lg shadow-primary/25 cursor-pointer"
            onClick={() => window.location.href = '#contact'}
          >
            Reservar
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-[Quicksand] text-lg font-medium text-stone-600 hover:text-pink-500 py-2 border-b border-b-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-[#f25aa6] text-white rounded-xl mt-4">
              Agenda tu cita
            </Button>
          </div> 
        </div>
      )}
    </nav>
  );
}