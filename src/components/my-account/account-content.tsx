import AccountButtons from "@/components/my-account/account-buttons";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function AccountContent() {
    return <>
        <AccountButtons/>
        <Link href="/login" className="min-w-52 md:min-w-64 xl:min-w-fit">
            <Button type="button">SIGN OUT</Button>
        </Link>
    </>
}