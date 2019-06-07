import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dd4a0a16d9a5534cb4ff6a35ef81c51a188ed008730994ed4d70766fce106e87'
    }
})