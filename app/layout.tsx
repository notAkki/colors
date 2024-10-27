import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Colors",
    description: "Tailwind colors made convenient",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.className} overscroll-none
                dark:bg-zinc-950 dark:sm:bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-900 w-full  dark:text-zinc-200
                bg-white text-zinc-800
                `}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
