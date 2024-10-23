import {LONGSLEEVES} from "@/lib/constants";
import ClothesDetails from "@/components/clothes/clothes-details/clothes-details";

export default function LongSleeveDetailsPage({params}) {
    const longSleeve = LONGSLEEVES.find((item) => item.id === params.longsleeveSlug);

    return <ClothesDetails
        title={longSleeve?.name}
        description={longSleeve?.description}
        price={longSleeve?.price}
        images={longSleeve?.images}
        auctionPrice="50"
    />
}