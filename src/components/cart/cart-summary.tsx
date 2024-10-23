import Flex from "@/components/typohgraphy/flex";
import Paragraph from "@/components/typohgraphy/paragraph";
import {Separator} from "@/components/ui/separator";
import CartSummarySection from "@/components/cart/cart-summary-section";

export default function CartSummary() {
    return <Flex className="flex-col items-center justify-center w-full xl:m-2 gap-4">
        <Paragraph className="xl:text-xl md:text-3xl text-2xl font-bold">Summary</Paragraph>
        <Separator orientation="horizontal"/>
        <CartSummarySection title="Products" price="50"/>
        <CartSummarySection title="Shipping" price="5"/>
        <Separator orientation="horizontal" className="bg-muted"/>
        <Flex className="flex-row items-center justify-between gap-4 p-2 max-w-xs xl:max-w-full w-full">
            <Paragraph className="font-bold xl:text-base text-xl md:text-2xl">TOTAL:</Paragraph>
            <Paragraph className="xl:text-base text-xl md:text-2xl">55 €</Paragraph>
        </Flex>
    </Flex>
}