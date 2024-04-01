import LoginForm from "@/components/login-form";
import { rubikDoodleShadow, vastShadow } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full">
      <section className="flex flex-col items-center justify-center bg-zinc-950 flex-grow-[0.1]">
        <div className="flex flex-col items-center justify-center">
          <h1 className={`font-bold text-4xl text-orange-500 drop-shadow-sm ${vastShadow.className}`}>POWER<span className="text-amber-100">GYM</span></h1>
        </div>
        <LoginForm />
      </section>
      <section className="hidden bg-zinc-800 md:flex md:flex-grow">
        World
      </section>
    </main>
  );
}
