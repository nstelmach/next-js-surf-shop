"use client"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, LOGGED_IN, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ChooseSize } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthenticationError } from "blitz"
import { Form, FormField, FormItem, FormMessage } from "@/src/components/ui/form"
import addToCart from "@/src/mutations/add-to-cart"
import getCart from "@/src/queries/get-cart"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import Flex from "@/src/components/typohgraphy/flex"
import SizeSelect from "@/src/components/clothes/clothes-details/size-select"

interface SizeSelectFormProps {
  productId: number
}

export default function SizeSelectForm({ productId }: SizeSelectFormProps) {
  const [addToCartMutation, { isLoading, isSuccess, isError, error }] = useMutation(addToCart)

  const form = useForm<z.infer<typeof ChooseSize>>({
    resolver: zodResolver(ChooseSize),
    defaultValues: {
      size: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof ChooseSize>) => {
    try {
      await addToCartMutation({ ...values, productId: productId })
      await invalidateQuery(getCart)
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: LOGGED_IN }
      } else {
        return {
          [FORM_ERROR]: UNEXPECTED_ERROR,
        }
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <Flex className="w-full p-2 xl:max-w-xs">
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <SizeSelect onChange={field.onChange} value={field.value} />
                <FormMessage />
              </FormItem>
            )}
          />
        </Flex>
        {isError && (
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            {error instanceof AuthenticationError ? LOGGED_IN : UNEXPECTED_ERROR}
          </Paragraph>
        )}
        {isSuccess && (
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            You have successfully added this item to the cart!
          </Paragraph>
        )}
        <ButtonWithLoader type="submit" label="Add to cart" isLoading={isLoading} />
      </form>
    </Form>
  )
}
