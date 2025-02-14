import ReactMarkdown from "react-markdown"
import { TERMS_AND_CONDITIONS } from "@/src/lib/constants"
import Typography from "@/src/components/typography/typography"

export default function TermsAndConditionsPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        TERMS AND CONDITIONS
      </Typography>
      <ReactMarkdown className="prose text-primary prose-strong:text-primary text-lg xl:text-base md:text-xl md:p-2 text-center xl:text-left">
        {TERMS_AND_CONDITIONS}
      </ReactMarkdown>
    </>
  )
}
