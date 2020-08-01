import Axios from 'axios';

class HttpClient {
    baseUrl = 'http://69db1867ccc8.ngrok.io';

    constructor () {
        Axios.interceptors.response.use(async (config) => {
            return config.data;
        });
    }

    get (url, configs) {
        return Axios.get(`${this.baseUrl}/${url}`, configs);
    }

    post (url, data, configs) {
        return Axios.post(`${this.baseUrl}/${url}`, data, configs);
    }

    put (url, data, configs) {
        return Axios.put(`${this.baseUrl}/${url}`, data, configs);
    }

    delete(url, configs) {
        return Axios.delete(`${this.baseUrl}/${url}`, configs);
    }
}

export const httpClient = new HttpClient();
