import axios from "axios";
import getHost from "./getHost";
const registerUser = async(form) => {
    var host = getHost()
    const message = await axios.post(host+'/api/v1/manager/user', form, {headers : {'Authorization' : localStorage.getItem('token')}}).then(
        response => 'Ok').catch(error => {
            if (error.response.status === 409)
                return 'Пользователь уже существует'
            else if (error.response.status === 401)
                return 'У вас нет прав для этого действия'
        })
    return message
}

export default registerUser;