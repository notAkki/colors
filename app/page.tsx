import Tailwind from "@/components/Tailwind";
import Image from "next/image";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Home() {
    return (
        <main className="min-h-screen px-10 py-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-4 items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="w-16 h-16"
                    />
                    <div className="font-bold text-5xl">Colors</div>
                </div>
                <Alert className="text-pretty min-w-64 max-w-fit ml-4 ">
                    <AlertDescription>
                        Hover over colors and click to copy desired color format
                    </AlertDescription>
                </Alert>
            </div>
            <Tailwind />
        </main>
    );
}
