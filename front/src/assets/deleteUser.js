import axios from "axios";
import getHost from "./getHost";
const deleteUser = async(login) => {
    body = {
        login: login,
    }
    var host = getHost()
    const message = await axios.delete(host+'/api/v1/manager/user', body, {headers : {'Authorization' : localStorage.getItem('token')}}).then(
        response => 'Ok').catch(error => {
            if (error.response.status === 404)
                return 'Пользователь не существует'
            else if (error.response.status === 401)
                return 'У вас нет прав для этого действия'
        })
    return message
}

export default deleteUser;