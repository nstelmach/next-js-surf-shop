import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { NotFoundError } from "blitz"
import { Order, OrderDetails } from "@/src/lib/validations"
import { EmptyCartError } from "@/src/lib/types"

export default resolver.pipe(
  resolver.zod(Order.and(OrderDetails)),
  resolver.authorize(),
  async ({ price, shipping, payment, products, cartId }, ctx) => {
    if (!products || products.length <= 0) throw new EmptyCartError()
    if (!cartId || !price) throw new Error()

    if (!ctx.session.userId) throw new NotFoundError()

    const orderProducts = products.map((product) => {
      return { productId: product.productId, size: product.chosenSize, quantity: product.quantity }
    })

    const order = await db.order.create({
      data: {
        user: { connect: { id: ctx.session.userId } },
        price: price,
        shipping: { connect: { name: shipping } },
        payment: { connect: { name: payment } },
        products: {
          createMany: {
            data: orderProducts,
          },
        },
      },
    })

    await db.cartProduct.deleteMany({
      where: { cartId: cartId },
    })

    await db.cart.delete({
      where: { id: cartId },
    })

    return order
  }
)
