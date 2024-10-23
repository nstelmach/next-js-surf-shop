import {HOODIES} from "@/lib/constants";
import ClothesDetails from "@/components/clothes/clothes-details/clothes-details";

export default function HoodieDetailsPage({params}) {
    const hoodie = HOODIES.find((item) => item.id === params.hoodieSlug);

    return <ClothesDetails
        title={hoodie?.name}
        description={hoodie?.description}
        price={hoodie?.price}
        images={hoodie?.images}
        auctionPrice="50"
    />
}