const getHost = () => {
    var port = 8000
    var host = window.location.host.split(':')[0]
    return host + ':' + port
}

export default getHost;