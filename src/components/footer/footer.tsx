import facebookImg from "@/assets/icons/facebook.png";
import instagramImg from "@/assets/icons/instagram.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex-column justify-center items-center">
        <div className="flex space-between">
          <div className="flex-column justify-center items-center">
            <span>INFORMATION</span>
            <ul>
              <li>
                <Link href="">
                  <span>CONTACT US</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>ABOUT US</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>TERMS AND CONDITIONS</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span>PRIVACY POLICY</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-column ">
            <span>OUR SOCIAL MEDIA</span>
            <div className="flex justify-center items-center">
              <Link href="/">
                <Image src={instagramImg} alt="Instagram" width={24} />
              </Link>

              <Link href="/">
                <Image src={facebookImg} alt="Facebook" width={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">COPYRIGHT © 2024 SURF SHOP</div>
      </div>
    </footer>
  );
}
