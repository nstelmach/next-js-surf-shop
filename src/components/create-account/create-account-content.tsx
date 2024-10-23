import Paragraph from "@/components/typohgraphy/paragraph";
import Link from "next/link";
import CreateAccountForm from "@/components/forms/create-account-form";

export default function CreateAccountContent() {
    return <>
        <Paragraph className="xl:text-base text-xl md:text-2xl m-4 text-center xl:text-left">Already have an account?
            {" "}
            <Link href="/login"
                  className="hover:underline">
                Log in instead!
            </Link>
        </Paragraph>
        <CreateAccountForm/>
    </>
}