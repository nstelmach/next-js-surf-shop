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
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import getCart from "@/src/app/cart/queries/get-cart"
import createOrder from "@/src/app/(order)/mutations/create-order"
import Typography from "@/src/components/typography/typography"

export default function CartDetails() {
  const [shippingArr] = useQuery(getShipping)
  const [paymentArr] = useQuery(getPayment)
  const [cart] = useQuery(getCart)

  const form = useForm<z.infer<typeof Order>>({
    resolver: zodResolver(Order),
    defaultValues: {
      shipping: "inpost",
      payment: "blik",
    },
  })

  const [createOrderMutation, { isLoading, isSuccess, isError }] = useMutation(createOrder)

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
      await createOrderMutation({
        ...values,
        price: totalPrice + shippingPrice,
        products: cart.cartProducts,
        cartId: cart.id,
      })
      await invalidateQuery(getCart)
    } catch (error: any) {
      return { [FORM_ERROR]: UNEXPECTED_ERROR }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-2 xl:gap-4 xl:grow w-full xl:w-fit max-w-full"
      >
        <CartRadioGroup
          name="shipping"
          control={form.control}
          items={shippingArr}
          title="Shipping"
        />
        <CartRadioGroup name="payment" control={form.control} title="Payment" items={paymentArr} />
        <CartSummary shipping={shippingPrice} totalPrice={totalPrice} />
        <div className="flex xl:flex-row flex-col items-center justify-center gap-4 m-2 max-w-xs xl:max-w-full w-full">
          <ButtonWithLoader isLoading={isLoading} type="submit" label="Order" className="flex-1" />
          <Link href="/" className="w-full flex-1">
            <Button className="!w-full" type="button">
              Continue shopping
            </Button>
          </Link>
        </div>
        {isError && (
          <Typography as="p" variant="base" className="m-2 text-center">
            {UNEXPECTED_ERROR}
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
