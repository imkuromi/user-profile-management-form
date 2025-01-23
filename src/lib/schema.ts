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
  pdpa: z.boolean().refine((value)=> value === true,{ message: "I agree to the PDPA policy"}),
  gender: z.enum(["","Male","Female","Ect"]).refine((value)=>value !== "",{message:"Gender is Required"}),
  hobby:  z.string().array().nonempty({message:"Hobby is Required"}),
  status: z.enum(["","Single", "Married", "Divorce"]).refine((value)=>value !== "",{message:"Status is Required"}),
  note: z.string().min(1, { message: "Note is Required" })
});

export type Schema = z.infer<typeof schema>;
