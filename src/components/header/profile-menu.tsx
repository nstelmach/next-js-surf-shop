import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import profileIcon from "@/src/assets/svg/profile.svg"
import HeaderProfile from "@/src/components/header/header-profile"
import LogoutMenu from "@/src/components/header/logout-menu"

export default function ProfileMenu() {
  return (
    <div className="hidden lg:flex">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Image
            src={profileIcon}
            alt="Profile"
            width={40}
            className="xl:w-[30px] md:w-[50px] w-[40px]"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <HeaderProfile />
          <LogoutMenu />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
