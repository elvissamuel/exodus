import { Container } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import BackNextNav from "../../components/elements/back_next_nav";


const step_4 = (props)=>{
    const { register, reset ,handleSubmit, watch, formState: { errors } } = useForm();
    const [noShipping,setNoShippping] = useState(false)
    const [shippingState,setShippingState] = useState("")
    const [shippingInstruction,setShippingInstruction] = useState("")
    const [shippingCity,setShippingCity] = useState("")
    const [shippingAddress,setShippingAddress] = useState("")
    const [deliveryPhone,setDeliveryPhone] = useState("")
    const [deliveryName,setDeliveryName] = useState("")
    useEffect(()=>{
        console.log({noShipping})
        if((noShipping && deliveryName && deliveryPhone && deliveryPhone.length ==10) || (!noShipping && deliveryName && deliveryPhone && deliveryPhone.length ==10 && shippingState && shippingInstruction && shippingAddress && shippingCity)){
          
            props.setCanNext(true)
            props.setPaststeps('step_4')
            
        }
    },[noShipping,deliveryName,deliveryPhone,shippingInstruction,shippingState,shippingAddress,shippingCity])
    useEffect(()=>{
        let step_4 = store.get('step_4')
        
        if(step_4){
            reset(step_4)
          
        }
        }, [])
       
    const onSubmit = data =>{ 
    //    const newData = {...data,pick_up:noShipping}
       const newData = {
        delivery_name: deliveryName,
        delivery_phone: deliveryPhone,  
        pick_up:noShipping,
        shipping_address:shippingAddress,
        shipping_instruction:shippingInstruction,
        shipping_state:shippingState,
        shipping_city:shippingCity
       }

       
        store.set('step_4', newData)
        let qr = {}
        qr.data = newData
        console.log({qr},"step4")
        qr.id = store.get("tempBook_id")
        props.updateStep(qr)
        
        
        
        ;}

      



    if(props.checkPaststeps('3', props.pastSteps)  ){
    
    return(

        <form >
        <div >
            <h1  className="font-semibold text-3xl">Delivery Option</h1>

            <div className="md:grid grid-cols-2 gap-4 pt-6">

                <div className="p mb-5">

                    <h1> Name</h1>
                    <input
                     {...register("delivery_name",{onChange:(e)=>{setDeliveryName(e.target.value)}},{
                        required:"Required"
                     })}
            type="text"
            name="delivery_name"
            id="delivery_name"
            placeholder="Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                </div>
             <div>

                    <h1> Phone Number</h1>
                    <div className="relative">
                        <div className="absolute border border-[#e0e0e0] text-base font-medium text-[#6B7280] bg-transparent left-0 py-3 rounded-md px-3 top-0" >
        +234
          </div>
                    <input
                    {...register("delivery_phone",{onChange:(e)=>{setDeliveryPhone(e.target.value)}},{
                        required:"Required",
                        pattern: {
                          value:/^[0-9]{10}$/,
                          message:"invalid phone number"
                        }
                        
                      })}
            type="number"
            name="delivery_phone"
            id="delivery_phone"
            placeholder="Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white pl-20 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            /> 
                    </div>
                   
            
                </div>
                
                
        </div>
        <div className="flex gap-2 pt-4">
                    <input
                   
            type="checkbox"
            name="pick_up"
            // checked={true/false}
            checked={noShipping}
            onChange={e => {
              setNoShippping(e.target.checked);
            }}
            id="pick_up"
            placeholder="pick_up"
            className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                    <h1 className="text-sm"> Do not ship, I will pick up my book at Magic Wand office location .  </h1>
                    
                </div>
               {!noShipping && 
               <>
                <div className="pt-8" >

                    <h1> Shipping Address</h1>
                    <textarea
            type="text"
            {...register("shipping_address",{onChange:(e)=>{setShippingAddress(e.target.value)}})}
            name="shipping_address"
            id="shipping_address"
            placeholder="shipping_address"
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                    {/* <input
            type="text"
            {...register("shipping_address")}
            name="shipping_address"
            id="shipping_address"
            placeholder="shipping_address"
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            /> */}
                </div>
                 <div className="md:grid grid-cols-2 gap-4 pt-4">

                <div className="p mb-5">

                    <h1> City</h1>
                    <input
                    {...register("shipping_city",{onChange:(e)=>{setShippingCity(e.target.value)}})}
            type="text"
            name="shipping_city"
            id="shipping_city"
            placeholder="city"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                </div>
             <div>

                    <h1> State</h1>
                    <input
                   {...register("shipping_state",{onChange:(e)=>{setShippingState(e.target.value)}})} 
            type="text"
            name="shipping_state"
            id="shipping_state"
            placeholder="state"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                </div>
                
                
        </div>
        <div className="pt-8">

                    <h1> Special Instruction</h1>
                    <input
            type="text"
            {...register("shipping_instruction",{onChange:(e)=>{setShippingInstruction(e.target.value)}})} 
            name="shipping_instruction"
            id="shipping_instruction"
            placeholder="city"
            className="w-[80%] h-[100px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                </div>
               </>
              }

        </div>

        {/* <button type="submit" className="bg-green mt-10 mb-[200px] px-4 py-2 rounded-xl">Save</button> */}
        
        <BackNextNav saveIt={handleSubmit(onSubmit)} lastStep={false} rtp={store.get('readyToPrint').readyToPrint} canNext ={props.canNext} />
        </form>
    )
}else{
    return <h1> You need to fill previous steps </h1>
}
}
export default step_4
