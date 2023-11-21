import axios from "axios"
import stringifyObject from 'stringify-object';
// createOrderDeep
export const createOrderDeep = async(x)=>{
   
    const res = await axios.get(`${process.env.backend_url}/api/first_time_order/${x}`,{
       
        headers: {
            "Content-Type": "application/json",
            "withCredentials": true,
            },
            })
// console.log('yyy', res)
   return res.data
}
export const getTempBook = async(x)=>{
   
    const res = await axios.get(`${process.env.backend_url}/api/temp-books/${x}`,{
       
        headers: {
            "Content-Type": "application/json",
            "withCredentials": false,
            },
            })
console.log('yyy', res)
   return res.data
}

export const sumbit_step_0 = async(obj)=>{
    const res = await axios.post(`${process.env.backend_url}/api/temp-books`,obj,{
       
        headers: {
            "Content-Type": "application/json",
            "withCredentials": false,
            },
            })
console.log('yyy', res)
   return res
}

export const update_steps = async(obj)=>{
    let y =   JSON.stringify(obj.data)
    let d = JSON.parse(y)
console.log('ttt', y)
console.log('rrerer', d)   
// console.log('hhhhhh',JSON.parse(obj.data))                                                                                
    const res = await axios.patch(`${process.env.backend_url}/api/temp-books/${obj.id}` ,obj.data, {
        headers: {
            "Content-Type": "application/json",
            "withCredentials": false,
            },
    }

            )
// console.log('yyy', res)
   return res
    // {status: 200, message: 'success', data: obj}
}


