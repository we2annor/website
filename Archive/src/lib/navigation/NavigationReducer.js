const initialState = {
    visible : false,
    hidden: true,
    pages : [
                {'id':'home','title':'Home','path':'/'},
                {'id':'story','title':'My Story','path':'/stories'},
                {'id':'experience','title':'My Experience','path':'/experience'},
                {'id':'project','title':'My Projects','path':'/projects'}
    ]
}

const NavigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NAVIGATION':
            state = {
                ...state,
                visible : true,
                hidden : false
            }
            break;
        case 'HIDE_NAVIGATION':
            state = {
                ...state,
                visible : false,
                hidden : true
            }
            break;
        case 'TOGGLE_NAVIGATION':
            state = {
                ...state,
                visible : !state.visible,
                hidden : !state.hidden
            }
            break;
        default:
    }
    return state
}

export default NavigationReducer
