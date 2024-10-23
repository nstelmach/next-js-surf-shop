import {ABOUT_US} from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import Paragraph from "@/components/typohgraphy/paragraph";

export default function AboutPage() {
    return <>
        <Paragraph className="text-center xl:text-2xl md:text-4xl text-3xl font-bold m-4">ABOUT US</Paragraph>
        <ReactMarkdown
            className="prose text-lg xl:text-base md:text-xl md:p-2 text-center xl:text-left">{ABOUT_US}</ReactMarkdown>
    </>
}