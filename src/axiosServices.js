import axios from 'axios';

const baseURL = `https://employee-backend2.onrender.com`

export const axiosGet = (url) =>{
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPost = (url, data) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosDelete = (url) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPut = (url, data) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}

export const axiosGetStats = (url) =>{
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosGetAvgSalary = (url) =>{
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosGetAgeDistribution = (url) =>{
    console.log(`${baseURL}${url}`)
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}