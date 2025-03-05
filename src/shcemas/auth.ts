import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8)
  .regex(/[A-Z/]/)
  .regex(/[0-9]/);

export const emailSchema = z.string().email();
