import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"
import newsletterImg from "@/src/assets/newsletter/newsletter.jpg"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import Flex from "@/src/components/typohgraphy/flex"
import NewsletterButton from "@/src/components/newsletter/newsletter-button"

export default function Newsletter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Paragraph className="text-xl md:text-2xl xl:text-base">NEWSLETTER</Paragraph>
      </DialogTrigger>
      <DialogContent>
        <Image className="basis-full" src={newsletterImg} alt="Surf Shop Newsletter" width={200} />
        <Flex className="flex-col justify-center items-center gap-4 basis-full">
          <DialogHeader>
            <DialogTitle>VERY SURF GOODS</DialogTitle>
            <DialogDescription>
              Subscribe and receive the latest information about news, promotions and special offers
              available in our online store and{" "}
              <strong>get a 5% discount on your next purchase.*</strong>
            </DialogDescription>
          </DialogHeader>
          <NewsletterButton />
          <DialogFooter>
            <Paragraph className="xl:text-xs text-sm md:text-md text-center">
              <i>
                By signing up you consent to the processing of personal data in accordance with the{" "}
                <Link className="hover:underline" href="/privacy-policy">
                  <u>privacy policy.</u>
                </Link>
              </i>
            </Paragraph>
          </DialogFooter>
        </Flex>
      </DialogContent>
    </Dialog>
  )
}
