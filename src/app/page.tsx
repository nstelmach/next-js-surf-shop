import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Bestsellers from "./bestsellers/page";
import Hoodies from "./hoodies/page";
import LongSleeves from "./longsleeves/page";
import Tees from "./tees/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Tees />
      <LongSleeves />
      <Hoodies />
      <Bestsellers />
      <Footer />
    </main>
  );
}
