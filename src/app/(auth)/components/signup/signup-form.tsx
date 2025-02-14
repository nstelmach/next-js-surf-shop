"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import { useMutation } from "@blitzjs/rpc"
import signup from "@/src/app/(auth)/mutations/signup"
import { useRouter } from "next/navigation"
import { Signup } from "@/src/lib/validations"
import { EMAIL_USED, FORM_ERROR } from "@/src/lib/constants"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import InputField from "@/src/components/fields/input-field"
import CheckboxField from "@/src/components/fields/checkbox-field"
import Terms from "@/src/app/(auth)/components/terms"
import Typography from "@/src/components/typography/typography"

export default function SignupForm() {
  const [signupMutation, { isLoading, isError, error }] = useMutation(signup)
  const router = useRouter()

  const ERROR = error?.toString()

  const form = useForm<z.infer<typeof Signup>>({
    resolver: zodResolver(Signup),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof Signup>) => {
    try {
      await signupMutation(values)
      router.refresh()
      router.push("/my-account")
    } catch (error: any) {
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        // This error comes from Prisma
        return { email: EMAIL_USED }
      } else {
        return { [FORM_ERROR]: ERROR }
      }
    }
  }

  return (
    <>
      {isError && (
        <Typography as="p" variant="base" className="m-2 text-center">
          {error.code === "P2002" && error.meta?.target?.includes("email") ? EMAIL_USED : ERROR}
        </Typography>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:max-w-xl xl:max-w-3xl">
          <InputField control={form.control} name="name" label="Name *" type="text" />
          <InputField control={form.control} name="email" label="Email *" type="email" />
          <InputField control={form.control} name="password" label="Password *" type="password" />
          <CheckboxField control={form.control} name="terms" id="terms" label={<Terms />} />
          <ButtonWithLoader isLoading={isLoading} type="submit" label="SIGN UP" />
        </form>
      </Form>
    </>
  )
}
