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
        <html lang="en">
            <body
                className={`${inter.className} bg-gradient-to-r from-zinc-950 to-zinc-900 text-white`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
