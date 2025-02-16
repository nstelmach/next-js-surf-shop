"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import Link from "next/link"
import { ChangePassword } from "@/src/lib/validations"
import { useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import changePassword from "@/src/app/(auth)/mutations/change-password"
import PersonalInformation from "@/src/app/(auth)/components/change-password/personal-information"
import InputField from "@/src/components/fields/input-field"
import Typography from "@/src/components/typography/typography"

export default function ChangePasswordForm() {
  const [changePasswordMutation, { isLoading, isSuccess, isError, error }] =
    useMutation(changePassword)

  const ERROR = error?.message

  const form = useForm<z.infer<typeof ChangePassword>>({
    resolver: zodResolver(ChangePassword),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      terms: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof ChangePassword>) => {
    try {
      await changePasswordMutation(values)
    } catch (error: any) {
      if (error.name === "ChangePasswordError") {
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
      {isSuccess ? (
        <div className="flex flex-col">
          <Typography as="p" variant="base" className="m-2 text-center">
            Your password has been successfully changed!
          </Typography>
          <Link className="hover:underline" href="/my-account">
            <Typography as="p" variant="base" className="m-2 text-center">
              Go to the my account
            </Typography>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <PersonalInformation />
          <Typography
            as="h2"
            variant="2xlarge"
            weight="bold"
            className="m-2 text-center self-center"
          >
            CHANGE YOUR PASSWORD
          </Typography>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 md:max-w-lg xl:max-w-3xl"
            >
              <InputField
                control={form.control}
                name="currentPassword"
                label="Current password *"
                type="password"
              />
              <InputField
                control={form.control}
                name="newPassword"
                label="New password *"
                type="password"
              />
              {isError && (
                <Typography as="p" variant="base" className="m-2 text-center">
                  {error.name === "ChangePasswordError" ? ERROR : UNEXPECTED_ERROR}
                </Typography>
              )}
              <ButtonWithLoader type="submit" label="CHANGE" isLoading={isLoading} />
            </form>
          </Form>
        </div>
      )}
    </>
  )
}
