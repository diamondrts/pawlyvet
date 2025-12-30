import { z } from "zod";
 

// Shared Types for a static-only app
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  petName: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl?: any;
}

// Keep simple validation schemas for the frontend to use if needed
export const serviceSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  category: z.string(),
});

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  imageUrl: z.string(),
});

export const testimonialSchema = z.object({
  id: z.number(),
  clientName: z.string(),
  petName: z.string().optional(),
  content: z.string(),
  rating: z.number().default(5),
});

export const teamMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  imageUrl: z.string(),
});
