import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getCows = () => axios.get(`${baseURL}/cows.json`);

export default { getCows };
