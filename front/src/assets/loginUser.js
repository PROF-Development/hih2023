import axios from 'axios';

import getHost from './getHost';

const loginUser = async(form) => {
    var host = getHost()
    return await axios.post({
        url: host+'/auth/login',
        data: form,
    }).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        return response.data.role
    }).catch(error => {
        return null
    })
}

export default loginUser;