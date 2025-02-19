"use client"
import CartRadioGroup from "@/src/app/cart/components/cart-radio-group"
import CartSummary from "@/src/app/cart/components/cart-summary"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import getShipping from "@/src/app/cart/queries/get-shipping"
import getPayment from "@/src/app/cart/queries/get-payment"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import { Order } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import { EMPTY_CART, FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import getCart from "@/src/app/cart/queries/get-cart"
import createOrder from "@/src/app/(order)/mutations/create-order"
import Typography from "@/src/components/typography/typography"
import { useRouter } from "next/navigation"
import { getLink } from "@/src/lib/utils"

export default function CartDetails() {
  const [shippingArr] = useQuery(getShipping)
  const [paymentArr] = useQuery(getPayment)
  const [cart] = useQuery(getCart)
  const router = useRouter()

  const form = useForm<z.infer<typeof Order>>({
    resolver: zodResolver(Order),
    defaultValues: {
      shipping: "inpost",
      payment: "blik",
    },
  })

  const [createOrderMutation, { isLoading, isSuccess, isError, error }] = useMutation(createOrder)

  const totalPrice =
    cart?.cartProducts.reduce((total, cartProduct) => {
      return total + cartProduct.quantity * cartProduct.product.prices[0].price
    }, 0) ?? 0

  const chosenShipping = useWatch({
    control: form.control,
    name: "shipping",
  })

  const foundShipping = shippingArr.find((shippingItem) => shippingItem.name === chosenShipping)
  const shippingPrice = foundShipping.price

  const onSubmit = async (values: z.infer<typeof Order>) => {
    try {
      const order = await createOrderMutation({
        ...values,
        price: totalPrice + shippingPrice,
        products: cart?.cartProducts,
        cartId: cart?.id,
      })
      await invalidateQuery(getCart)
      const href = getLink("order", order.id)
      router.refresh()
      router.push(href)
    } catch (error: any) {
      if (error.name === "EmptyCartError") {
        return { [FORM_ERROR]: EMPTY_CART }
      } else {
        return { [FORM_ERROR]: UNEXPECTED_ERROR }
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center xl:grow w-full max-w-md"
      >
        <CartRadioGroup
          name="shipping"
          control={form.control}
          items={shippingArr}
          title="Shipping"
        />
        <CartRadioGroup name="payment" control={form.control} title="Payment" items={paymentArr} />
        <CartSummary shipping={shippingPrice} totalPrice={totalPrice} />
        <div className="flex xl:flex-row flex-col items-center justify-between gap-4 m-6 lg:m-2 xl:max-w-full w-full">
          <div className="w-full flex-1">
            <ButtonWithLoader isLoading={isLoading} type="submit" label="Order" />
          </div>
          <div className="w-full flex-1">
            <Link href="/">
              <Button className="!w-full" type="button">
                Continue shopping
              </Button>
            </Link>
          </div>
        </div>
        {isError && (
          <Typography as="p" variant="base" className="m-2 text-center">
            {error.name === "EmptyCartError" ? EMPTY_CART : UNEXPECTED_ERROR}
          </Typography>
        )}
        {isSuccess && (
          <Typography as="p" variant="base" className="m-2 text-center">
            Your order has been successfully placed!
          </Typography>
        )}
      </form>
    </Form>
  )
}
