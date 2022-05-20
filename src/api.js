import axios from "axios";

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',  
    //baseURL: 'https://gateway.marvel.com:443/v1/public/characters?limit=1?ts=1&apikey=2ade7401895df31af9054588520d7180&hash=07bbfbe7624af28953e9b15e850d31e7',                  
    //baseURL: 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider-man&limit=10?ts=1&apikey=2ade7401895df31af9054588520d7180&hash=07bbfbe7624af28953e9b15e850d31e7',
    timeout: 10000,
    headers: {'Accept':  '*/*'}, 
    params: {

   }     
});

export default api;