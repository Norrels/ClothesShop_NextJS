import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    css
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',
            green500: '#00875f',
            green300: '#00b37e'
         }as const, 

        fontSizes: {
            base: '1rem',
            md: '1.125rem', // 18px
            lg: '1.25rem', // 20px
            xl: '1.5rem', // 24px
            '2xl': '2rem' // 32px
        },
    }
})