const initialState = {
    visible: false,
    active: false,
    pages: [
        {label: 'Home', path: '/', background: 'blue'},
        {label: 'My Story', path: '/story', background: '1982', year: '1982'},
        {label: 'My Story', path: '/story/1982', background: '1982', year: '1982'},
        {label: 'My Story', path: '/story/1986', background: '1986', year: '1986'},
        {label: 'My Story', path: '/story/1992', background: '1992', year: '1992'},
        {label: 'Experience', path: '/experience', background: 'index'},
        {label: 'Projects', path: '/projects', background: 'project'}
    ],
    shadow : false,
    location: {},
    page: {},
    history: ''
}

const app = (state= initialState, action) => {
    switch (action.type) {
        case 'SHOW_SHADOW':
            state = {
                ...state,
                shadow : true
            }
            break;
        case 'HIDE_SHADOW':
            state = {
                ...state,
                shadow : false
            }
        case 'CHANGE':
            state = {
                ...state,
                page: action.payload
            }
            break;
        case 'REQUEST':
            state = {
                ...state,
                history: action.payload
            }
        default:
    }
    return state;
}

export default app
