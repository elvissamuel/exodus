import axios from 'axios';
import store from 'store';


export const fetchOrders= async()=>{
const currentUser = store.get('currentUser')
       const res = await axios.get(`${process.env.backend_url}/api/${currentUser?.id}/my_orders`,{
     headers: {
        'Authorization': 'Bearer '+ currentUser?.access_token, 
        "Content-Type": "application/json",
        "withCredentials": true,
            },
            })
return res  
}

export const fetchSingleOrder = async(x)=>{
   
    const res = await axios.get(`${process.env.backend_url}/api/order/${x}`,{
       
        headers: {
            "Content-Type": "application/json",
            "withCredentials": true,
            },
            })
// console.log('yyy', res)
   return res.data
}



export const fetchBooks= async()=>{
    const currentUser = store.get('currentUser')
    const res = await axios.get(`${process.env.backend_url}/api/${currentUser.id}/my_books`,{
     headers: {
        'Authorization': 'Bearer '+ currentUser.access_token, 
        "Content-Type": "application/json",
        "withCredentials": true,
            },
            })
//   console.log('ttttt',res)\
return res
// console.log('rrrrrr', res)
}
