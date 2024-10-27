"use client";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        setIsDark(!isDark);
    };

    return (
        <Switch
            checked={isDark}
            onClick={toggleTheme}
            className="bg-zinc-800 dark:bg-zinc-200"
        />
    );
}
