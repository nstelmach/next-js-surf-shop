import Flex from "@/components/typohgraphy/flex";
import Paragraph from "@/components/typohgraphy/paragraph";

interface CartSummarySectionProps {
    title: string;
    price: string;
}

export default function CartSummarySection({title, price}: CartSummarySectionProps) {
    return <Flex className="flex-row items-start justify-between gap-4 p-2 max-w-xs xl:max-w-full w-full">
        <Paragraph className="xl:text-base text-xl md:text-2xl">{title}:</Paragraph>
        <Paragraph className="xl:text-base text-xl md:text-2xl">{price} €</Paragraph>
    </Flex>
}