export const setAuth = {
    type: 'SET_AUTH',
    payload: {isAuthorize: true},
}

export const superUserAction = {
    type: 'SET_SUPERUSER',
    payload: {isAuthorize: true, isSuperUser: true},
}

export const logOutAction = {
    type: 'LOG_OUT',
    payload: {isAuthorize: false, isSuperUser: false},
}