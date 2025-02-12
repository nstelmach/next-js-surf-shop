import Newsletter from "@/src/app/newsletter/components/newsletter"
import Typography from "@/src/components/typography/typography"
import InformationItem from "@/src/components/footer/information-item"

export default function Information() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography as="h3" variant="heading">
        INFORMATION
      </Typography>
      <ul className="m-2 flex flex-col justify-center items-center xl:items-start">
        <InformationItem href="/contact" name="CONTACT US" />
        <InformationItem href="/about" name="ABOUT US" />
        <InformationItem href="/terms-and-conditions" name="TERMS AND CONDITION" />
        <InformationItem href="/privacy-policy" name="PRIVACY POLICY" />
        <li className="m-2 cursor-pointer hover:text-accent-foreground">
          <Newsletter />
        </li>
      </ul>
    </div>
  )
}
