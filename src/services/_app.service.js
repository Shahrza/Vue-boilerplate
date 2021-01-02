import axios from 'axios'

let headers;
const baseURL = '';

try {
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': localStorage.token ? JSON.parse(localStorage.token) : ''
    };
} catch (e) {
    console.log(e);
}

const instance = axios.create({
    baseURL,
    timeout: 0,
    headers,
});

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error;
    }
);

export default instance;
