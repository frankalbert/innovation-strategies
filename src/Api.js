const Api = {
  get: (urlApi) =>
    fetch(urlApi)
      .then((resp) => resp.json())
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        throw error;
      }),
};

export default Api;
