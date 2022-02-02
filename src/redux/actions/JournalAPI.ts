import axios from 'axios';

export const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
}

export default (
  SERVICE,
  METHOD,
  ENDPOINT,
  inputData = null,
  fullSource = null,
  jsonify = true,
) => {

  // eslint-disable-next-line no-undef
  const apiURL = process.env.REACT_APP_JOURNAL_API_URL;

  const data = jsonify ? JSON.stringify({ ...inputData }) : { ...inputData };
  const URL = fullSource
    ? fullSource
    : `${apiURL}/${SERVICE}/${ENDPOINT}`;
  const sessionToken = localStorage.getItem('sToken');
  const jsonHeader = {
    'Content-type': 'application/json',
  };
  const headers = { Authorization: sessionToken, ...jsonHeader };
  const config = {
    headers,
  };

    switch(METHOD) {
      case methods.GET:
        return new Promise((resolve, reject) => {
          axios
            .get(URL, config)
            .then((response) => {
              return resolve(response);
            })
            .catch(async (error) => {
              reject(error.response || error);
            });
        })
      case methods.POST:
          return new Promise((resolve, reject) => {
            axios
              .post(URL, data, config)
              .then((response) => {
                return resolve(response);
              })
              .catch(async (error) => {
                reject(error.response || error);
              });
          })
      case methods.PATCH:
        return new Promise((resolve, reject) => {
          axios
            .patch(URL, data, config)
            .then((response) => {
              return resolve(response);
            })
            .catch(async (error) => {
              reject(error.response || error);
            });
        })
      case methods.DELETE:
        return new Promise((resolve, reject) => {
          const request: any = {
            method: methods.DELETE,
            url: URL,
            data,
            headers,
          };
          axios(request).then((response) => {
            return resolve(response);
          })
          .catch(async (error) => {
            reject(error.response || error);
          });
        })
      default:
        return new Promise((resolve, reject) => {
          axios
            .get(URL, config)
            .then((response) => {
              return resolve(response);
            })
            .catch(async (error) => {
              reject(error.response || error);
            });
        })
  }
};
