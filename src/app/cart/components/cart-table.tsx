import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Cart } from "@prisma/client"
import CartTableRow from "@/src/app/cart/components/cart-table-row"
import Typography from "@/src/components/typography/typography"

interface CardDetailsProps {
  cart: Cart
}

export default function CartTable({ cart }: CardDetailsProps) {
  return (
    <>
      {cart && cart.cartProducts.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.cartProducts.map((cartProduct) => (
              <CartTableRow key={cartProduct.id} cartProduct={cartProduct} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography as="p" variant="base" className="m-2 text-center w-full">
          Your cart is empty.
        </Typography>
      )}
    </>
  )
}
