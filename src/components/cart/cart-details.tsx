import Flex from "@/components/typohgraphy/flex";
import CartRadioGroup from "@/components/cart/cart-radio-group";
import {DELIVERY_ITEMS, SHIPPING_ITEMS} from "@/lib/constants";
import CartSummary from "@/components/cart/cart-summary";
import ButtonWithToast from "@/components/toast/button-with-toast";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function CartDetails() {
    return <Flex className="flex-col items-center justify-center gap-2 xl:gap-4 xl:grow w-full xl:w-fit max-w-full">
        <CartRadioGroup title="Shipping" items={SHIPPING_ITEMS}/>
        <CartRadioGroup title="Delivery" items={DELIVERY_ITEMS}/>
        <CartSummary/>
        <Flex className="xl:flex-row flex-col items-center justify-center gap-4 m-2 max-w-xs xl:max-w-full w-full">
            <ButtonWithToast type="submit"
                             description="Your order has been successfully placed!"
                             label="Order" className="flex-1"/>
            <Link href="/public" className="flex-1 w-full">
                <Button className="!w-full" type="button">Continue shopping</Button>
            </Link>
        </Flex>
    </Flex>
}