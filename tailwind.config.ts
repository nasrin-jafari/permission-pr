import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#516FE9',
        'dark-bg': '#161B1F',
        'dark-foreground': '#1E2327',
        'dark-primary': '#bb86fc',
        'dark-secondary': '#03dac6',
      },
    },
  },
  plugins: [],
};

export default config;
