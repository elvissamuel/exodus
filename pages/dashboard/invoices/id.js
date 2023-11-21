import { useEffect, useRef, useState } from "react"
import Book_Options_Table from "../../../components/elements/book_options_tables"
import { Container } from "../../../components/elements/containers"
import store from "store"
import Link from "next/link"
import { useQuery } from "react-query"
import { getTempBook } from "../../../apicalls/tempBook"
import { useReactToPrint } from "react-to-print"
import {ModalContent, ModalTrigger} from '../../../components/elements/modal'
import { toast, ToastContainer } from "react-toastify"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { fetchSingleOrder } from "../../../apicalls/dashboard"




const SingleInvoice =(props)=>{
    const router = useRouter()
    const [book, setBook] = useState({})
    const [order, setOrder] = useState({})
    const [orderId, setOrderId] = useState('')
    const [tempBookId, setTempBookId] = useState('x')
    const [canFetchTempBook, setCanFetchTempBook] = useState(false)
    useEffect(()=>{
        if(router.isReady){
            // console.log('a',props)
          setOrderId(router.query.id)
          setOrder(store.get(router.query.id))
       
          
        //   setCanFetchTempBook(true)


        }
    }, [router.isReady])
const fetchTempBook = useQuery('getting_temp_book',()=>{getTempBook(tempBookId)} ,{
    enabled:canFetchTempBook

} )
    const handleEdit= ()=>{

          store.set('tempBook_id',  book.id)

          router.push('/step_0#edit')
    }
    const { register, reset ,handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{ 
       
      toast.success(`Mail sent to ${data.email} successfully`)
    
}

    const invoiceRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => invoiceRef.current,
      });


      useEffect(()=>{
        if(order){
            console.log(order)

            setTempBookId(order.tempBook_id)
        }
    },[order])

      useEffect(()=>{
        if(tempBookId.length > 2){

          setCanFetchTempBook(true)
        }
    },[tempBookId])
    useEffect(()=>{
        if(fetchTempBook.isSuccess){
            console.log('kkkiiiooo', fetchTempBook.data)

        }
    },[fetchTempBook.isLoading])

    return (
  

            <Container  classes='w-[97%] lg:w-[60%]' >
                <div className="flex gap-4">
                   
                    <p><Link href='/dashboard'> Dashboard</Link></p>
                    <p>{'>'}</p>
                    <p className="text-black-200">Invoice</p>
                   
                </div>

<div className="bg-white rounded-xl border-gray border mt-10   " ref={invoiceRef}>

                <div className=" flex justify-between pt-10 pb-8 px-10 border border-b-gray">
                    <div >
                        <img className=" w-1/4 lg:w-1/6 mb-2"  src='/img/magicwand.png' />
                   <div className=" ">
                  

                    <p className="text-xs lg:text-sm mt-1">1, Bamishile Street</p>
                    <p className="text-xs lg:text-sm mt-1">Egbeda, Lagos</p>
                    <p className="text-xs lg:text-sm mt-1">Nigeria</p>
                 
                   </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2 text-right ">Invoice</h1>
                    <div className="">

                    <p className="text-xs lg:text-sm mt-1 text-right">MagicWand Publishing</p>
                    <p className="text-xs lg:text-sm mt-1 text-right"> +2348059864322</p>
                    <p className="text-xs lg:text-sm mt-1 text-right"> www.booksbymagicwand.com</p>
                    </div>
                    </div>
                </div>
                <h1 className="mt-[-30px]  text-center text-blue font-bold text-xl">UNPAID     </h1>

                <div className="pt-8  pb-8 px-10 border border-b-gray">

                <p className="text-xs lg:text-sm mt-1 font-bold">Bill To:</p>
                    <p className="text-xs lg:text-sm mt-1">{book.name}</p>
                    <p className="text-xs lg:text-sm mt-1">{book.email}</p>
                    <p className="text-xs lg:text-sm mt-1">{book.phone_number}</p>
{book.readyToPrint? <div>
         <div className="mt-4">

                    <div className="grid grid-cols-5 justify-between border border-b-gray">
                    <p className="text-xs lg:text-sm mt-1 ">Items</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Description</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">Cost</p>
</div>
    
<div className="grid grid-cols-5  justify-between">
                    <p className="text-xs lg:text-sm mt-1 ">1</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Printing Cost</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">200,000</p>
</div>

<div className="grid grid-cols-5  justify-between">
                    <p className="text-xs lg:text-sm mt-1 ">2</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Delivery  Cost</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">5,000</p>
</div>
                    </div>

                    <div className="grid grid-cols-5  justify-between border border-b-gray">
                    <p className="text-xs lg:text-sm mt-1 ">3</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Discount</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">0.00</p>
</div>
</div>: <div>
         <div className="mt-4">

                    <div className="grid grid-cols-5 justify-between border border-b-gray">
                    <p className="text-xs lg:text-sm mt-1 ">Items</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Description</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">Cost</p>
</div>
    
<div className="grid grid-cols-5  justify-between">
                    <p className="text-xs lg:text-sm mt-1 ">1</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Book Design Cost</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">20,000</p>
</div>

<div className="grid grid-cols-5  justify-between">
                    <p className="text-xs lg:text-sm mt-1 ">2</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Book Services Cost</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">5,000</p>
</div>
                    </div>

                    <div className="grid grid-cols-5  justify-between border border-b-gray">
                    <p className="text-xs lg:text-sm mt-1 ">3</p>
                    <p className="text-xs lg:text-sm mt-1 col-span-2 text-left">Discount</p>
                    <p className="text-xs lg:text-sm mt-1 text-right col-span-2 ">0.00</p>
</div>
</div> }
<div className="border border-b-gray">
    <h1 className="text-right mt-4 text-xl font-bold">Total:   <span className="text-blue">{order.total}</span></h1>
</div>

<h1 className="text-center mt-10 mb-5 text-3xl font-bold">Quotation Details</h1>
<Book_Options_Table book={book} />
                </div>
</div>
<div className="mt-[10px] grid grid-cols-5  md:gap-[5%] bg-white py-5 px-5 rounded-xl shadow">
    <div className="flex gap-2 col-span-2">
   <ModalTrigger>
    <button className="text-xs lg:text-base text-red bg-white px-2 lg:px-10 py-2 border border-blue rounded-xl">Send To Email</button>
    </ModalTrigger> 
    <button className="text-xs lg:text-base bg-white text-blue lg:ml-5" onClick={handlePrint}>Print</button>
    </div>
    <div className="flex gap-2 lg:gap-5 justify-end  col-span-3" >
    <button className="text-xs lg:text-base bg-blue  px-2 lg:px-10 py-2 text-white rounded-xl" onClick={handleEdit}>Edit Order</button>
    <a className="text-xs lg:text-base bg-green  px-2 lg:px-10 py-2 text-white rounded-xl" href='/dashboard/invoices/checkout'>Proceed To Payment</a>
    </div>
</div>

<ModalContent closeIconClasses='fixed top-1/3 left-[20%] lg:left-1/3 bg-white rounded-full z-[99999999999999999999999] text-red ml-[-50px]'>
    <div className="fixed top-1/2 left-1/2 bg-white w-[90%] md:h-1/5 md:w-2/3  lg:h-1/5 lg:w-1/3 rounded-xl shadow translate-x-[-50%] translate-y-[-50%] p-10">

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" ">
        <label className="text-blue text-xs ">Reciever E-mail Address</label>
        <input   {...register("email")} 
         type='text' name="email" id="email" placeholder="" className="mb-3 mt-1 border-blue-200 border text-blue bg-blue-50 w-full py-2" />
        </div>
        <div className="w-[75%] md:w-2/3 mx-auto">
            
        <button type="submit" className="text-white bg-blue border-blue border w-full   px-5 py-[3px] ">Send Invoice</button>
        {/* <input type='button'  className="text-red border-blue border text-center  px-5 py-[3px] ml-5"  value='Close' /> */}
            </div>
    </form>
    </div>
</ModalContent>
<ToastContainer />
            </Container >

    )
}

export default SingleInvoice