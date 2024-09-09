/** @type {import('tailwindcss').Config} */

const colors = {
  white: {
    DEFAULT: "#FFFFF9",
    foreground: "#FFFFFF",
  },
  primary: {
    DEFAULT: "var(--primary)",
    foreground: "#FAF4FF",
  },
  secondary: {
    DEFAULT: "var(--secondary)",
    foreground: "#FFEEFF",
  },
  grey: {
    DEFAULT: "#D9D8D8",
    light: "#F2F2F2",
  },
  black: {
    DEFAULT: "#202020",
  },
  danger: {
    DEFAULT: "#D92637",
    light: "#FBE7E9",
  },
  warning: {
    DEFAULT: "#FFC107",
    light: "#FFF2CC",
  },
  success: {
    DEFAULT: "#28A745",
    light: "#CEF3D6",
  },
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    spacing: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
    },
    fontFamily: {
      sans: ["var(--font-verdana-pro)"],
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2080px",
      },
      boxShadow: {
        custom: "0 4px 16px rgba(32, 32, 32, 0.08)",
      },
      backgroundColor: {
        ...colors,
      },
      colors: {
        ...colors,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
