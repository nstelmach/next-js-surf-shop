import ClothesList from "@/components/clothes/clothes-list/clothes-list";
import { HOODIES } from "@/lib/constants";

export default function Hoodies() {
  return <ClothesList title="HOODIES" items={HOODIES} />;
}