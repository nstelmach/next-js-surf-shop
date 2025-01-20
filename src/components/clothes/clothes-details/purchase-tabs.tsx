import { Button } from "@/src/components/ui/button"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import ButtonWithToast from "@/src/components/toast/button-with-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import Paragraph from "@/src/components/typohgraphy/paragraph"

interface PurchaseTabsProps {
  auctionPrice: string | undefined
}

export default function PurchaseTabs({ auctionPrice }: PurchaseTabsProps) {
  return (
    <Tabs
      defaultValue="buy"
      className="flex flex-col justify-center items-center w-full xl:max-w-lg"
    >
      <TabsList>
        <TabsTrigger value="buy">Buy Now</TabsTrigger>
        <TabsTrigger value="bid">Bid</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">
        <Button type="button">Add to cart</Button>
      </TabsContent>
      <TabsContent value="bid" className="flex-col gap-2">
        <Paragraph className="xl:text-base text-xl md:text-2xl">
          Current price: {auctionPrice} €
        </Paragraph>
        <div className="grid w-full max-w-sm items-center gap-2 m-2">
          <Label htmlFor="price">Your Price</Label>
          <Input type="text" id="price" placeholder="Price" />
          <ButtonWithToast
            type="button"
            description="Your price offer has been successfully submitted!"
            label="Bid"
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}
