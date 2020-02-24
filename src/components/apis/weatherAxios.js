import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:8000/api/weather',
    baseURL: 'https://irrigationapp.herokuapp.com/api/weather'
})