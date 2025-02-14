"use client"
import { TableCell, TableRow } from "@/src/components/ui/table"
import Link from "next/link"
import Image from "next/image"
import QuantitySelect from "@/src/app/cart/components/quantity-select"
import { XIcon } from "lucide-react"
import { CartProduct } from "@prisma/client"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import deleteCartProduct from "@/src/app/cart/mutations/delete-cart-product"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import getCart from "@/src/app/cart/queries/get-cart"
import Typography from "@/src/components/typography/typography"

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
      await deleteCartProductMutation({ productId })
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
        <div className="flex flex-row justify-start items-center gap-4 m-2">
          <Link href={`/${category}/${productId}`}>
            <Image src={cartProduct.product.images[0].src} alt={name} width={100} height={200} />
          </Link>
          <Link href={`/${category}/${productId}`}>
            <Typography as="p">{name}</Typography>
          </Link>
        </div>
      </TableCell>
      <TableCell>{cartProduct.chosenSize}</TableCell>
      <TableCell>{price} €</TableCell>
      <TableCell>
        <QuantitySelect quantity={quantity} cartProductId={productId} />
      </TableCell>
      <TableCell>{quantity * price} €</TableCell>
      <TableCell>
        {isError && (
          <Typography as="p" variant="base" className="m-2 text-center">
            {UNEXPECTED_ERROR}
          </Typography>
        )}
        <ButtonWithLoader
          variant="ghost"
          onClick={onClickHandler}
          type="button"
          isLoading={isLoading}
          size="icon"
          className="!w-8 !h-8"
          icon={<XIcon className="h-4 w-4" />}
        />
      </TableCell>
    </TableRow>
  )
}
