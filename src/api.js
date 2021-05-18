import axios from 'axios';

const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyCktTJ2KbMD9erlW0rSkV66FLdpyihZvRE'
    },
})

export default request
