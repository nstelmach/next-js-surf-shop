"use client"
import { CartProduct } from "@prisma/client"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { XIcon } from "lucide-react"
import QuantitySelect from "@/src/app/cart/components/quantity-select"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import deleteCartProduct from "@/src/app/cart/mutations/delete-cart-product"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Typography from "@/src/components/typography/typography"
import { getLink } from "@/src/lib/utils"
import ParagraphSection from "@/src/components/section/paragraph-section"
import getCart from "@/src/app/cart/queries/get-cart"

interface CartItemsCardProps {
  cartProduct: CartProduct
}

export default function CartItemsCard({ cartProduct }: CartItemsCardProps) {
  const product = cartProduct.product
  const productId = cartProduct.id
  const category = product.category
  const name = product.name
  const quantity = cartProduct.quantity
  const price = product.prices[0].price

  const [deleteCartProductMutation, { isError, isLoading }] = useMutation(deleteCartProduct)

  const onClickHandler = async () => {
    try {
      await deleteCartProductMutation({ productId })
      await invalidateQuery(getCart)
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
    }
  }

  const href = getLink(category, productId)

  return (
    <Card className="p-2 gap-2">
      <CardHeader className="flex flex-row justify-end items-center">
        <ButtonWithLoader
          onClick={onClickHandler}
          type="button"
          isLoading={isLoading}
          size="icon"
          variant="ghost"
          icon={<XIcon className="h-6 w-6" />}
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-2">
        {isError && (
          <Typography as="p" variant="base" className="m-2 text-center">
            {UNEXPECTED_ERROR}
          </Typography>
        )}
        <div className="flex justify-between items-center gap-2">
          <Link href={href} className="flex-1 flex justify-center items-center">
            <Image src={cartProduct.product.images[0].src} alt={name} width={100} height={200} />
          </Link>
          <Link href={href} className="flex-1">
            <Typography as="p" variant="base" weight="bold" className="text-center">
              {name}
            </Typography>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="w-full gap-4 flex-col p-4">
        <ParagraphSection title="Size:" name={cartProduct.chosenSize} />
        <ParagraphSection title="Price:" name={`${price} €`} />
        <QuantitySelect quantity={quantity} cartProductId={productId} />
        <ParagraphSection title="Total:" name={`${quantity * price} €`} />
      </CardFooter>
    </Card>
  )
}
