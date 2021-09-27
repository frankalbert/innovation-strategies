const Api = {
    get: (urlApi) => fetch(urlApi)
        .then((resp) => resp.json())
        .then((resp) => {
            return resp;
        })
        .catch(error => {
            throw new Error(error);
        })
}

export default Api;