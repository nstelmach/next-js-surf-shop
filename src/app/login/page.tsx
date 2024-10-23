import LoginForm from "@/components/forms/login-form";
import Paragraph from "@/components/typohgraphy/paragraph";

export default function LoginPage() {

    return <>
        <Paragraph className="text-center xl:text-2xl md:text-4xl text-3xl font-bold m-4">LOG IN</Paragraph>
        <LoginForm/>
    </>
}