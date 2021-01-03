import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID nS91PzRL1pMk1YDRw3hzb-vGZmHO8D1jYPZHiuY7xeQ'
    }
});