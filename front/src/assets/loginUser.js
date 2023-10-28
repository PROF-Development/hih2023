import axios from 'axios';
const loginUser = (form) => {
    return axios.post({
        url: 'localhost:8000/auth/login',
        data: form,
    }).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        return response.data.role
    }).catch(error => {
        return null
    })
}

export default loginUser;