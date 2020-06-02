import axios from "axios";

const kitsu = axios.create({ baseURL: 'https://kitsu.io/api/edge' });

export default kitsu;