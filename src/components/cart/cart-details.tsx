"use client"
import Flex from "@/src/components/typohgraphy/flex"
import CartRadioGroup from "@/src/components/cart/cart-radio-group"
import CartSummary from "@/src/components/cart/cart-summary"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { useQuery } from "@blitzjs/rpc"
import getShipping from "@/src/queries/get-shipping"
import getPayment from "@/src/queries/get-payment"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import { Order } from "@/src/app/(auth)/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"

//TODO toast and link new
export default function CartDetails() {
  const [shipping] = useQuery(getShipping)
  const [payment] = useQuery(getPayment)

  const form = useForm<z.infer<typeof Order>>({
    resolver: zodResolver(Order),
    defaultValues: {
      shipping: "inpost",
      payment: "blik",
    },
  })

  const chosenShipping = useWatch({
    control: form.control,
    name: "shipping",
  })

  const foundShipping = shipping.find((shippingItem) => shippingItem.name === chosenShipping)

  const onSubmit = async (values: z.infer<typeof Order>) => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Flex className="flex-col items-center justify-center gap-2 xl:gap-4 xl:grow w-full xl:w-fit max-w-full">
          <CartRadioGroup
            name="shipping"
            control={form.control}
            items={shipping}
            title="Shipping"
          />
          <CartRadioGroup name="payment" control={form.control} title="Payment" items={payment} />
          <CartSummary shipping={foundShipping.price} />
          <Flex className="xl:flex-row flex-col items-center justify-center gap-4 m-2 max-w-xs xl:max-w-full w-full">
            <ButtonWithLoader isLoading={false} type="submit" label="Order" className="flex-1" />

            {/*  description="Your order has been successfully placed!"*/}

            <Link href="/" className="flex-1 w-full">
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
