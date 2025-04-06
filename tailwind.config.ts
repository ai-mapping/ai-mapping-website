const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF', // Core electric blue
        'primary-light': '#33CCFF', // Hover state for primary buttons
        'primary-dark': '#0080BF', // Used in gradients and shadows for depth
        secondary: '#8A2BE2', // Soft violet accent
        'secondary-light': '#B76EFF', // Hover/focus or decorative accents
        accent: '#38FFB7', // Fluorescent mint green for interactive elements
        'accent-2': '#FFD700', // Gold for recognition, badges, or status highlights
        background: '#0C0C0C', // Main site background, ultra-dark gray
        surface: '#1A1A1A', // Containers, cards, and modal backgrounds
        white: '#FFFFFF',
        black: '#000000', 
        success: '#3FB950', // Success state
        warning: '#F7C948', // Warning state
        error: '#EF4444', // Error state
        info: '#00BFFF', // Info state
        neutral: '#CCCCCC', // For secondary text
        'neutral-dark': '#666666', // Borders, UI outlines
        'neutral-light': '#2A2A2A', // Light surface variant
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      borderRadius: {
        DEFAULT: '0.375rem', // 6px
        md: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.15)',
        md: '0 4px 12px rgba(0,0,0,0.2)',
        lg: '0 10px 20px rgba(0,191,255,0.3)', // glow effect
      },
      spacing: {
        // Base spacing scale
        0: '0rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
      },
    },
  },
  plugins: [
    // @ts-ignore - ignore TypeScript errors in the plugin function
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.shadow-glow': {
          boxShadow: '0 0 20px rgba(0, 191, 255, 0.4)'
        },
        '.shadow-glow-secondary': {
          boxShadow: '0 0 20px rgba(138, 43, 226, 0.4)'
        },
        '.shadow-glow-accent': {
          boxShadow: '0 0 20px rgba(56, 255, 183, 0.4)'
        }
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;