import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchBooks, fetchOrders } from '../../apicalls/dashboard';
import DashboardLayout from '../../components/layouts/dashboardLayout';
import {Option} from '../../components/svg';
import store from 'store';
import { formatDateNumber } from '../../utilityMethods/date';

const Publications =()=>{
      const currentUser = store.get('currentUser')

const [orders, setOrders] = useState({})

const getOrders = useQuery('books',fetchBooks)

useEffect(()=>{

     if (getOrders.isSuccess){
      console.log('bookss', getOrders.data.data)
      setOrders(getOrders.data.data)
     }

},[getOrders.isLoading])

var tableRow 
if(orders && orders.data){
console.log('pppp', orders)
  tableRow =    orders.data.map(x=>{
            return(
                  <tr className='border border- border-t-[#c9c9c9]'>
                  <td className='pl-2 pt-4 pb-2'><input  type="checkbox" className='mr-2'/>{x.id}</td>
                  <td className="pt-5 pb-2 ">{x.title}</td>
                 
                  <td className="pt-5 pb-2 ">{formatDateNumber(x.created_at)}</td>
                  <td className="pt-5 pb-2 ">{x.status == 'pending'?'Pending Payment': 'Production in Progress'} </td>
                  <td className="pt-5 pb-2 "><a href={"/step_0#"+ x.tempBook_id} className=' rounded-3xl bg-blue-50 text-blue p-3 text-white'> Create a New Order</a></td>
                  {/* <td className="pt-5 pb-2 ">{Option}</td> */}
                  </tr>
            )
      })
} 
      

    return (
       <>
      
                      
            <h1 className='font-semibold text-[#555555]'>Publications</h1>
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
                            <th className=" pl-2 pt-5 pb-2"> <input  type="checkbox" className='mr-2'/>Publication ID</th>
                            <th className="pt-5 pb-2 "> Name</th>
                          
                            <th className=" pt-5 pb-2">Date</th>
                            <th className="pt-5 pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                       {tableRow}

                        </tbody>
                        </table>
                        </div>
               
       </>

      
        
       
    )
}

export default Publications