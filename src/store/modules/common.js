const common = {
    state: {
        isCollapse: false,
        stompClient: null,
        loginImg: '',
        logoImg: '',
        currentTheme: ''// white-theme
    },
    mutations: {
        toggleCollapse: (state, visible) => {
            state.isCollapse = visible
        },
        switchTheme: (state, theme) => {
            state.currentTheme = theme
        },
        setStompClient: (state, stompClient) => {
            state.stompClient = stompClient
        },
        setloginImg: (state, loginImg) => {
            state.loginImg = loginImg
        },
        setlogoImg: (state, logoImg) => {
            state.logoImg = logoImg
        }
    },
    actions: {

    }
}

export default common
