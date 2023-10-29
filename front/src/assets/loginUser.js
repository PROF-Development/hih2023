import axios from 'axios';

import getHost from './getHost';

const loginUser = async({username, password}) => {
    const body = {
        login: username,
        password: password,
    }
    var host = getHost()
    const role = await axios.post(host+'/api/v1/auth/login', body).then(
        response => {
            localStorage.setItem('token', response.data.token)
            response.data.role
        }).catch(() => null)
    return role
}

export default loginUser;