import { resolver } from "@blitzjs/rpc"
import db from "@/db"
import { NotFoundError } from "blitz"
import { Size } from "@prisma/client"

export default resolver.pipe(
  resolver.authorize(),
  async (
    {
      productId,
      size,
    }: {
      productId: number
      size: Size
    },
    ctx
  ) => {
    if (!productId) throw new Error()

    const user = await db.user.findFirst({
      where: { id: ctx.session.userId },
      include: { cart: { include: { cartProducts: true } } },
    })
    if (!user) throw new NotFoundError()

    if (!user.cart) {
      // User does not have a cart, create one with the product and chosen size inside
      await db.cart.create({
        data: {
          user: { connect: { id: user.id } },
          cartProducts: {
            create: {
              productId,
              chosenSize: size,
              quantity: 1,
            },
          },
          shipping: { connect: { name: "inpost" } },
          payment: { connect: { name: "blik" } },
        },
      })
    } else {
      const cart = user.cart
      const foundProduct = cart.cartProducts.find(
        (cp) => cp.productId === productId && cp.chosenSize === size
      )

      if (foundProduct) {
        // Product with the same size already in cart, increment quantity by 1
        await db.cartProduct.update({
          where: { id: foundProduct.id },
          data: { quantity: foundProduct.quantity + 1 },
        })
      } else {
        // Product not in cart or different size, add it
        await db.cartProduct.create({
          data: {
            cartId: cart.id,
            productId,
            chosenSize: size,
            quantity: 1,
          },
        })
      }
    }

    return true
  }
)
