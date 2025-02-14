"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import updateQuantity from "@/src/app/cart/mutations/update-quantity"
import getCart from "@/src/app/cart/queries/get-cart"
import Typography from "@/src/components/typography/typography"
import { z } from "zod"
import { Quantity } from "@/src/lib/validations"

interface QuantitySelectProps {
  quantity: number
  cartProductId: number
}

export default function QuantitySelect({ quantity, cartProductId }: QuantitySelectProps) {
  const [updateQuantityMutation, { isError }] = useMutation(updateQuantity)

  const onValueChangeHandler = async (quantity: z.infer<typeof Quantity>) => {
    try {
      await updateQuantityMutation({ quantity, productId: cartProductId })
      await invalidateQuery(getCart)
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
    }
  }

  return (
    <>
      {isError && (
        <Typography as="p" variant="base" className="m-2 text-center">
          {UNEXPECTED_ERROR}
        </Typography>
      )}
      <Select onValueChange={onValueChangeHandler}>
        <SelectTrigger>
          <SelectValue defaultValue={quantity} placeholder={quantity} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
