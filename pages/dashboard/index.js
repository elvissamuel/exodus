import { useEffect, useState } from 'react';
import { useQuery,useLazyQuery } from 'react-query';
import { fetchOrders } from '../../apicalls/dashboard';
import DashboardLayout from '../../components/layouts/dashboardLayout';
import {Option} from '../../components/svg';
import store from 'store';
import { useRouter } from 'next/router';

const Dashboard =()=>{
      
      const currentUser = store.get('currentUser')
      const router = useRouter()
      console.log({router})
const [orders, setOrders] = useState({})


const getOrders = useQuery('orders',fetchOrders)

useEffect(()=>{

     if (getOrders.isSuccess){
      // console.log('ordersyyyyy', getOrders.data.data)
      setOrders(getOrders.data.data)
     }

},[getOrders.isLoading])

useEffect(()=>{
if(currentUser.id){
     fetchOrders() 
}
      
},[router.route])
var tableRow 
if(orders && orders.data){
console.log('pppp', orders)
  tableRow =    orders.data.map(x=>{
            return(
                  <tr className='border border- border-t-[#c9c9c9]'>
                  <td className='pl-2 pt-4 pb-2'><input  type="checkbox" className='mr-2'/>{x.id}</td>
                  <td className="pt-5 pb-2 ">{x.book_name}</td>
                  <td className="pt-5 pb-2 ">₦{x.total}</td>
                  <td className="pt-5 pb-2 ">Sept 20, 2022</td>
                  <td className="pt-5 pb-2 ">{x.status == 'pending'?'Pending Payment': 'Production in Progress'} </td>
                  <td className="pt-5 pb-2 "><a href='#' className=' rounded-3xl bg-red p-3 text-white' onClick={()=>{
                        store.set(x.id, x)

                        router.push("/dashboard/invoices/" + x.id )
                  }}> View Invioce</a></td>
                  {/* <td className="pt-5 pb-2 ">{Option}</td> */}
                  </tr>
            )
      })
} 
      

    return (
    
                        <div className='bg-white  md:w-[100%] lg:w-[100%] h-[100%] mt-10 pt-6 pl-5 rounded-md'>
            <h1 className='font-semibold text-[#555555]'>Orders</h1>
            <div className='grid grid-cols-2'> 
                        <div className='gap-10 flex'>
                              <div className='w-[60%]' >
                              <input
                              type="search"
                              id="default search"
                              placeholder="Search Orders"
                              className=" rounded-2xl w-[80%] h-[50px]  border border-[#c9c9c9] mt-2  pl-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                                    </div>

                                    <div className='w-[25%]'>
                              <input list='Batch'
                              placeholder="Batch Actions"
                                    type="search"
                                    className=" rounded-2xl w-[80%] h-[50px]  border border-[#c9c9c9] mt-2 bg-none pl-3 text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md  "/>
                              <datalist id="Batch">
                                    <option value="Internet Explorer"/>
                                    <option value="Firefox"/>
                                    <option value="Chrome"/>
                                    <option value="Opera"/>
                                    <option value="Safari"/>
                              </datalist>
                              </div>
                        
                        </div>

                        <div className='pr-3'>
                              <input list='Batch'  
                              placeholder="Filter Orders..."
                              type="search"

                              className="float-right rounded-2xl w-[30%] h-[50px]  border border-[#c9c9c9] bg-[#3E4095] mt-2  px-2 text-base text-center  outline-none focus:border-[#6A64F1] focus:shadow-md mr-5 "/>
                              <datalist id="Batch">
                              <option value="Internet Explorer"/>
                              <option value="Firefox"/>
                              <option value="Chrome"/>
                              <option value="Opera"/>
                              <option value="Safari"/>

                              </datalist>
                              </div>
                        </div>
                        <div className="mt-6 rounded-lg  border border-collapse  border-[#c9c9c9] h-auto w-full ">
                               <table class=" w-full h-full ">
                        <thead>
                            <tr className=" text-[#1E1E1E] text-left  ">
                            <th className=" pl-2 pt-5 pb-2"> <input  type="checkbox" className='mr-2'/>Order ID</th>
                            <th className="pt-5 pb-2 ">Book Name</th>
                            <th className="pt-5 pb-2 ">Amount</th>
                            <th className=" pt-5 pb-2">Date</th>
                            <th className="pt-5 pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                       {tableRow}

                        </tbody>
                        </table>
                        </div>
                   
                   </div>

       
        
       
    )
}

export default Dashboard