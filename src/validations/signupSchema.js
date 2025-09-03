import { z } from "zod"

export const signupSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name must be at most 30 characters")
    .regex(/^[A-Za-z]+$/, "Only alphabets are allowed"),

  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(30, "Last name must be at most 30 characters")
    .regex(/^[A-Za-z]+$/, "Only alphabets are allowed"),

  userId: z
    .string()
    .nonempty("UserId is required")
    .min(2, "UserId must be at least 2 characters"),

  email: z
    .string()
    .nonempty("Email is required")
    .max(100, "Length of Email address exceeded")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address")
    .refine((val) => val !== "admin@example.com", {
      message: "Enter a different email id",
    }),

  dob: z
    .string()
    .nonempty("Date of Birth is required")
    .refine((val) => {
      if (!val) return true;
      // Expecting dob in dd-mm-yyyy format
      const [day, month, year] = val.split("-");
      if (!day || !month || !year) return false;
      const selectedDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return selectedDate <= today;
    }, {
      message: "Date of Birth cannot be in the future",
    }),

  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be 8-20 characters long")
    .max(20, "Password must be 8-20 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
      "Password must include uppercase, lowercase, number, and special character"
    ),

  confirmPassword: z.string().nonempty("Confirm Password is required"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // error shows under confirmPassword field
});
