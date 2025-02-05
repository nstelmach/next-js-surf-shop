import { Ctx } from "blitz"
import db from "@/db"

export default async function getOrders(_: any, ctx: Ctx) {
  if (!ctx.session.userId) throw Error
  const user = await db.user.findFirst({
    where: { id: ctx.session.userId },
    select: { id: true },
  })

  return db.order.findMany({
    where: { userId: user.id },
    include: {
      shipping: true,
      payment: true,
      products: { include: { product: { include: { images: true, prices: true } } } },
    },
  })
}
