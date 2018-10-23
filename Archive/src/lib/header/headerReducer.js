const initialState = {
    visible : false,
    shadow: {
        visible: false
    }
}

const Header = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_SHADOW':

            break;
        case 'HIDE_SHADOW':
            break;
        default:

    }
    return state;
}

export default Header
