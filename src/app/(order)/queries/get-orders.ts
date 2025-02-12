import { Ctx } from "blitz"
import db from "@/db"

export default async function getOrders(_: any, ctx: Ctx) {
  if (!ctx.session.userId) throw new Error()

  return db.order.findMany({
    where: { userId: ctx.session.userId },
    include: {
      shipping: true,
      payment: true,
      products: { include: { product: { include: { images: true, prices: true } } } },
    },
  })
}
