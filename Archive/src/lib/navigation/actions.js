export const showNavigation = () => {
    return {
        type: 'SHOW_NAVIGATION'
    }
}

export const hideNavigation = () => {
    return {
        type: 'HIDE_NAVIGATION'
    }
}

export const toggleNavigation = () => {
    return {
        type: 'TOGGLE_NAVIGATION'
    }
}

export const sayName = (name) => {
    return {
        type: 'SAY_NAME',
        payload: name
    }
}
