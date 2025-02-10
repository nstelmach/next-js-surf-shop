import db from "@/db"
import { Ctx } from "blitz"

export default async function getCart(_: any, ctx: Ctx) {
  if (!ctx.session.userId) throw new Error()
  const user = await db.user.findFirst({
    where: { id: ctx.session.userId },
    select: { id: true },
  })

  return db.cart.findUnique({
    where: { userId: user.id },
    include: {
      cartProducts: { include: { product: { include: { images: true, prices: true } } } },
      shipping: true,
      payment: true,
    },
  })
}
