import Tailwind from "@/components/Tailwind";
import Image from "next/image";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ThemeToggle from "@/components/ThemeToggle";
import { Switch } from "@/components/ui/switch";

export default function Home() {
    return (
        <main className="min-h-screen px-10 py-8 w-full">
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-4 items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="w-16 h-16 hover:animate-spin"
                    />
                    <div className="font-bold text-5xl">Colors</div>
                </div>
                <div className="sm:hidden align-self-end">
                    <ThemeToggle />
                </div>
                <div className="hidden sm:flex gap-4 items-center">
                    <ThemeToggle />
                    <Alert className="hidden sm:block mt-6 sm:mt-0 text-pretty w-fit mx-auto sm:mx-0 sm:w-64 sm:ml-4 ">
                        <AlertDescription>
                            Hover over colors and click to copy desired color
                            format
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
            <Tailwind />
        </main>
    );
}
