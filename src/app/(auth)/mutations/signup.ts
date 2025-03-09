import db from "db"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { resolver } from "@blitzjs/rpc"
import { Signup } from "@/src/lib/validations"

export class SignupError extends Error {
  name = "SignupError"
  message = "This email is already being used"
}

export default resolver.pipe(resolver.zod(Signup), async ({ password, email, name }, ctx: any) => {
  const existingUser = await db.user.findFirst({ where: { email } })
  if (existingUser) throw new SignupError()

  const blitzContext = ctx
  const hashedPassword = await SecurePassword.hash(password)
  const user = await db.user.create({
    data: { name, email, hashedPassword },
  })

  await blitzContext.session.$create({
    userId: user.id,
    role: "user",
  })

  return { userId: blitzContext.session.userId, ...user, email, name }
})
