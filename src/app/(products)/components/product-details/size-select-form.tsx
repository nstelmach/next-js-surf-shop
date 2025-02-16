"use client"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, LOGGED_IN, SIZE_ITEMS, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ChooseSize } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthenticationError } from "blitz"
import { Form } from "@/src/components/ui/form"
import addToCart from "@/src/app/cart/mutations/add-to-cart"
import getCart from "@/src/app/cart/queries/get-cart"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import SelectField from "@/src/components/fields/select-field"
import Typography from "@/src/components/typography/typography"

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
      await addToCartMutation({ ...values, productId })
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
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-center items-center w-full p-2 gap-2">
          <SelectField
            control={form.control}
            name="size"
            items={SIZE_ITEMS}
            placeholder="Choose a size"
          />
          <ButtonWithLoader type="submit" label="Add to cart" isLoading={isLoading} />
        </div>
        {isError && (
          <Typography as="p" variant="base" className="m-2 text-center">
            {error instanceof AuthenticationError ? LOGGED_IN : UNEXPECTED_ERROR}
          </Typography>
        )}
        {isSuccess && (
          <Typography as="p" variant="base" className="m-2 text-center">
            You have successfully added this item to the cart!
          </Typography>
        )}
      </form>
    </Form>
  )
}
