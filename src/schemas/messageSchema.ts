import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Message should be atleast of 10 character long!" })
    .max(300, {
      message: "Message should not exceed more than 300 characters",
    }),
});
