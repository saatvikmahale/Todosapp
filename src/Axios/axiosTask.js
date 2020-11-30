import axios from 'axios';

const instant = axios.create({
    baseUrl:'http://localhost:5040/'
});

export default instant;