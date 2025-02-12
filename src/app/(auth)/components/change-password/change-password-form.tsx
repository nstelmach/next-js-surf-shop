"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/src/components/ui/form"
import Link from "next/link"
import { ChangePassword } from "@/src/lib/validations"
import { useMutation } from "@blitzjs/rpc"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Paragraph from "@/src/components/typography/paragraph"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import changePassword from "@/src/app/(auth)/mutations/change-password"
import PersonalInformation from "@/src/app/(auth)/components/change-password/personal-information"
import InputField from "@/src/components/fields/input-field"
import CheckboxField from "@/src/components/fields/checkbox-field"

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
      {isError && (
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {error.name === "ChangePasswordError" ? ERROR : UNEXPECTED_ERROR}
        </Paragraph>
      )}
      {isSuccess ? (
        <div className="flex flex-col">
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Your password has been successfully changed!
          </Paragraph>
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Go to the{" "}
            <Link className="hover:underline" href="/my-account">
              my account
            </Link>
          </Paragraph>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <PersonalInformation />
          <Paragraph className="m-2 xl:text-xl text-2xl md:text-3xl text-center font-bold self-center">
            CHANGE YOUR PASSWORD
          </Paragraph>
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
              <CheckboxField control={form.control} name="terms" />
              <ButtonWithLoader type="submit" label="CHANGE" isLoading={isLoading} />
            </form>
          </Form>
        </div>
      )}
    </>
  )
}
