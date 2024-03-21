import { z } from "zod";

export const movieFormSchema = z.object({
  title: z.string(),
  description: z.string().min(5, "Description is too short"),
  poster: z.string().url("Invalid URL format"),
  director: z.string(),
  duration: z.number().int().positive(),
});
