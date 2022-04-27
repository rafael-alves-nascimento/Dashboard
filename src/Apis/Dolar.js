import axios from "axios";

const api_dolar = axios.create ({
     baseURL: 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/'
});

export default api_dolar;