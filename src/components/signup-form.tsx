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
import { useRouter } from "next/navigation";

const signupFormSchema: any = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter no mínimo 3 caracteres",
  }),
  email: z.string().email({
    message: 'O e-mail deve ser um endereço de e-mail válido'
  }),
  password: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres",
  }),
  confirmPassword: z.string().min(8).refine((value) => value === signupFormSchema.password, {
    message: "As senhas devem ser iguais",
  })
});

export default function SignupForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-6">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Seu nome:</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="seu nome"
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Confirme sua senha:</FormLabel>
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
            Cadastrar
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
            onClick={() => router.push("/login")}
          >
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
