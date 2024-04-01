import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PowerGym",
  description: "Transforme sua academia com o PowerGym: o aplicativo web que simplifica o gerenciamento enquanto transmite energia e força. Acelere seu sucesso agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body className={`${inter.className} text-stone-50 h-screen`}>{children}</body>
    </html>
  );
}
