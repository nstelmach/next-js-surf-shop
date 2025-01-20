import ReactMarkdown from "react-markdown"
import { PRIVACY_POLICY } from "@/src/lib/constants"
import Paragraph from "@/src/components/typohgraphy/paragraph"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Paragraph className="xl:text-2xl md:text-4xl text-3xl font-bold m-4 text-center">
        PRIVACY POLICY
      </Paragraph>
      <ReactMarkdown className="prose prose-li:marker:text-primary prose-strong:text-primary text-primary text-lg xl:text-base md:text-xl p-2 text-center xl:text-left">
        {PRIVACY_POLICY}
      </ReactMarkdown>
    </>
  )
}
