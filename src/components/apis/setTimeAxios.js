import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:8000/api/set-time'
    baseURL: 'https://irrigationapp.herokuapp.com/api/irrigation'
}) 