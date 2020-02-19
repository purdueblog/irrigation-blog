import axios from 'axios';

export default axios.create({
    baseURL: 'http://worldtimeapi.org/api/timezone/America/Indiana/Indianapolis'
})