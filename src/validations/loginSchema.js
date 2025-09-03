import { z } from "zod"

export const loginScheme = z.object({
    username: z
        .string()
        .nonempty("Email addres is required")
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),


    password: z
        .string()
        .nonempty("Password is required"),

})

