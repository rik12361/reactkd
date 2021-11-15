export const Plus = () => {
    return {
        type: "PLUS"
    }
}

export const Min = () => {
    return {
        type: "MIN"
    }
}

export const InitArray = () => {
    return {
        type: "INIT_ARRAY"
    }
}

export const UpdArray = () => {
    return {
        type: "UPD_ARRAY"
    }
}

export const UpdText = () => {
    return {
        type: "SET_TEXT",
        payload: "Nieuwe text"
    }
}

export const Toggle = () => {
    return {
        type: "TOGGLE",
    }
}
