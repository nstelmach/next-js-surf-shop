"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import ButtonWithToast from "@/components/toast/button-with-toast";
import TermsCheckbox from "@/components/terms/terms-checkbox";
import Flex from "@/components/typohgraphy/flex";

export default function CreateAccountForm() {
    const formSchema = z.object({
        firstName: z.string().min(2, {
            message: "First name must be at least 2 characters.",
        }).max(20, {
            message: "First name must be below 20 characters.",
        }),
        lastName: z.string().min(2, {
            message: "Last name must be at least 2 characters.",
        }).max(20, {
            message: "Last name must be below 20 characters.",
        }),
        email: z.string().email(),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }).max(20, {
            message: "Password must be below 20 characters.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:max-w-xl xl:max-w-3xl">
            <FormField
                control={form.control}
                name="firstName"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>First name *</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="lastName"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Last name *</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Password *</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <Flex className="flex-col gap-2">
                <TermsCheckbox/>
                <Link href="/">
                    <ButtonWithToast type="submit" description="Your account has been successfully created!"
                                     label="CREATE ACCOUNT"/>
                </Link>
            </Flex>

        </form>
    </Form>
}