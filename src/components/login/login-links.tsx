import Link from "next/link";
import Paragraph from "@/components/typohgraphy/paragraph";
import {Button} from "@/components/ui/button";
import Flex from "@/components/typohgraphy/flex";

export default function LoginLinks() {
    return <>
        <Link href="/change-password">
            <Paragraph className="my-4 hover:underline xl:text-base text-xl md:text-2xl text-center xl:text-left">Forgot
                your
                password?</Paragraph>
        </Link>
        <Link href="/my-account">
            <Button type="button" className="xl:text-base text-xl md:text-2xl">SIGN IN</Button>
        </Link>
        <Flex className="flex-row justify-center items-center">
            <Paragraph className="xl:text-base text-xl md:text-2xl text-center">No account?
                {" "}
                <Link href="/create-account" className="hover:underline">
                    Create one here
                </Link>
            </Paragraph>
        </Flex>
    </>
}