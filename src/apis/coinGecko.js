import axios from 'axios'

export default axios.create({
    baseUrl: 'https://api.coingecko.com/api/v3'
})