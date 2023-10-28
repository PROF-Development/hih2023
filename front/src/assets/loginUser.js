import axios from 'axios';

const loginUser = ({username, password}) => {
    body = {
        username: username,
        password: password,
    }
    axios.post({
        url: 'localhost:8000/auth/login',
        data: body,
    }).then(response => {
        return {
            status: 200,
            message: 'ok',
            role: response.data.role,
        }
    }).catch(response => {
        return {
            status: 400,
            message: 'Неверный логин и/или пароль',
            role: null,
        }
    })
}

export default loginUser;