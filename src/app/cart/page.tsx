import Flex from "@/components/typohgraphy/flex";
import CartDetails from "@/components/cart/cart-details";
import CartContainer from "@/components/cart/cart-container";

export default function CartPage() {
    return <Flex
        className="xl:flex-row flex-col justify-center items-center xl:items-start xl:justify-between gap-4 xl:m-4 max-w-xs md:max-w-md xl:max-w-full xl:w-full h-full">
        <CartContainer/>
        <CartDetails/>
    </Flex>
}