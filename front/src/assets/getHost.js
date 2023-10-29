const getHost = () => {
    var port = 8000
    var host = window.location.host.split(':')[0]
    var http = 'http://'
    return http + host + ':' + port
}

export default getHost;