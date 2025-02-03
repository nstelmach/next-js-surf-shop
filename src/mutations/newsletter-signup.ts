import db from "@/db"
import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import { ALREADY_SUBSCRIBED } from "@/src/lib/constants"

export class AlreadySubscribedError extends Error {
  name = "AlreadySubscribedError"
  message = ALREADY_SUBSCRIBED
}

export default resolver.pipe(resolver.authorize(), async (_: any, ctx) => {
  const user = await db.user.findFirst({ where: { id: ctx.session.userId } })
  if (!user) throw new NotFoundError()
  if (user.newsletter === true) throw new AlreadySubscribedError()
  await db.user.update({
    where: { id: user.id },
    data: { newsletter: true },
  })

  return true
})
