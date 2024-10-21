import type { Config } from "tailwindcss";

const colorList = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
];
const colorSafeList: any[] = [];

for (const colorName of colorList) {
    const shades = [
        50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700,
        750, 800, 850, 900, 950,
    ];

    shades.map((shade) => {
        // colorSafeList.push(`text-${colorName}-${shade}`);
        colorSafeList.push(`bg-${colorName}-${shade}`);
    });
}

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {},
    safelist: colorSafeList,
    plugins: [],
};
export default config;
