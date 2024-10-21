"use client";

import { tailwindData } from "@/lib/tailwindData";
import { toast } from "sonner";

const Tailwind = () => {
    return (
        <div className="flex flex-col gap-4 mt-4">
            {tailwindData.map((item) => (
                <>
                    <div className="w-full border border-zinc-500/0 grid grid-cols-11 gap-x-2">
                        {item.colors.map((color) => {
                            return (
                                <div>
                                    <div className="group relative">
                                        <div
                                            className={`bg-${item.name}-${color.scale} h-32 rounded-md group-hover:scale-[1.07] transition-transform duration-100`}
                                        ></div>
                                        <div
                                            className={`opacity-0 flex flex-col w-full h-full absolute top-0 left-0 rounded-md scale-105 p-2 text-xs text-center justify-center
                                            ${
                                                color.scale < 600
                                                    ? "text-black divide-black/30"
                                                    : "text-white divide-white/30"
                                            } group-hover:opacity-100 transition duration-200`}
                                        >
                                            <button
                                                className={`py-1.5 rounded-md transition ease-in-out duration-100 w-[102%] -translate-x-[1%] ${
                                                    color.scale < 600
                                                        ? "hover:bg-zinc-900/15"
                                                        : "hover:bg-zinc-300/15"
                                                }`}
                                                onClick={async () => {
                                                    await navigator.clipboard.writeText(
                                                        item.name +
                                                            "-" +
                                                            color.scale
                                                    );
                                                    toast.success(
                                                        "Copied " +
                                                            item.name +
                                                            "-" +
                                                            color.scale
                                                    );
                                                }}
                                            >
                                                className
                                            </button>
                                            <button
                                                className={`py-1.5 rounded-md transition ease-in-out duration-100 w-[102%] -translate-x-[1%] ${
                                                    color.scale < 600
                                                        ? "hover:bg-zinc-900/15"
                                                        : "hover:bg-zinc-300/15"
                                                }`}
                                                onClick={async () => {
                                                    await navigator.clipboard.writeText(
                                                        color.hex
                                                    );
                                                    toast.success(
                                                        "Copied " + color.hex
                                                    );
                                                }}
                                            >
                                                hex
                                            </button>
                                            <button
                                                className={`py-1.5 rounded-md transition ease-in-out duration-100 w-[102%] -translate-x-[1%] ${
                                                    color.scale < 600
                                                        ? "hover:bg-zinc-900/15"
                                                        : "hover:bg-zinc-300/15"
                                                }`}
                                                onClick={async () => {
                                                    await navigator.clipboard.writeText(
                                                        color.rgb
                                                    );
                                                    toast.success(
                                                        "Copied " + color.rgb
                                                    );
                                                }}
                                            >
                                                rgb
                                            </button>
                                            <button
                                                className={`py-1.5 rounded-md transition ease-in-out duration-100 w-[102%] -translate-x-[1%] ${
                                                    color.scale < 600
                                                        ? "hover:bg-zinc-900/15"
                                                        : "hover:bg-zinc-300/15"
                                                }`}
                                                onClick={async () => {
                                                    await navigator.clipboard.writeText(
                                                        color.hsl
                                                    );
                                                    toast.success(
                                                        "Copied " + color.hsl
                                                    );
                                                }}
                                            >
                                                hsl
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center text-[13px] pt-1.5 text-zinc-300">
                                        {item.name}-{color.scale}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Tailwind;
