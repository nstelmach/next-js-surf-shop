import Paragraph from "@/src/components/typohgraphy/paragraph"
import AccountContent from "@/src/components/my-account/account-content"
 
export default function MyAccountPage() {
  return (
    <>
      <Paragraph className="text-center text-3xl md:text-4xl xl:text-2xl font-bold m-4">
        YOUR ACCOUNT
      </Paragraph>
      <AccountContent />
    </>
  )
}
