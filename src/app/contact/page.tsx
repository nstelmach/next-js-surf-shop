import ContactForm from "@/src/app/contact/components/contact-form"
import Typography from "@/src/components/typography/typography"

export default function ContactPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        CONTACT US!
      </Typography>
      <ContactForm />
    </>
  )
}
