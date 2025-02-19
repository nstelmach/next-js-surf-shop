import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import menuIcon from "@/src/assets/svg/menu.svg"
import HeaderProfile from "@/src/components/header/header-profile"
import Link from "next/link"

export default function HeaderMenu() {
  return (
    <div className="lg:hidden m-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Image src={menuIcon} alt="Menu" width={40} className="md:w-[50px] w-[40px]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <HeaderProfile />
          <DropdownMenuSeparator />
          <Link href={"/bestsellers"}>
            <DropdownMenuItem>Bestsellers</DropdownMenuItem>
          </Link>
          <Link href={"/tees"}>
            <DropdownMenuItem>Tees</DropdownMenuItem>
          </Link>
          <Link href={"/hoodies"}>
            <DropdownMenuItem>Hoodies</DropdownMenuItem>
          </Link>
          <Link href={"/longsleeves"}>
            <DropdownMenuItem>Longsleeves</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
