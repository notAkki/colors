import Tailwind from "@/components/Tailwind";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
    return (
        <main className="min-h-screen p-10">
            <div className="flex gap-8 items-center">
                <div className="font-bold text-3xl">Tailwind Colors</div>
                <Alert className="text-pretty w-72">
                    <AlertDescription>
                        Hover over colors and click to copy desired color format
                    </AlertDescription>
                </Alert>
            </div>
            <Tailwind />
        </main>
    );
}
