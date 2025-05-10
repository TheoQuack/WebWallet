import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://localhost:8000/api`,
    withCredentials: true,    
});
// debugger;

axiosClient.interceptors.request.use( (config) => {

    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`
    return config;

});


axiosClient.interceptors.response.use( (response) => {

    console.log(response);
  
      return response; // Return the (potentially modified) response


    // return response;
}, (error) => {

    const {response} = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
});


export default axiosClient;