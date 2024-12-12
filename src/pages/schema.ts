import { z } from "zod";
import { patterns } from "./constants";


export const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((text) => patterns.email.test(text), {
      message: "Email not valid",
    }),
  pdpa: z.boolean(),
  gender: z.enum(["","male","female","ect"]),
  hobby: z.array(z.string()),
  status: z.enum(["","single", "married", "divorce"]),
  note: z.string(),

});

export type Schema = z.infer<typeof schema>;
