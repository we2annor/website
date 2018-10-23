export const showShadow = () => {
    return {
        type: 'SHOW_SHADOW'
    }
}

export const hideShadow = () => {
    return {
        type: 'HIDE_SHADOW'
    }
}

export const change = (location) => {
    return {
        type: 'CHANGE',
        payload: location
    }
}

export const request = (path) => {
    return {
        type: 'REQUEST',
        payload: path
    }
}
