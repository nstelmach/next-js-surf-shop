"use client"
import { TableCell, TableRow } from "@/src/components/ui/table"
import Flex from "@/src/components/typohgraphy/flex"
import Link from "next/link"
import Image from "next/image"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import QuantitySelect from "@/src/components/cart/quantity-select"
import { XIcon } from "lucide-react"
import { CartProduct } from "@prisma/client"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import deleteCartProduct from "@/src/mutations/delete-cart-product"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import getCart from "@/src/queries/getCart"

interface CardTableRowProps {
  cartProduct: CartProduct
}

export default function CartTableRow({ cartProduct }: CardTableRowProps) {
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
      await invalidateQuery(getCart)
    } catch (error: any) {
      return {
        [FORM_ERROR]: UNEXPECTED_ERROR,
      }
    }
  }

  return (
    <TableRow>
      <TableCell>
        <Flex className="flex-row justify-start items-center gap-4 m-2">
          <Link href={`/${category}/${productId}`}>
            <Image src={cartProduct.product.images[0].src} alt={name} width={100} height={200} />
          </Link>
          <Link href={`/${category}/${productId}`}>
            <Paragraph>{name}</Paragraph>
          </Link>
        </Flex>
      </TableCell>
      <TableCell>{cartProduct.chosenSize}</TableCell>
      <TableCell>{price} €</TableCell>
      <TableCell>
        <QuantitySelect quantity={quantity} cartProductId={productId} />
      </TableCell>
      <TableCell>{quantity * price} €</TableCell>
      <TableCell>
        {isError && (
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            {UNEXPECTED_ERROR}
          </Paragraph>
        )}
        <ButtonWithLoader
          variant="ghost"
          onClick={onClickHandler}
          type="button"
          isLoading={isLoading}
          size="icon"
          className="!w-8 !h-8"
        >
          <XIcon className="h-4 w-4" />
        </ButtonWithLoader>
      </TableCell>
    </TableRow>
  )
}
