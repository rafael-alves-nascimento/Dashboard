import axios from "axios";

const api_bitcoin = axios.create ({
     baseURL: 'https://economia.awesomeapi.com.br/json/daily/BTC-BRL/'
});

export default api_bitcoin;