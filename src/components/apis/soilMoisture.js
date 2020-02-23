import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.thingspeak.com/channels/970723/feeds.json?api_key=AU0TNWBNLRYXU1QL&results=1'
})