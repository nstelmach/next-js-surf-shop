import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { Contact } from "@/src/lib/validations"

export default resolver.pipe(resolver.zod(Contact), async ({ name, email, message }, ctx) => {
  await db.message.create({
    data: { name, email, message, user: { connect: { id: ctx.session.userId } } },
  })

  return { name, email, message }
})
