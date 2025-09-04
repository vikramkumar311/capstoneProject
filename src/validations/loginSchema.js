import { z } from "zod"

export const loginScheme = z.object({
    userId: z
        .string()
        .nonempty("Username  is required"),


    password: z
        .string()
        .nonempty("Password is required"),

    rememberMe: z.boolean().optional(),

})

