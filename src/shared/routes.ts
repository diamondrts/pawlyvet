import { z } from "zod";
import {
  productSchema,
  serviceSchema,
  testimonialSchema,
  teamMemberSchema,
} from "./schema";

export const api = {
  services: {
    list: {
      method: "GET" as const,
      path: "/api/services",
      responses: {
        200: z.array(serviceSchema),
      },
    },
  },
  products: {
    list: {
      method: "GET" as const,
      path: "/api/products",
      responses: {
        200: z.array(productSchema),
      },
    },
  },
  testimonials: {
    list: {
      method: "GET" as const,
      path: "/api/testimonials",
      responses: {
        200: z.array(testimonialSchema),
      },
    },
  },
  team: {
    list: {
      method: "GET" as const,
      path: "/api/team",
      responses: {
        200: z.array(teamMemberSchema),
      },
    },
  },
};


export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
