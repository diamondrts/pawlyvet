import type { Express } from "express";
import { storage } from "./storage";


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
