import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  colorClass?: string;
}

export function ServiceCard({ title, description, Icon, colorClass = "bg-white" }: ServiceCardProps) {
  return (
    <div className={`
      group relative p-8 rounded-3xl border border-border/50
      shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
      ${colorClass}
    `}>
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      <Button 
        variant="ghost" 
        className="p-0 text-primary hover:text-primary/80 hover:bg-transparent font-semibold group-hover:underline decoration-2 underline-offset-4"
      >
        Ver más detalles →
      </Button>
    </div>
  );
}
