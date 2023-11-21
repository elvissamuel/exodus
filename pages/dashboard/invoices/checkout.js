import Link from "next/link"
import { Container } from "../../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"

const CheckOut =(props)=>{
    const [book_id, setBook_id] = useState()

    useEffect(()=>{
        setBook_id( store.get('tempBook_id'))
    },[])
    return(
        <Container classes=" w-full md:w-4/5 lg:w-2/4 ">
            <div className="flex gap-4">
                
            <p><Link href='/dashboard'> Dashboard</Link></p>
                    <p>{'>'}</p>
                    <p><Link href={`/dashboard/invoices/${book_id}`}> Invoice</Link></p>
                    <p>{'>'}</p>
                    <p className="text-black-200">Checkout</p>
                
                </div>
                <div className="bg-white rounded-xl shadow mt-10">

            <h1 className="pt-[60px] px-10 text-3xl">Checkout</h1>

            <div>
                <h3 className="px-10 mt-[45px]"> Order Summary</h3>
                <div className="bg-gray py-[5%] px-[10%] mt-3">

                
                <div className=" grid grid-cols-2 gap-12">
                    <div className="text-[#6B7280]">
                        <p className="py-1">Quotation</p>
                        <p className="py-1">Delivery</p>
                        <p className="py-1">Design</p>
                        <p className="py-1">Discount</p>
                    
                    </div>
                    <div className="text-[#6B7280] pl-[10%] ml-[20%]">
                        <p className="py-1">Quotation</p>
                        <p className="py-1">Delivery</p>
                        <p className="py-1">Design</p>
                        <p className="py-1">No Discount</p>
                    
                    </div>
                    </div>
                    
                    <div className="flex mt-10 ">
                        <input
                   
                        type="text"
                        name="coupon_code"
                        id="coupon_code"
                        placeholder="Coupon Code"
                        className="w-[70%] rounded-l-md border border-[#6B7280] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                        />
                        <p className="py-3 px-6 bg-red text-white rounded-r-md ">Apply</p>

                    </div>
                    <div className ="grid grid-cols-2 text-[#6B7280] mt-[8%] pb-6">
                        <p>Total</p>
                        <p className="text-right pl-[40%] pr-[30%]">Discount</p>
                    </div>
                </div>
                    <div className="grid grid-cols-2 gap-7 py-[7%]">
                    <Link href={`/dashboard/invoices/${book_id}`} className=" rounded-3xl h-10 ml-4 border border-red text-red w-[95%]">Back to Invoice</Link>
                    <button className=" rounded-3xl h-10  bg-red border border-red text-white w-[95%]">Pay With Paystack</button>
                    </div>

            </div>
                </div>
        </Container>
    )
}

export default CheckOut
