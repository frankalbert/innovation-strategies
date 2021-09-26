const Api = {
    get: (urlApi) => fetch(urlApi)
        .then((resp) => resp.json())
        .then((users) => {
            return users;
        }),
}

export default Api;