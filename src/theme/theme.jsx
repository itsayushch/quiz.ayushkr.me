const theme = {
    light: {
        color: 'black',
        backgroundColor: "#f3f9fb",
        div: {
            bg: 'linear-gradient(#6ee7b7, #d8b4fe)',
            color: '#474f85',
            color2: '',
            svg: '#d8b4fe',
            button: '#0f3460'
        },
        nav: {
            bg: '#6ee7b7',
            variant: 'light'
        },
        list: ['#6ee7b7', '#d8b4fe']
    },
    dark: {
        color: "#ffffff",
        backgroundColor: "#1a1a2e",
        div: {
            bg: 'linear-gradient(#0f3460, #474f85)',
            color: '#e94560',
            color2: '#f66981f1',
            svg: '#474f85',
            button: '#6ee7b7'
        },
        nav: {
            bg: '#0f3460',
            variant: 'dark'
        },
        list: ['#0f3460', '#263859']
    }
}

module.exports = {
    getStyles: mode => ({
        backgroundColor: theme[mode].backgroundColor,
        color: theme[mode].color,
        div: theme[mode].div,
        nav: theme[mode].nav,
        list: theme[mode].list
    })
};