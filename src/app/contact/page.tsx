import ContactForm from "@/src/app/contact/components/contact-form"
import Paragraph from "@/src/components/typography/paragraph"

export default function ContactPage() {
  return (
    <>
      <Paragraph className="text-center xl:text-2xl md:text-4xl text-3xl font-bold m-4">
        CONTACT US!
      </Paragraph>
      <ContactForm />
    </>
  )
}
