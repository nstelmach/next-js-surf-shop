import LoginForm from "@/src/app/(auth)/components/login/login-form"
import Typography from "@/src/components/typography/typography"

export default function LoginPage() {
  return (
    <>
      <Typography as="h1" variant="2xlarge" weight="bold" className="m-4 text-center">
        LOG IN
      </Typography>
      <LoginForm />
    </>
  )
}
