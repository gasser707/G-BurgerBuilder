import axios from 'axios';

const instance= axios.create({
    baseURL:'https://burger-builder-1e156.firebaseio.com/'
});

export default instance;