import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { Contact } from "@/src/lib/validations"

export default resolver.pipe(resolver.zod(Contact), async ({ name, email, message }, _) => {
  await db.message.create({
    data: { name, email, message },
  })

  return { name, email, message }
})
