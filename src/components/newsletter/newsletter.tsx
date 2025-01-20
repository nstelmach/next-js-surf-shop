import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import { Input } from "@/src/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import newsletterImg from "@/src/assets/newsletter/newsletter.jpg"
import ButtonWithToast from "@/src/components/toast/button-with-toast"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import Flex from "@/src/components/typohgraphy/flex"

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
          <Input type="email" placeholder="Enter your email" />
          <DialogFooter>
            <ButtonWithToast
              type="submit"
              description="You have been successfully signed up to the newsletter!"
              label="SIGN UP!"
            />
            <Paragraph className="xl:text-xs text-sm md:text-md text-center">
              <i>
                By signing up you consent to the processing of personal data in accordance with the{" "}
                <Link href="/privacy-policy">
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
