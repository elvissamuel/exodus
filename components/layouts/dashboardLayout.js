// import UserStore from "../../store/userStore"
import {useMutation, useQuery} from 'react-query';
import { toast } from 'react-toastify';
import { pingUser, sign_out } from "../../apicalls/auth";
import { useRouter } from 'next/router'
import store from 'store';
import { useEffect, useRef, useState } from "react"
import { Container } from "../elements/containers"
import a from 'next/link';
import {BiGridAlt, Profile, Publications, LogOut, Arrowdown} from '../svg';
import axios from 'axios';
import { fetchBooks, fetchOrders } from '../../apicalls/dashboard';




const DashboardLayout =(props)=>{
const [bookCount, setBookCount] = useState(0)
const [orderCount, setOrderCount] = useState(0)
const [orderTotal, setOrderTotal] = useState(0)



const orders = useQuery( 'orders', fetchOrders)
const books = useQuery( 'books', fetchBooks) 
const router = useRouter()
  useEffect(()=>{
if(orders.isSuccess && books.isSuccess){
// console.log('reww',orders)
  setOrderTotal(orders.data.data.data.length)
  setBookCount(books.data.data.data.length)
}//''
  
  }, [books.isLoading, orders.isLoading])
console.log({router})

if(props.section[2] != 'invoices'){
    return (
      
        
           <div className="block  md:overflow-y-hidden lg:grid grid-cols-5 h-[100%] w-full absolute top-[10%] left-0 ">
            
           <div  className='w-[98%] mx-auto overflow-x-scroll grid-cols-8 lg:col-span-1   '>
             <div    className= ' flex flex-nowrap gap-3  lg:block bg-white shadow-md lg:bg-transparent  mx-auto lg:h-full  pl-0  w-[250%] lg:w-full pt-4 pb-2  lg:pt-[10%]  '  >
              
                    <div className= {`flex my-2 w-[100%] h-[5.74%] ${router.pathname === '/dashboard' ? 'bg-[#E2E3F3] text-[#3E4095] font-semibold ': ''}`}>
                    <div  className= 'flex gap-3 ' >
                      <div className='pl-7  pt-2'>
                <a href='/dashboard/' className="font-semibold hidden md:block content-center " >{BiGridAlt}</a> 
                </div>
                <div className=' py-2'>
                <a href='/dashboard/' className="text-[#737373]">Orders</a>

                </div>
  
                </div>
                
                </div>
                
                <div className= {`flex my-2  w-[100%] h-[5.74%] ${router.pathname === '/dashboard/publications' ? 'bg-[#E2E3F3] text-[#3E4095] font-semibold ': ''}`} >
                    <div  className= 'flex gap-3 ' >
                      <div className='pl-7  pt-2'>
                <a href='/dashboard/publications' className="font-semibold hidden md:block content-center" >{Publications}</a>
                </div>
                <div className=' py-2'>
    
                
                <a href='/dashboard/publications' className="text-[#737373]">Publications</a>
                </div>
                </div>
                </div>
                

                <div  className= {`flex my-2  w-[100%] h-[5.74%] ${router.pathname === '/dashboard/transactions' ? 'bg-[#E2E3F3] text-[#3E4095] font-semibold ': ''}`} >
                    <div  className= 'flex gap-3 ' >
                      <div className='pl-7  pt-2'>
                <a href='/dashboard/transactions' className="font-semibold hidden md:block content-center" >{Profile}</a>
                </div>
                <div className=' py-2'>

                <a href='/dashboard/transactions' className="text-[#737373]">Transactions</a>
                </div>
                </div>
                </div>

                <div  className= {`flex my-2  w-[100%] h-[5.74%] ${router.pathname === '/dashboard/profile' ? 'bg-[#E2E3F3] text-[#3E4095] font-semibold ': ''}`} >
                    <div  className= 'flex gap-3 ' >
                      <div className='pl-7  pt-2'>
                <a href='/dashboard/profile' className="font-semibold hidden md:block content-center" >{Profile}</a>
                </div>
                <div className=' py-2'>

                <a href='/dashboard/profile' className="text-[#737373]">Profile</a>
                </div>
                </div>
                </div>

              <div  className= 'flex gap-3 md:col-span-5 w-[100%]  lg:border border-t-[#C4C4C4] lg:pt-3 lg:mt-[220px]' >
                  <div  className= 'flex gap-3 pl-5  py-3' ></div>

                  <h1 className=' md:h-[40px] md:w-[40px] md:pt-2  border border-[#C4C4C4] bg-[#C4C4C4] rounded-full h-[60px] w-[60px] text-center pt-4 font-semibold text-[16px]' ><img src={props.currentUser? props.currentUser.avatar_url: ''}/></h1>
                  <div className='text-justify pt-2 md:text-xs md:font-semibold  lg:text-xl '><h1 className=' md:text-xs font-semibold text-[16px]'> {props.currentUser? props.currentUser.name: ''} </h1><p  className='md:text-xs text-[#737373] text-[16px]'><a href='/dashboard/profile'> view Profile</a></p></div>
                </div>
                


          </div> 
            </div> 
            <div className="md:col-span-3 lg:col-span-4  pt-[2%] pb-[20%] lg:overflow-y-scroll">
            <Container  classes=  'w-[90%]'>
              
            <div className='pl-[2%] ' >
       
        <div className=' w-full h-[25%] pt-6 flex justify-between gap-5  '>
                              <div className='bg-white w-[320px] h-[171px] shadow-md rounded-md'>
                              <div  className= 'flex gap-3 pl-6  pt-12 ' >
                                    <h1 className=' md:h-[40px] md:w-[40px] md:pt-2  border border-[#E2E3F3] bg-[#E2E3F3] rounded-full h-[60px] w-[60px] text-center pt-4 font-semibold text-[16px]' > OR</h1>
                                    <div className='text-justify pt-2  '><h1 className='  font-semibold  text-xl'>{orderCount} </h1><p className='md:text-xs text-[#737373] text-[16px]'>Order(s) Created </p></div>
                              </div>
                              </div>

                              <div className='bg-white w-[320px] h-[171px] shadow-md rounded-md'>
                              <div  className= 'flex gap-3 pl-6  pt-12 ' >
                                    <h1 className=' md:h-[40px] md:w-[40px] md:pt-2  border border-[#E2E3F3] bg-[#E2E3F3] rounded-full h-[60px] w-[60px] text-center pt-4 font-semibold text-[16px]' > PB</h1>
                                    <div className='text-justify pt-2  '><h1 className='  font-semibold  text-xl'> {bookCount} </h1><p className='md:text-xs text-[#737373] text-[16px]'> Publication(s)</p></div>
                              </div>
                              </div>

                              <div className='bg-white w-[320px] h-[171px] shadow-md rounded-md '>
                              <div  className= 'flex gap-3 pl-6  pt-12 ' >
                                    <h1 className=' md:h-[40px] md:w-[40px] md:pt-2  border border-[#E2E3F3] bg-[#E2E3F3] rounded-full h-[60px] w-[60px] text-center pt-4 font-semibold text-[16px]' > TR</h1>
                                    <div className='text-justify pt-2  '><h1 className='  font-semibold  text-xl'>12,000,000 </h1><p className='md:text-xs text-[#737373] text-[16px]'>Value of Total Transaction(s)</p></div>
                              </div>
                              </div>
                              
                        </div>
                        <div className='bg-white  md:w-[100%] lg:w-full min-h-[300px] mt-10 pt-6 pl-5 rounded-md'>

                {props.children}
</div>
</div>
                </Container>
                </div>
                </div>
            
              
    )}else{
      return(
        <div className='mt-[120px] pb-[200px] h-[100%] lg:overflow-y-scroll'>
             {props.children}
        </div>
      )
    }

    
  }
  


   
        
 
    
  export default DashboardLayout

