"use client"
import { useMutation } from "@blitzjs/rpc"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ResetPassword } from "@/src/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import { Form } from "@/src/components/ui/form"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import resetPassword from "@/src/app/(auth)/mutations/reset-password"
import Link from "next/link"
import InputField from "@/src/components/fields/input-field"
import CheckboxField from "@/src/components/fields/checkbox-field"
import Terms from "@/src/app/(auth)/components/terms"
import Typography from "@/src/components/typography/typography"

export default function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams?.get("token")?.toString()
  const [resetPasswordMutation, { isLoading, isSuccess, isError, error }] =
    useMutation(resetPassword)

  const ERROR = error?.message

  const form = useForm<z.infer<typeof ResetPassword>>({
    resolver: zodResolver(ResetPassword),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
      terms: false,
      token,
    },
  })

  const onSubmit = async (values: z.infer<typeof ResetPassword>) => {
    try {
      await resetPasswordMutation({ ...values, token })
    } catch (error: any) {
      if (error.name === "ResetPasswordError") {
        return {
          [FORM_ERROR]: ERROR,
        }
      } else {
        return {
          [FORM_ERROR]: UNEXPECTED_ERROR,
        }
      }
    }
  }

  return (
    <>
      {isError && (
        <Typography as="p" variant="base" className="m-2 text-center">
          {error.name === "ResetPasswordError" ? ERROR : UNEXPECTED_ERROR}
        </Typography>
      )}
      {isSuccess ? (
        <div className="flex flex-col">
          <Typography as="p" variant="base" className="m-2 text-center">
            Password Reset Successfully
          </Typography>
          <Typography as="p" variant="base" className="m-2 text-center">
            Go to the{" "}
            <Link className="hover:underline" href="/">
              homepage
            </Link>
          </Typography>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 md:max-w-xl xl:max-w-3xl"
          >
            <InputField
              control={form.control}
              name="password"
              label="New Password *"
              type="password"
            />
            <InputField
              control={form.control}
              name="passwordConfirmation"
              label="Confirm New Password *"
              type="password"
            />
            <CheckboxField control={form.control} name="terms" label={<Terms />} />
            <ButtonWithLoader isLoading={isLoading} type="submit" label="RESET" />
          </form>
        </Form>
      )}
    </>
  )
}
