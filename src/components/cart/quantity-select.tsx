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
import updateQuantity from "@/src/mutations/update-quantity"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import getCart from "@/src/queries/getCart"

export default function QuantitySelect({ quantity, cartProductId }) {
  const [updateQuantityMutation, { isError }] = useMutation(updateQuantity)

  const onValueChangeHandler = async (quantity) => {
    try {
      await updateQuantityMutation({ quantity, cartProductId })
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
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {UNEXPECTED_ERROR}
        </Paragraph>
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
