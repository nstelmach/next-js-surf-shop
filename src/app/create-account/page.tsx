import Paragraph from "@/src/components/typohgraphy/paragraph"
import CreateAccountContent from "@/src/components/create-account/create-account-content"
 
export default function CreateAccountPage() {
  return (
    <>
      <Paragraph className="text-3xl md:text-4xl xl:text-2xl font-bold m-4 text-center">
        CREATE AN ACCOUNT
      </Paragraph>
      <CreateAccountContent />
    </>
  )
}
