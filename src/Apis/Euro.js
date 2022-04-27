import axios from "axios";

const api_euro = axios.create ({
     baseURL: 'https://economia.awesomeapi.com.br/json/daily/EUR-BRL/'
});

export default api_euro;