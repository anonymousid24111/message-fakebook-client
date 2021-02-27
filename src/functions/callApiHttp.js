import axios from 'axios'
import { API_URL } from 'commons/constants'
const callApiHttp = ({ url, method, baseURL, data, params }) => {
    return axios.create({
        baseURL: API_URL,
        headers: {
            'x-access-token': `${localStorage.getItem('token')}`
        }
    })({
        method,
        url,
        data,
        params
    })
}

export default callApiHttp
