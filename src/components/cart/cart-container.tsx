import CartTable from "@/components/cart/cart-table";
import {CART_ITEMS} from "@/lib/constants";
import CartItems from "@/components/cart/cart-items";

export default function CartContainer() {
    return <>
        <CartTable items={CART_ITEMS}/>
        <CartItems items={CART_ITEMS}/>
    </>
}