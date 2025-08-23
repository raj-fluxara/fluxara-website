import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  safelist: [
    // Prevent purging of dynamically generated classes
    { pattern: /(bg|text|border)-brand-green-(50|100|200|300|400|500|600|700)/ },
    { pattern: /(bg|text|border)-(tech-blue|electric-purple|success-green|warning-amber)/ },
  ],
  theme: {
    // Enhanced responsive breakpoints for better device coverage
    screens: {
      'xs': '375px',    // Small phones (iPhone SE)
      'sm': '640px',    // Large phones
      'md': '768px',    // Tablets
      'lg': '1024px',   // Small laptops
      'xl': '1280px',   // Large laptops
      '2xl': '1536px',  // Desktop
      '3xl': '1920px',  // Large desktop
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'xs': '1rem',
        'sm': '1.5rem',
        'md': '2rem',
        'lg': '2rem',
        'xl': '2rem',
        '2xl': '2rem',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px', // Max container width
      },
    },
    extend: {
      colors: {
        // Keep all your existing colors exactly as they were
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: { 
          DEFAULT: "hsl(var(--primary))", 
          foreground: "hsl(var(--primary-foreground))" 
        },
        secondary: { 
          DEFAULT: "hsl(var(--secondary))", 
          foreground: "hsl(var(--secondary-foreground))" 
        },
        destructive: { 
          DEFAULT: "hsl(var(--destructive))", 
          foreground: "hsl(var(--destructive-foreground))" 
        },
        muted: { 
          DEFAULT: "hsl(var(--muted))", 
          foreground: "hsl(var(--muted-foreground))" 
        },
        accent: { 
          DEFAULT: "hsl(var(--accent))", 
          foreground: "hsl(var(--accent-foreground))" 
        },
        popover: { 
          DEFAULT: "hsl(var(--popover))", 
          foreground: "hsl(var(--popover-foreground))" 
        },
        card: { 
          DEFAULT: "hsl(var(--card))", 
          foreground: "hsl(var(--card-foreground))" 
        },

        // Your existing enterprise palette
        "electric-purple": "hsl(var(--electric-purple))",
        "warning-amber": "hsl(var(--warning-amber))",
        "tech-blue": "hsl(var(--tech-blue))",
        "light-green": "hsl(var(--green-500))",
        "green-accent": "hsl(var(--green-600))",
        "success-green": "hsl(var(--green-500))",

        // Your existing brand green scale
        "brand-green": {
          50:  "hsl(var(--green-50))",
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          300: "hsl(var(--green-300))",
          400: "hsl(var(--green-400))",
          500: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))",
          700: "hsl(var(--green-700))",
        },

        // Your existing brand ink color
        brand: { ink: "#33475b" },

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Enhanced spacing for better mobile experience
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '100': '25rem',   // 400px
        '112': '28rem',   // 448px
        '128': '32rem',   // 512px
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Keep your existing animations but add performance improvements
      keyframes: {
        "accordion-down": { 
          from: { height: "0" }, 
          to: { height: "var(--radix-accordion-content-height)" } 
        },
        "accordion-up": { 
          from: { height: "var(--radix-accordion-content-height)" }, 
          to: { height: "0" } 
        },
        // Enhanced float animation with better performance
        "float": {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-10px)',
          },
        },
        "pulse-glow": {
          '0%': { 
            boxShadow: '0 0 20px hsl(var(--green-400) / 0.28)' 
          },
          '100%': { 
            boxShadow: '0 0 40px hsl(var(--green-400) / 0.56)' 
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
      },

      // Keep your existing background images
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
      },

      // Enhanced shadows for better cross-platform consistency
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },

      // Keep your existing font configuration but add better fallbacks
      fontFamily: {
        sans: [
          '"Lexend Deca"', 
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'ui-sans-serif', 
          'system-ui', 
          'sans-serif'
        ],
        heading: [
          '"Lexend Deca"', 
          '-apple-system',
          'BlinkMacSystemFont',
          'ui-sans-serif', 
          'system-ui', 
          'sans-serif'
        ],
      },

      // Enhanced responsive typography
      fontSize: {
        // Keep existing sizes but add responsive variants
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.65' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        
        // Your existing responsive display sizes (enhanced)
        'display-2': ['clamp(2.5rem, 2rem + 2.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-1': ['clamp(2rem, 1.6rem + 2vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        
        // Your existing heading sizes (enhanced)
        'h1': ['clamp(1.75rem, 1.5rem + 1.25vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.5rem, 1.35rem + 0.75vw, 1.75rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.2' }],
        
        // Your existing body text (enhanced)
        'body': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.65' }],
        'small': ['clamp(0.875rem, 0.85rem + 0.125vw, 0.9rem)', { lineHeight: '1.6' }],
        'micro': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },

      // Enhanced transitions for better performance
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [
    // Add custom utilities for cross-platform consistency
    function({ addUtilities }) {
      const newUtilities = {
        // Safe area utilities for devices with notches
        '.safe-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        
        // Text balance utility for better typography
        '.text-balance': {
          textWrap: 'balance',
        },
        
        // Performance utilities
        '.will-change-transform': {
          willChange: 'transform',
        },
        '.will-change-opacity': {
          willChange: 'opacity',
        },
        
        // Touch-friendly sizes
        '.touch-target': {
          minHeight: '44px',
          minWidth: '44px',
        },

        // Custom viewport height for mobile
        '.min-h-screen-mobile': {
          minHeight: '100vh',
          minHeight: 'calc(var(--vh, 1vh) * 100)',
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;