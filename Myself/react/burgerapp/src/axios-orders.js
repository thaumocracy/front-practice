import axios from 'axios'

const instance = axios.create({baseURL:`https://burgerapp-5dcb1.firebaseio.com/`})

export default instance