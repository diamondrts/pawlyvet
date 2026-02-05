import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";


export async function registerRoutes(app: Express) {
  
  app.get("/api/services", async (_req, res) => {
    const data = await storage.getServices();
    res.json(data);
  });

  app.get("/api/products", async (_req, res) => {
    const data = await storage.getProducts();
    res.json(data);
  });

  app.get("/api/testimonials", async (_req, res) => {
    const data = await storage.getTestimonials();
    res.json(data);
  });

  app.get("/api/team", async (_req, res) => {
    const data = await storage.getTeam();
    res.json(data);
  });
}

// export async function registerRoutes(
//   httpServer: Server,
//   app: Express
// ): Promise<Server> {
//   // Static-only API endpoints for compatibility with frontend hooks
//   app.get(api.services.list.path, async (_req, res) => {
//     const services = await storage.getServices();
//     res.json(services);
//   });

//   app.get(api.products.list.path, async (_req, res) => {
//     const products = await storage.getProducts();
//     res.json(products);
//   });

//   app.get(api.testimonials.list.path, async (_req, res) => {
//     const testimonials = await storage.getTestimonials();
//     res.json(testimonials);
//   });

//   app.get(api.team.list.path, async (_req, res) => {
//     const team = await storage.getTeam();
//     res.json(team);
//   });

//   return httpServer;
// }
