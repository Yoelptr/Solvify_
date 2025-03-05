import z from "zod";

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
