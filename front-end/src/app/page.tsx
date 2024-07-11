import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <h1>Power Gym</h1>
                <Image src="weights-main.svg" alt="Weights" width="100" height="100" />
            </header>
            <main>
                <form action="">
                    <label htmlFor="">
                        email
                        <input type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        senha
                        <input type="password" name="" id="" />
                    </label>
                    <button type="submit">
                        Entrar
                    </button>
                    <button type="button">
                        <Link href="/register">Cadastrar</Link>
                    </button>
                </form>
            </main>
        </>
    )
}