import db from "@/db"
import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import { AlreadySubscribedError } from "@/src/lib/types"

export default resolver.pipe(resolver.authorize(), async (_: any, ctx) => {
  const user = await db.user.findFirst({ where: { id: ctx.session.userId } })
  if (!user) throw new NotFoundError()

  if (user.newsletter) throw new AlreadySubscribedError()
  await db.user.update({
    where: { id: user.id },
    data: { newsletter: true },
  })

  return true
})
