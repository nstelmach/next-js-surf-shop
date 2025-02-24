"use client"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Cart } from "@prisma/client"
import CartTableRow from "@/src/app/cart/components/cart-table-row"
import Typography from "@/src/components/typography/typography"
import { useCurrentUser } from "@/src/app/user/hooks/use-current-user"

interface CardDetailsProps {
  cart: Cart
}

export default function CartTable({ cart }: CardDetailsProps) {
  const user = useCurrentUser()

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
        <div className="hidden xl:block xl:grow-2">
          <Typography as="p" variant="base" className="m-2 text-center w-full">
            {user ? "Your cart is empty." : "Log in to add items to your cart!"}
          </Typography>
        </div>
      )}
    </>
  )
}
