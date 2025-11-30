/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#003366', // Dark Navy Blue
                    light: '#0056b3',   // Lighter Blue
                },
                secondary: {
                    DEFAULT: '#f8f9fa', // Light Gray/White
                    dark: '#e9ecef',
                },
                accent: '#28a745',    // Green
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
