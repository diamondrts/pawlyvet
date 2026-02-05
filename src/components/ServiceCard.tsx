import type { LucideIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

interface ServiceCardProps { 
  title: string;
  description: string;
  Icon: LucideIcon;
  colorClass?: string;
}

export function ServiceCard({ title, description, Icon, colorClass = "bg-white" }: ServiceCardProps) {
  return (
    <div className={`
      group relative p-8 rounded-3xl border border-[#EAE0E5]/50
      shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
      ${colorClass}
    `}>
      <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
 
      <h3 className="text-xl font-bold mb-3 text-stone-600">{title}</h3>
      <p className="text-stone-400 leading-relaxed mb-2">
        {description}
      </p>
      {/*       
      <Button 
        variant="ghost" 
        className="p-0 text-primary hover:text-primary/80 hover:bg-transparent font-semibold group-hover:underline decoration-2 underline-offset-4"
      >
        Ver más detalles →
      </Button> */}
    </div>
  );
}
