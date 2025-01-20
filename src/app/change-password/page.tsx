import Paragraph from "@/src/components/typohgraphy/paragraph"
import ChangePasswordContent from "@/src/components/change-password/change-password-content"
 
export default function ChangePasswordPage() {
  return (
    <>
      <Paragraph className="text-center text-3xl md:text-4xl xl:text-2xl font-bold m-4">
        FORGOT YOUR PASSWORD?
      </Paragraph>
      <ChangePasswordContent />
    </>
  )
}
