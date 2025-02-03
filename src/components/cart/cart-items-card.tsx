"use client"
import { CartProduct } from "@prisma/client"
import Flex from "@/src/components/typohgraphy/flex"
import { Card, CardContent, CardFooter } from "@/src/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import { XIcon } from "lucide-react"
import QuantitySelect from "@/src/components/cart/quantity-select"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import deleteCartProduct from "@/src/mutations/delete-cart-product"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"

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
      await deleteCartProductMutation({ cartProductId: productId })
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
    }
  }

  return (
    <Card className="p-2 gap-2">
      <CardContent>
        <Flex className="flex-row justify-center items-start gap-2">
          <Link href={`/${category}/${productId}`}>
            <Image src={cartProduct.product.images[0].src} alt={name} width={100} height={200} />
          </Link>
          <Flex className="flex-col justify-center items-center gap-2">
            <Link href={`/${category}/${productId}`}>
              <Paragraph className="xl:text-base text-lg md:text-xl text-center font-bold">
                {name}
              </Paragraph>
            </Link>
            <Paragraph className="xl:text-base text-lgl md:text-xl">
              {cartProduct.chosenSize}
            </Paragraph>
          </Flex>
          {isError && (
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
              {UNEXPECTED_ERROR}
            </Paragraph>
          )}
          <ButtonWithLoader
            onClick={onClickHandler}
            type="button"
            isLoading={isLoading}
            size="icon"
            variant="ghost"
            className="items-start !w-8 !h-8"
          >
            <XIcon className="h-4 w-4" />
          </ButtonWithLoader>
        </Flex>
      </CardContent>
      <CardFooter className="w-full gap-4">
        <Paragraph>{price} €</Paragraph>
        <QuantitySelect quantity={quantity} cartProductId={productId} />
        <Paragraph>{quantity * price} €</Paragraph>
      </CardFooter>
    </Card>
  )
}
