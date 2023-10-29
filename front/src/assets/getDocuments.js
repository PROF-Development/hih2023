import axios from "axios"

import getHost from './getHost';

const createDocument = async(form) => {
    var host = getHost()
    const message = await axios.get(host+'/api/v1/document/documents', {form, headers : {'Authorization' : localStorage.getItem('token')}}).then(
        response => 'Ok').catch(error => {

            if (error.response.status === 401)
                return 'У вас нет прав для этого действия'
            else if (error.response.status === 422)
                return 'Неккоректные даныне документа'
            else if (error.response.status === 409)
                return 'Документ уже существует'
        })
    return message
}

export default createDocument;