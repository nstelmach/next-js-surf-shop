import Link from "next/link"

export default function Terms() {
  return (
    <>
      I have read the{" "}
      <Link href="/privacy-policy" className="hover:underline">
        privacy policy
      </Link>{" "}
      and accept the{" "}
      <Link href="/terms-and-conditions" className="hover:underline">
        terms and conditions
      </Link>
    </>
  )
}
