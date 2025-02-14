import ReactMarkdown from "react-markdown"
import { PRIVACY_POLICY } from "@/src/lib/constants"
import Typography from "@/src/components/typography/typography"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        PRIVACY POLICY
      </Typography>
      <ReactMarkdown className="prose prose-li:marker:text-primary prose-strong:text-primary text-primary text-lg xl:text-base md:text-xl p-2 text-center xl:text-left">
        {PRIVACY_POLICY}
      </ReactMarkdown>
    </>
  )
}
