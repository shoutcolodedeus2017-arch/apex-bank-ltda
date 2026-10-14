// Shared Tailwind (CDN) config — load right after https://cdn.tailwindcss.com
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'], mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'] },
      colors: {
        bank: { 50: '#f0fdf4', 100: '#dcfce7', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', dark: '#0f172a', card: '#1e293b' }
      }
    }
  }
};
