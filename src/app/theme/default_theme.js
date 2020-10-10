const colors = {
    primary: '#181c20',
    primaryLight: '#1e2429',
    secondary: '#1da1f2',
    blackGradient: 'linear-gradient(to bottom, #1e2429, rgba(24, 28, 32, 0.2) 107%);',
    black: '#000000',
    white: '#ffffff',
    defaultWhite: 'rgba(255, 255, 255, 0.6)',
    themeRed: '#ff0000',
    themeBrown: '#a59d84',
    borderWhite: '#a59d84',
}


export const theme = {

    // fonts property
    fonts: {
        family: {
            primary: '\'Source Sans Pro\', sans-serif',
            secondary: '\'Raleway\', serif;'
        },
        size: {
            xxs: '14px',
            xs: '16px',
            sm: '18px',
            md: '20px',
            lg: '22px',
            xl: '24px',
        },
        weight: {
            regular: '400',
            semibold: '600',
            bold: '700',
        },
        color: {
            primary: colors.primary,
            primaryLight: colors.primaryLight,
            white: '#ffffff',
        }
    },

    // Button style property
    button: {
        padding: '5px 10px',
        fontSize: '14px',
        color: colors.white,
        background: colors.secondary,
        hoverBackground: '#0a82cc',
        radius: '50px',
    },

    // Common style property
    common: {
        containerWidth: '1170px'
    }

}