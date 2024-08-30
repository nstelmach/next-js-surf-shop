import ClothesDetails from "@/components/clothes/clothes-details/clothes-details";
import { TEES } from "@/lib/constants";

export default function TeeDetails({ params }) {
  const tee = TEES.find((item) => item.id === params.teeSlug);

  if (!tee) {
    notFound();
  }

  return (
    <ClothesDetails
      title={tee?.name}
      description={tee?.description}
      price={tee?.price}
      images={tee?.images}
      auctionPrice="50"
    />
  );
}
