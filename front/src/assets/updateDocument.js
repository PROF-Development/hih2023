import axios from "axios"
const createDocument = async(form) => {
    var host = getHost()
    const message = await axios.patch(host+'/api/v1/document/document', form, {headers : {'Authorization' : localStorage.getItem('token')}}).then(
        response => 'Ok').catch(error => {
            if (error.response.status === 401)
                return 'У вас нет прав для этого действия'
            else if (error.response.status === 422)
                return 'Неккоректные даныне документа'
            else if (error.response.status === 404)
                return 'Документ не найден'
        })
    return message
}

export default createDocument;