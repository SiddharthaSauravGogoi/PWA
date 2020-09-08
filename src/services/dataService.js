import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export default {
    getWeatherData: () => {
        return axios.get(url)
            .then(data => data)
    },

}