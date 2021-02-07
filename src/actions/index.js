export const isToggled = () => {
    return {
        type: "TOGGLE"
    }
}

export const incrementCart = () => {
    return {
        type: "INCREMENTCART"
    }
}

export const decremenCart = () => {
    return {
        type: "DECREMENTCART"
    }
}

export const setCsrfToken = () => {
    return {
        type: "CSRFTOKEN"
    }
}

export const setProgressBar = (isOpen) => (
    {
        type: 'STEPROGRESSBAR',
        isOpen: isOpen
    }
);
