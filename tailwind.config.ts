import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Acadian palette, measured against WHITE before adoption — respect these limits:
      //   primary  #015291   8.02:1  the ONLY brand blue that passes AA for small text
      //   accent   #0A8CE5   3.56:1  FAILS small text. Large text (24px+), icons, graphics only.
      //   accent.light #2BA2E9 2.82:1 decorative fills only, never text on white.
      //   ink      #02263E  15.56:1
      //   ok       #1F7A4D   5.32:1  semantic status only (water report "no treatment needed"),
      //                              NOT a brand colour — never use it as decoration.
      // Buttons and links take `primary` or `ink`. Never set body copy in `accent`.
      colors: {
        // Acadian Navy — headings, footer, dark sections
        ink: {
          DEFAULT: '#02263E',
          soft: '#0B3A5E',
        },
        // Drop Deep — buttons, links, body-size brand text
        primary: {
          DEFAULT: '#015291',
          light: '#0A8CE5',
          dark: '#013C6C',
        },
        // Acadian Blue — large headings, icons, graphic fills
        accent: {
          DEFAULT: '#0A8CE5',
          light: '#2BA2E9',
          dark: '#0671BC',
        },
        // Status green. Semantic only — it is deliberately outside the brand palette.
        ok: {
          DEFAULT: '#1F7A4D',
        },
        // Off-white for alternating sections
        mist: '#F1F6FA',
      },
      // "Inside the System" direction: Barlow Semi Condensed for headings (condensed
      // enough to hold a 64px H1 without wrapping), Source Sans 3 for body.
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1248px',
      },
      backgroundImage: {
        // The new identity is FLAT — the old violet→cyan gradient is gone.
        // `splash` is kept as a token name because 36 call sites reference it;
        // it now resolves to a solid brand blue. Deleting the key would make
        // Tailwind silently drop the class and leave white text on transparent.
        splash: 'linear-gradient(90deg, #015291 0%, #015291 100%)',
        // Three-stripe rule echoing the stream mark. Use as a thin divider only.
        ribbon:
          'linear-gradient(90deg, #2BA2E9 0%, #2BA2E9 33%, #0A8CE5 33%, #0A8CE5 66%, #015291 66%, #015291 100%)',
      },
    },
  },
  plugins: [],
}

export default config
