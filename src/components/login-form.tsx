"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres",
  }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const { email, password } = values;

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Seu e-mail:</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="exemplo@email.com"
                  className="text-neutral-900"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormLabel>Sua senha:</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  className="text-neutral-900"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            variant="default"
            className="hover:bg-orange-600  w-full text-lg uppercase font-bold"
          >
            Entrar
          </Button>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1.5px] bg-white w-full"></div>
            <span>OR</span>
            <div className="h-[1.5px] bg-white w-full"></div>
          </div>
          <Button
            type="button"
            variant="secondary"
            className="hover:bg-orange-800 bg-transparent border-2 border-orange-600 text-white font-bold text-lg uppercase"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
