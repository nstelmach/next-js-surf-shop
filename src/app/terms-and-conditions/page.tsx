import ReactMarkdown from "react-markdown";
import {TERMS_AND_CONDITIONS} from "@/lib/constants";
import Paragraph from "@/components/typohgraphy/paragraph";

export default function TermsAndConditionsPage() {
    return <>
        <Paragraph className="xl:text-2xl md:text-4xl text-3xl font-bold m-4 text-center">TERMS AND
            CONDITIONS</Paragraph>
        <ReactMarkdown
            className="prose text-primary prose-strong:text-primary text-lg xl:text-base md:text-xl md:p-2 text-center xl:text-left">{TERMS_AND_CONDITIONS}</ReactMarkdown>
    </>
}