
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				success: {
					DEFAULT: '#10b981',
					foreground: '#ffffff',
				},
				warning: {
					DEFAULT: '#f59e0b',
					foreground: '#ffffff',
				},
				info: {
					DEFAULT: '#3b82f6',
					foreground: '#ffffff',
				},
				purple: {
					light: '#d6bcfa',
					DEFAULT: '#9b87f5',
					dark: '#7e69ab',
				},
				teal: {
					light: '#5eead4',
					DEFAULT: '#14b8a6',
					dark: '#0d9488',
				},
				blue: {
					light: '#93c5fd',
					DEFAULT: '#3b82f6',
					dark: '#1e40af',
					'dark-gradient': '#0c3483',
					'light-gradient': '#0ea5e9',
				},
				soft: {
					green: '#f2fce2',
					yellow: '#fef7cd',
					orange: '#fec6a1',
					blue: '#d3e4fd',
					purple: '#e5deff',
					pink: '#ffdee2',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' }
				},
				'slide-up': {
					from: { transform: 'translateY(10px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					from: { transform: 'translateY(-10px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-in': {
					from: { transform: 'scale(0.95)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				},
				'bounce-light': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(155, 135, 245, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(155, 135, 245, 0.8)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'slide-down': 'slide-down 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'bounce-light': 'bounce-light 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite'
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-dark-blue': 'linear-gradient(to right, #0c3483, #0a406c, #0677a1, #0ea5e9)',
				'gradient-professional': 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 30%, #3b82f6 100%)',
				'gradient-purple-blue': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #0ea5e9 100%)',
				'gradient-card': 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(240,240,250,0.5) 100%)',
				'gradient-button': 'linear-gradient(to right, #0c3483, #0ea5e9)',
				'bingo-grid': 'radial-gradient(circle at center, #f0f9ff 0%, #e6f0f9 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
