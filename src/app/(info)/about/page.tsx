import { ABOUT_US } from "@/src/lib/constants"
import ReactMarkdown from "react-markdown"
import Typography from "@/src/components/typography/typography"

export default function AboutPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        ABOUT US
      </Typography>
      <ReactMarkdown className="prose text-lg xl:text-base md:text-xl md:p-2 text-center xl:text-left">
        {ABOUT_US}
      </ReactMarkdown>
    </>
  )
}
