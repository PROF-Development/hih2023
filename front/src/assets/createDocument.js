import axios from "axios"
const createDocument = async(form) => {
    var host = getHost()
    const message = await axios.post(host+'/api/v1/document/document', form, {headers : {'Authorization' : localStorage.getItem('token')}}).then(
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