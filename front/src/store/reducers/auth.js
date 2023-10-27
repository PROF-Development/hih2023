import { setAuthAction, superUserAction, logOutAction } from "../actions/auth"

defaultState = {
    isAuthorize: false,
    isSuperUser: false,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SUPERUSER":
            return {...state, superUserAction}
        case "SET_AUTH":
            return {...state, setAuthAction}
        case "LOG_OUT":
            return {...state, logOutAction}
        default:
            return state
    }
}

export default authReducer;