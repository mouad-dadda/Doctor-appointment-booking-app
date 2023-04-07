import axios from 'axios'


const  axiosClient=axios.create({
  baseURL:'http://127.0.0.1:8000/api'
})

axiosClient.interceptors.request.use((config)=>{
  const token='123333'
  config.headers.Authorization=`Bearer ${token}`
  return config
})



export default axiosClient