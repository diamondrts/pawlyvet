import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "+18492542695"

function openWhatsApp(number: string, message: string) {
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${number}?text=${encoded}`
    window.open(url, "_blank", "noopener,noreferrer")
}

function getGreetingByHour(date = new Date()) {
    const h24 = date.getHours();

    if (h24 >= 5 && h24 < 12) return "Buenos días"
    if (h24 >= 12 && h24 < 19) return "Buenas tardes"
    return "Buenas noches"
}

/** Botón: Agenda tu cita */
export function WhatsAppBookAppointmentButton({
    phone = WHATSAPP_NUMBER,
    serviceName,
    className,
}: {
    phone?: string
    serviceName?: string
    className?: string
}) {
    const handleClick = () => {
        const msg = [
            "Hola, me gustaría agendar una cita.\n",
            serviceName ? `Servicio: ${serviceName}.` : null,
            "¿Me pueden indicar disponibilidad y el proceso para reservar?",
        ]
            .filter(Boolean)
            .join(" ")

        openWhatsApp(phone, msg)
    }

    return (
        <Button
            size="lg"
            onClick={handleClick}
            className={
                className ??
                "text-lg px-8 py-6 rounded-2xl bg-pink-500 hover:bg-pink-400 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all border-none text-white cursor-pointer"
            }
        >
            Agenda tu cita
        </Button>
    )
}

/** Botón: WhatsApp (saludo por hora) */
export function WhatsAppInfoButton({
    phone = WHATSAPP_NUMBER,
    className,
}: {
    phone?: string
    className?: string
}) {
    const handleClick = () => {
        const saludo = getGreetingByHour()
        const msg = `${saludo}. Me gustaría hablar con un representante para obtener información, por favor.`
        openWhatsApp(phone, msg)
    }

    return (
        <Button
            size="lg"
            variant="outline"
            onClick={handleClick}
            className={
                className ??
                "text-lg px-8 py-6 rounded-2xl border-2 border-pink-500 hover:border-pink-400 text-pink-500 hover:-translate-y-1 transition-all cursor-pointer"
            }
        >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
        </Button>
    )
}



/** Botón: Reservar Hospedaje */
export function WhatsAppLodgingButton({
    phone = WHATSAPP_NUMBER,
    petName,
    checkIn,
    checkOut,
    className,
}: {
    phone?: string
    petName?: string
    checkIn?: string
    checkOut?: string
    className?: string
}) {
    const handleClick = () => {
        const msg = [
            "Hola, me gustaría obtener información para reservar hospedaje.",
            petName ? `Mascota: ${petName}.` : null,
            checkIn ? `Entrada: ${checkIn}.` : null,
            checkOut ? `Salida: ${checkOut}.` : null,
            "\n¿Me pueden indicar disponibilidad, requisitos y tarifas?",
        ]
            .filter(Boolean)
            .join(" ")

        openWhatsApp(phone, msg)
    }

    return (
        <Button
            size="lg"
            onClick={handleClick}
            className={
                className ??
                "bg-white text-pink-500 hover:bg-white/90 font-bold px-8 py-6 rounded-2xl shadow-xl mt-6 text-base cursor-pointer"
            }
        >
            Reservar Hospedaje
        </Button>
    )
}