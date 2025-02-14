"use client"
import { CartProduct } from "@prisma/client"
import { Card, CardContent, CardFooter } from "@/src/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { XIcon } from "lucide-react"
import QuantitySelect from "@/src/app/cart/components/quantity-select"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import deleteCartProduct from "@/src/app/cart/mutations/delete-cart-product"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Typography from "@/src/components/typography/typography"

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
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
    }
  }

  return (
    <Card className="p-2 gap-2">
      <CardContent className="flex flex-row justify-center items-start gap-2">
        <Link href={`/${category}/${productId}`}>
          <Image src={cartProduct.product.images[0].src} alt={name} width={100} height={200} />
        </Link>
        <div className="flex flex-col justify-center items-center gap-2">
          <Link href={`/${category}/${productId}`}>
            <Typography as="p" variant="base" weight="bold" className="text-center">
              {name}
            </Typography>
          </Link>
          <Typography as="p" variant="base">
            {cartProduct.chosenSize}
          </Typography>
        </div>
        {isError && (
          <Typography as="p" variant="base" className="m-2 text-center">
            {UNEXPECTED_ERROR}
          </Typography>
        )}
        <ButtonWithLoader
          onClick={onClickHandler}
          type="button"
          isLoading={isLoading}
          size="icon"
          variant="ghost"
          className="items-start !w-8 !h-8"
          icon={<XIcon className="h-4 w-4" />}
        />
      </CardContent>
      <CardFooter className="w-full gap-4">
        <Typography as="p">{price} €</Typography>
        <QuantitySelect quantity={quantity} cartProductId={productId} />
        <Typography as="p">{quantity * price} €</Typography>
      </CardFooter>
    </Card>
  )
}
