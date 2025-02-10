import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { NotFoundError } from "blitz"
import { CartProduct } from "@prisma/client"

export default resolver.pipe(
  resolver.authorize(),
  async (
    {
      price,
      shipping,
      payment,
      products,
      cartId,
    }: {
      price: number
      shipping: string
      payment: string
      products: CartProduct[]
      cartId: number
    },
    ctx
  ) => {
    if (!cartId) throw new Error()

    const user = await db.user.findFirst({
      where: { id: ctx.session.userId },
      include: { cart: { include: { cartProducts: true } } },
    })
    if (!user) throw new NotFoundError()

    const orderProducts = products.map((product) => {
      return { productId: product.productId, size: product.chosenSize, quantity: product.quantity }
    })

    await db.order.create({
      data: {
        user: { connect: { id: user.id } },
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

    return true
  }
)
