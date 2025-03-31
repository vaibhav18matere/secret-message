import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "Username must be atleast two characters")
  .max(16, "Username must be at most 16 characters long");

export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid Email ID" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
