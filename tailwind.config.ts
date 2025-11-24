import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          blue: '#1E3A8A',
          light: '#FEE2E2',
        },
        smoky: {
          white: '#F5F5F0',
          light: '#FAFAF5',
          dark: '#E8E8E3',
        },
        secondary: {
          grey: '#F3F4F6',
          dark: '#6B7280',
        }
      },
    },
  },
  plugins: [],
}
export default config
