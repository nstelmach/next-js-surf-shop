"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { useMutation } from "@blitzjs/rpc"
import signup from "@/src/app/(auth)/mutations/signup"
import { useRouter } from "next/navigation"
import { Signup } from "@/src/lib/validations"
import { EMAIL_USED, FORM_ERROR } from "@/src/lib/constants"
import { Checkbox } from "@/src/components/ui/checkbox"
import Flex from "@/src/components/typography/flex"
import Paragraph from "@/src/components/typography/paragraph"
import ButtonWithLoader from "@/src/components/button-with-loader/button-with-loader"

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
        <Paragraph className="m-2 xl:text-base text-xl md:text-2xl text-center">
          {error.code === "P2002" && error.meta?.target?.includes("email") ? EMAIL_USED : ERROR}
        </Paragraph>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:max-w-xl xl:max-w-3xl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password *</FormLabel>
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
                    <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
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
          <ButtonWithLoader isLoading={isLoading} type="submit" label="SIGN UP" />
        </form>
      </Form>
    </>
  )
}
