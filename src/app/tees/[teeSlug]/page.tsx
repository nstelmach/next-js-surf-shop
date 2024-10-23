import ClothesDetails from "@/components/clothes/clothes-details/clothes-details";
import {TEES} from "@/lib/constants";

export default function TeeDetailsPage({params}) {
    const tee = TEES.find((item) => item.id === params.teeSlug);

    return <ClothesDetails
        title={tee?.name}
        description={tee?.description}
        price={tee?.price}
        images={tee?.images}
        auctionPrice="50"
    />
}
