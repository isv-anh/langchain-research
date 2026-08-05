import { z } from "zod";

export const profileSchema = z.object({
  userName: z.string().optional(),

  age: z.number().optional(),

  city: z.string().optional(),

  job: z.string().optional(),
});

export type Profile = z.infer<typeof profileSchema>;