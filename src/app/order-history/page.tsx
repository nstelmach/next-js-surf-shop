import Paragraph from "@/components/typohgraphy/paragraph";
import HistoryDetails from "@/components/order-history/history-details";

export default function OrderHistoryPage() {
    return <>
        <Paragraph className="text-center text-3xl md:text-4xl xl:text-2xl font-bold m-4">ORDER HISTORY</Paragraph>
        <HistoryDetails/>
    </>
}