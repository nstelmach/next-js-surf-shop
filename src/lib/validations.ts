import { z } from "zod"
import { Category, Size } from "@prisma/client"

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(8, {
    message: "Password must be at least 8 characters.",
  })
  .max(20, {
    message: "Password must be below 20 characters.",
  })
  .transform((str) => str.trim())

export const name = z
  .string()
  .min(2, {
    message: "First name must be at least 2 characters.",
  })
  .max(20, {
    message: "First name must be below 20 characters.",
  })

export const terms = z.literal<boolean>(true, { message: "Terms and conditions must be accepted." })

export const message = z
  .string()
  .min(2, {
    message: "Message must be at least 2 characters.",
  })
  .max(50, {
    message: "Message must be below 50 characters.",
  })

export const Signup = z.object({
  email,
  password,
  name,
  terms,
})

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string().optional(),
    terms,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
  terms,
})

export const Contact = z.object({
  email,
  name,
  message,
})

export const GetProducts = z.object({
  category: z.nativeEnum(Category).optional(),
  bestseller: z.boolean().optional(),
})

export const GetProduct = z.object({
  id: z.number(),
})

export const Order = z.object({
  shipping: z.string(),
  payment: z.string(),
})

export const UpdateCart = z.object({
  shipping: z.string(),
  payment: z.string(),
})

export const ChooseSize = z.object({
  size: z.nativeEnum(Size, {
    message: "You must choose a size.",
  }),
})
