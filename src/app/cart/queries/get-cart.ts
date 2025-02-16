import db from "@/db"
import { Ctx } from "blitz"

export default async function getCart(_: any, ctx: Ctx) {
  if (!ctx.session.userId) return null

  return db.cart.findUnique({
    where: { userId: ctx.session.userId },
    include: {
      cartProducts: {
        orderBy: {
          id: "asc",
        },
        include: { product: { include: { images: true, prices: true } } },
      },
      shipping: true,
      payment: true,
    },
  })
}
