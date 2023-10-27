import setAuth from "../actions/setAuth";
import superUserAction from "../actions/setSuperUser";

defaultState = {
    isAuthorize: false,
    isSuperUser: false,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SUPERUSER":
            return {...state, superUserAction}
        case "SET_AUTH":
            return {...state, setAuth}
        default:
            return state
    }
}

export default reducer