const defaultState = {
    isAuthorize: true,
    isSuperUser: true,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SUPERUSER":
            return {...state, isAuthorize: true, isSuperUser: true}
        case "SET_AUTH":
            return {...state, isAuthorize: true}
        case "LOG_OUT":
            return {...state, isAuthorize: false, isSuperUser: false}
        default:
            return state
    }
}

export default authReducer;