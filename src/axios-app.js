import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'https://to-do-list-53766.firebaseio.com/'
});

export default axiosApp;