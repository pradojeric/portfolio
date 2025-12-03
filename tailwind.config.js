/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#d4af37',
                'accent-hover': '#f0c750',
                'surface': '#1a1a1a',
                'surface-hover': '#252525',
            },
            fontFamily: {
                'sans': ['Outfit', 'sans-serif'],
                'heading': ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ["black"], // Using a dark theme as base
    },
}
