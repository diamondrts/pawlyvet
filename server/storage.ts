import { type Service, type Product, type Testimonial, type TeamMember } from "@shared/schema";
import food1 from "@/components/img/food1.png";
export const staticData = { 
  services: [
    { id: 1, title: "Veterinaria", description: "Consultas, vacunas y cirugías con amor.", icon: "Stethoscope", category: "vet" },
    { id: 2, title: "Peluquería", description: "Baños y cortes para que luzcan increíbles.", icon: "Scissors", category: "grooming" },
    { id: 3, title: "Hotel", description: "Un segundo hogar seguro y divertido.", icon: "Hotel", category: "hotel" },
    { id: 4, title: "Tienda", description: "Alimentos y accesorios de la mejor calidad.", icon: "ShoppingBag", category: "shop" },
  ],
  products: [
    { id: 1, name: "Alimento Premium Perro", description: "Nutrición balanceada para tu mejor amigo.", category: "food", imageUrl: food1 },
    { id: 2, name: "Juguete Interactivo", description: "Para horas de diversión.", category: "toys", imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Collar Ajustable", description: "Estilo y seguridad en los paseos.", category: "accessories", imageUrl: "https://images.unsplash.com/photo-1605631097426-384a5665f83b?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Cama Ortopédica", description: "El descanso que ellos merecen.", category: "beds", imageUrl: "https://images.unsplash.com/photo-1591768793355-74d75b5d1e2b?w=500&auto=format&fit=crop&q=60" },
  ],
  testimonials: [
    { id: 1, clientName: "María Pérez", petName: "Luna", content: "¡El mejor trato para Luna! El hotel es maravilloso.", rating: 5 },
    { id: 2, clientName: "Carlos Gómez", petName: "Max", content: "La peluquería dejó a Max hermoso. Súper recomendados.", rating: 5 },
    { id: 3, clientName: "Laura Díaz", petName: "Coco", content: "Veterinarios muy profesionales y cariñosos.", rating: 5 },
  ],
  team: [ 
    { id: 1, name: "Dra. Ana Howley", role: "CEO", imageUrl: ""},
    { id: 2, name: "Yesica Jiménez", role: "médico veterinario", imageUrl: "" },
    { id: 3, name: "Katia Mañan", role: "Secretaria Administrativa", imageUrl: "" },
    { id: 4, name: "Yerison Lorenzo", role: "Peluquería", imageUrl: "" },
    // { id: 1, name: "Dra. Ana Howley", role: "CEO", imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60" },
    // { id: 2, name: "Pedro Ramírez", role: "Estilista Canino", imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60" },
    // { id: 3, name: "Sofía Martínez", role: "Asistente Veterinaria", imageUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=500&auto=format&fit=crop&q=60" },
    
  ],  
};

export interface IStorage {
  getServices(): Promise<Service[]>;
  getProducts(): Promise<Product[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getTeam(): Promise<TeamMember[]>;
}

export class MemStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return staticData.services;
  }
  async getProducts(): Promise<Product[]> {
    return staticData.products;
  }
  async getTestimonials(): Promise<Testimonial[]> {
    return staticData.testimonials;
  }
  async getTeam(): Promise<TeamMember[]> {
    return staticData.team;
  }
}

export const storage = new MemStorage();
