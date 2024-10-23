import PersonalInformationForm from "@/components/forms/personal-information-form";
import Paragraph from "@/components/typohgraphy/paragraph";

export default function PersonalInformationPage() {
    return <>
        <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4 text-center">YOUR PERSONAL
            INFORMATION</Paragraph>
        <PersonalInformationForm/>
    </>
}