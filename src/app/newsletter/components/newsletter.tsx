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
import NewsletterButton from "@/src/app/newsletter/components/newsletter-button"
import Typography from "@/src/components/typography/typography"

export default function Newsletter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography as="h2" variant="base">
          NEWSLETTER
        </Typography>
      </DialogTrigger>
      <DialogContent>
        <Image className="basis-full" src={newsletterImg} alt="Surf Shop Newsletter" width={200} />
        <div className="flex flex-col justify-center items-center gap-4 basis-full">
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
            <Typography as="p" variant="xsmall" className="text-center">
              <i>
                By signing up you consent to the processing of personal data in accordance with the{" "}
                <Link className="hover:underline" href="/privacy-policy">
                  <u>privacy policy.</u>
                </Link>
              </i>
            </Typography>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
