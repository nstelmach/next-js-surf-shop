"use client"
import Flex from "@/src/components/typohgraphy/flex"
import CartRadioGroup from "@/src/components/cart/cart-radio-group"
import CartSummary from "@/src/components/cart/cart-summary"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import getShipping from "@/src/queries/get-shipping"
import getPayment from "@/src/queries/get-payment"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import { Order, UpdateCart } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import updateCart from "@/src/mutations/update-cart"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import getCart from "@/src/queries/get-cart"
import createOrder from "@/src/mutations/create-order"

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

  const [updateCartMutation, { isLoading, isSuccess, isError }] = useMutation(updateCart)
  const [
    createOrderMutation,
    { isLoading: isOrderLoading, isSuccess: isOrderSuccess, isError: isOrderError },
  ] = useMutation(createOrder)

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

  const onSubmit = async (values: z.infer<typeof UpdateCart>) => {
    try {
      await updateCartMutation({ ...values, cartId: cart.id })
    } catch (error: any) {
      return { [FORM_ERROR]: UNEXPECTED_ERROR }
    }
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Flex className="flex-col items-center justify-center gap-2 xl:gap-4 xl:grow w-full xl:w-fit max-w-full">
          <CartRadioGroup
            name="shipping"
            control={form.control}
            items={shippingArr}
            title="Shipping"
          />
          <CartRadioGroup
            name="payment"
            control={form.control}
            title="Payment"
            items={paymentArr}
          />
          <CartSummary shipping={shippingPrice} totalPrice={totalPrice} />
          {(isError || isOrderError) && (
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
              {UNEXPECTED_ERROR}
            </Paragraph>
          )}
          {isSuccess && isOrderSuccess && (
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
              Your order has been successfully placed!
            </Paragraph>
          )}
          <Flex className="xl:flex-row flex-col items-center justify-center gap-4 m-2 max-w-xs xl:max-w-full w-full">
            <ButtonWithLoader
              isLoading={isLoading || isOrderLoading}
              type="submit"
              label="Order"
              className="flex-1"
            />
            <Link href="/" className="w-full flex-1">
              <Button className="!w-full" type="button">
                Continue shopping
              </Button>
            </Link>
          </Flex>
        </Flex>
      </form>
    </Form>
  )
}
