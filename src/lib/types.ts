import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User } from "@/db"
import { ALREADY_SUBSCRIBED, EMPTY_CART } from "@/src/lib/constants"
import {
  Cart,
  CartProduct,
  Image,
  Order,
  OrderProduct,
  Payment,
  Price,
  Product,
  Shipping,
} from "@prisma/client"

export type Role = "ADMIN" | "USER"

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
    }
  }
}

export class AlreadySubscribedError extends Error {
  name = "AlreadySubscribedError"
  message = ALREADY_SUBSCRIBED
}

export class EmptyCartError extends Error {
  name = "EmptyCartError"
  message = EMPTY_CART
}

export interface ProductType {
  product: ProductDetails
}

export type OrderDetails = Order & {
  shipping: Shipping
  payment: Payment
  products: OrderProductDetails[]
}

export type ProductDetails = Product & {
  prices: Price[]
  images: Image[]
}

export type OrderProductDetails = OrderProduct & ProductType

export type CartProductDetails = CartProduct & ProductType

export type CartDetails = Cart & {
  cartProducts: CartProductDetails[]
}
