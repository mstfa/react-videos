import axios from 'axios';

const KEY = 'AIzaSyCZBXc2GccCC_uUafoKvGFA6IurzGh_G6k';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});
