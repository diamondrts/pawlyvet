import { useState } from "react";
import MapComponent from "../components/MapComponent";
import { Clock, Facebook, Instagram, MapPin, MessageCircle, PawPrint, Phone, Twitter } from "lucide-react"


const Footer = () => {
  const [Year] = useState(() => new Date().getFullYear());

  return (

    <footer id="contact" className="bg-[#3D2833] text-white pt-30 pb-10 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-pink-500">
              <PawPrint size={32} fill="currentColor" />
              <span className="text-2xl font-bold font-display">Pawly Vet</span>
            </div>
            <p className="text-[#FBF8F9]/80 leading-relaxed">
              Comprometidos con la salud y felicidad de tus mascotas. Un equipo profesional y lleno de amor esperándote.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition-colors flex items-center justify-center cursor-pointer"><a href="https://www.instagram.com/pawlyvet/"><Instagram /></a></div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition-colors flex items-center justify-center cursor-pointer"><a href="https://www.facebook.com/pawlyvet/"><Facebook /></a></div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition-colors flex items-center justify-center cursor-pointer"><a href="https://www.tiktok.com/@pawlyvet"><Twitter /></a></div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-500">Contacto</h3>
            <ul className="space-y-4 text-[#FBF8F9]/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-pink-500" size={20} />
                <span>Av. José Núñez de Cáceres 60, Santo Domingo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-pink-500" size={20} />
                <span>(809) 726-6795</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="shrink-0 text-pink-500" size={20} />
                <span>(809) 995-6516</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-500">Horarios</h3>
            <ul className="space-y-4 text-[#FBF8F9]/80">
              <li className="flex items-center gap-3">
                <Clock className="shrink-0 text-pink-500" size={20} />
                <div>
                  <span className="block font-bold">Lunes - Viernes</span>
                  <span className="text-sm">8:30 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="shrink-0 text-pink-500" size={20} />
                <div>
                  <span className="block font-bold">Sábados</span>
                  <span className="text-sm">9:00 AM - 3:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-500">Ubicación</h3>
            <div className="w-full h-48 bg-white/10 rounded-2xl flex items-center justify-center text-background/50">
              <MapComponent />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-background/40 text-sm">
          <span>
            Diseñado con ❤️ para las mascotas y sus dueños.
          </span><br/> 
          © {Year} <a href="https://drtsrd.com/">DRTS</a> Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer;