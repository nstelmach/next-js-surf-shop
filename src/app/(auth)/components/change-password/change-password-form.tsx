"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import Link from "next/link"
import Flex from "@/src/components/typohgraphy/flex"
import { ChangePassword } from "@/src/app/(auth)/validations"
import { useMutation } from "@blitzjs/rpc"
import changePassword from "@/src/app/(auth)/mutations/changePassword"
import { FORM_ERROR, UNEXPECTED_ERROR } from "@/src/lib/constants"
import Paragraph from "@/src/components/typohgraphy/paragraph"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"
import { Checkbox } from "@/src/components/ui/checkbox"
import { useCurrentUser } from "@/src/app/users/hooks/useCurrentUser"

export default function ChangePasswordForm() {
  const [changePasswordMutation, { isLoading, isSuccess, isError, error }] =
    useMutation(changePassword)
  const user = useCurrentUser()

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
        <Flex className="flex-col">
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Your password has been successfully changed!
          </Paragraph>
          <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
            Go to the{" "}
            <Link className="hover:underline" href="/my-account">
              my account
            </Link>
          </Paragraph>
        </Flex>
      ) : (
        <Flex className="flex-col gap-4">
          <Flex>
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center ">
              Name:
            </Paragraph>
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center grow-2">
              {user?.name}
            </Paragraph>
          </Flex>
          <Flex className="justify-around">
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
              E-mail:
            </Paragraph>
            <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center grow-2">
              {user?.email}
            </Paragraph>
          </Flex>
          <Paragraph className="m-2 xl:text-xl text-2xl md:text-3xl text-center font-bold self-center">
            CHANGE YOUR PASSWORD
          </Paragraph>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 md:max-w-lg xl:max-w-3xl"
            >
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current password *</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <Flex className="flex xl:items-center md:items-baseline justify-center gap-2 m-2">
                      <FormControl>
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>
                        I have read the{" "}
                        <Link href="/privacy-policy" className="hover:underline">
                          privacy policy
                        </Link>{" "}
                        and accept the{" "}
                        <Link href="/terms-and-conditions" className="hover:underline">
                          terms and conditions
                        </Link>
                      </FormLabel>
                    </Flex>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ButtonWithLoader type="submit" label="CHANGE" isLoading={isLoading} />
            </form>
          </Form>
        </Flex>
      )}
    </>
  )
}
