"use client"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { useMutation } from "@blitzjs/rpc"
import addToCart from "@/src/mutations/add-to-cart"
import { FORM_ERROR, LOGGED_IN, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { Size } from "@prisma/client"
import { AuthenticationError } from "blitz"

interface PurchaseTabsProps {
  auctionPrice: string | undefined
  productId: number | undefined
  size: Size
}

//TODO licitation
export default function PurchaseTabs({ auctionPrice, productId, size }: PurchaseTabsProps) {
  const [addToCartMutation, { isLoading, isSuccess, isError, error }] = useMutation(addToCart)

  const onAddToCartHandler = async (values) => {
    try {
      await addToCartMutation(values)
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: LOGGED_IN }
      } else {
        return {
          [FORM_ERROR]: UNEXPECTED_ERROR,
        }
      }
    }
  }

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
        {isError && (
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            {error instanceof AuthenticationError ? LOGGED_IN : UNEXPECTED_ERROR}
          </Paragraph>
        )}
        {isSuccess && (
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            You have successfully added this item to the cart!
          </Paragraph>
        )}
        <ButtonWithLoader
          type="button"
          label="Add to cart"
          onClick={() => onAddToCartHandler({ productId, size })}
          isLoading={isLoading}
        />
      </TabsContent>
      <TabsContent value="bid" className="gap-2">
        <Paragraph className="xl:text-base text-xl md:text-2xl">
          Current price: {auctionPrice} €
        </Paragraph>
        <div className="grid w-full max-w-sm items-center gap-2 m-2">
          <Label htmlFor="price">Your Price</Label>
          <Input type="text" id="price" placeholder="Price" />
          {/*<ButtonWithToast*/}
          {/*  type="button"*/}
          {/*  description="Your price offer has been successfully submitted!"*/}
          {/*  label="Bid"*/}
          {/*/>*/}
        </div>
      </TabsContent>
    </Tabs>
  )
}
