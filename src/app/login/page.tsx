import LoginForm from "@/components/login-form";
import { vastShadow } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center bg-zinc-900">
      <section className="flex p-20 w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className={`font-bold text-4xl text-orange-500 drop-shadow-sm ${vastShadow.className}`}>POWER<span className="text-amber-100">GYM</span></h1>
        </div>
        <LoginForm />
      </section>
      <section className="hidden md:flex md:items-center md:justify-center">
        <Image src='/login-icon.png' alt="Login Icon" width={1600} height={2400} priority className="w-[2000px]"/>
      </section>
    </main>
  );
}
