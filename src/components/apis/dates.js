import axios from 'axios';

export default axios.create({
    baseURL: 'https://worldtimeapi.org/api/timezone/America/Indiana/Indianapolis'
})