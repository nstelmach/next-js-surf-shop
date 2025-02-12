import db from "@/db"
import { Ctx } from "blitz"

export default async function getCart(_: any, ctx: Ctx) {
  if (!ctx.session.userId) throw new Error()

  return db.cart.findUnique({
    where: { userId: ctx.session.userId },
    include: {
      cartProducts: { include: { product: { include: { images: true, prices: true } } } },
      shipping: true,
      payment: true,
    },
  })
}
