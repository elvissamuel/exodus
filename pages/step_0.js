import { useRouter } from "next/router"
import { parse } from 'url';
import {useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import store from "store";
import {
  useMutation,
  useQuery
} from "react-query";
import {getTempBook, sumbit_step_0} from "../apicalls/tempBook"


import { toast } from 'react-toastify';
// import { useEffect } from "react";

const wip_1 = [
  "word_count",
  "current_book_format",
  "portrait",
  "bookSize",
  "number_of_pages",
  "quantity_of_BW",
  "quantity_of_Color"
]
const wip_2= [
  "Editing",
  "ISBN",
  "onlineSale",
  "CoverDesignType",
  "CoverDesign"]


const wip_3=[
  "InsideLayout",
  "InsideLayoutType",
  "artIllustration",
  "artIllustrationType"
]

const rtp_1 =[
    "whitePaper",
    "creamPaper",
    "glossyPaper",
    "newsPrint",
    "BWprint",
    "Colorprint",
    "Bothprint",
    "paperBinding",
    "stapleBinding",
    "hardBinding"
]

const rtp_2= [
    "no_of_books",
    "quantity_of_BW",
    "quantity_of_Color",
    "portrait",
    "bookSize",
    "number_of_pages"
]

const rtp_3= [
    "SpotLamination",
    "Foiling",
    "GlossyLamination"
]

const rtp_4=[
    "delivery_name",
    "delivery_phone",
    "pick_up",
    "shipping_address",
    "shipping_state",
    "shipping_instruction"
]

const Step_0 = (props)=>{
  const [book, setBook] = useState({})
  const [editId, setEditId ]= useState('')
  const router = useRouter()
  let book_id= store.get('tempBook_id') || 'xxx'
  const bookDetails  = useQuery("bookDetails", ()=>getTempBook(book_id));
  

  useEffect(()=>{
    if(bookDetails.isSuccess){
// console.log('hhhhhhhh',bookDetails.data)
        setBook(bookDetails.data)
    }
 },[bookDetails.isLoading])
  useEffect(()=>{
    if(router.isReady){
      // console.log('ttttt',router.asPath)
      let hash = router.asPath.split('#')
      if (hash[1] == 'edit'){
        setEditId(store.get('tempBook_id'))
      }
      
    }

  }, [])
const stepRTP = [rtp_1, rtp_2, rtp_3, rtp_4]
const stepWIP = [wip_1, wip_2, wip_3]
  const setSteps=dt=>{
if(dt.readyToPrint){
stepRTP.forEach((step, i)=>{
 let j = parseInt(i) + 1  
let d = {}
step.forEach(key=>{
  d[key] = dt[key]
})
store.set('step_'+j, d)
})
}else{
stepWIP.forEach((step, i)=>{
  let j = parseInt(i) + 1
  let d = {}
  step.forEach(key=>{
    d[key] = dt[key]
  })
  store.set('step_'+j+'_wip', d)
  })
}
  }

  useEffect(()=>{
    reset(book)
setSteps(book)


  }, [book])
  
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = step0Data =>{ 
    const data = {
      ...step0Data, status:"active"}
    store.set('step_0', data)
    let x = Object.assign(data, store.get('readyToPrint'))
console.log({data:x})
    submitTemp0(x)
    
    ;}
  
 const { mutate: submitTemp0 } = useMutation((x)=>{
  toast.loading('please wait...')
  return sumbit_step_0(x)
 },
    
    {
      onSuccess: async (newdata) => {
toast.success('successfull')
        // console.log("Sucess", newdata)
        
      },

      onSettled: (data)=>{
        // console.log("Settled", data.data.id)
        store.set('tempBook_id', data.data.id)
        let readyToPrint = store.get('readyToPrint')
        if(readyToPrint.projectType == 'stationary'){
          router.push(`/stationaries/step_1`)
        }else{

          if(readyToPrint.readyToPrint){

            router.push(`/ready_to_print/step_1`)
          }else{
            router.push(`/work_in_progress/step_1`)
          }
        }
      },

       onError: async (newdata) => {
        toast.error('an error occured')
        console.log("Logging error", newdata)
        
      }
    }
  );


useEffect(()=>{
  store.set('pastSteps', [])
  store.set('step_1', {})
  store.set('step_2', {})
  store.set('step_3', {})
  store.set('step_4', {})
  store.set('step_5', {})
  store.set('step_1_wip', {})
  store.set('step_2_wip', {})
  store.set('step_3_wip', {})


  

  
},[])


    return (
      
<div className="p-8 rounded-3xl bg-covr drop-shadow-sm w-full md:w-[90%] lg:w-[60%] h-[120%] md:h-[80vh] lg:h-[70vh]  md:absolute top-0 mt-[28%] md:mt-[5%] lg:mt-5 left-[50%] translate-x-[0%] md:translate-x-[-50%] md:overflow-y-scroll ">
            
            <div className="mx-auto w-[95%] md:w-[80%] lg:w-[70%]  ">
   
    <form className="text-white" onSubmit={handleSubmit(onSubmit)} >
        <div className="mt-2 mb-10">
            <h1 className="text-center text-2xl">{editId?'Please click continue to Edit this Book' :'Please provide us the information below'}</h1>
        </div>
      <div className="mb-5">
        <label
          htmlFor="book_name"
          className="mb-3 block text-base font-medium text-white"
        >
          Book Title
        </label>
        <input
        {...register("title")}
          type="text"
          name="title"
          id="book_name"
          placeholder="Book Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="author_name"
          className="mb-3 block text-base font-medium text-white"
        >
          Your Name
        </label>
        <input
        {...register("name")}
          type="text"
          name="name"
          id="aname"
          placeholder="Your Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="phone_number"
          className="mb-3 block text-base font-medium text-white"
        >
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute border border-[#e0e0e0] text-base font-medium text-[#6B7280] bg-transparent left-0 py-3 rounded-md px-3 top-0" >
        +234
          </div>
            <input
        {...register("phone_number",{
          required:"Required",
          pattern: {
            value:/^[0-9]{10}$/,
            message:"invalid phone number"
          }
          
        })}
          type="number"
          name="phone_number"
          id="phone_number"
          placeholder="Phone Number"
          className="w-full rounded-md border pl-20 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        {errors.phone_number && <div className="text-[#fbfbfc]" >{errors.phone_number.message}</div>}
        </div>
      
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-white"
        >
          Email Address
        </label>
        <input
       {...register("email", {
        pattern: {
          value: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
          message: 'error message' // JS only: <p>error message</p> TS only support string
        }
      })}
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
   
    
      <div>
        {editId? <h1 
        onClick={()=>{
          let x = book.readyToPrint ? 'ready_to_print' : 'work_in_progress'

          router.push(`/${x}/step_1`)
        }}
        className="cursor-pointer rounded-xl bg-blue py-3 px-10 text-base font-semibold z-[200000000] text-white outline-none mx-auto w-full text-center">Continue</h1> :<button
          className=" rounded-xl bg-blue py-3 px-10 text-base font-semibold z-[200000000] text-white outline-none mx-auto w-full text-center"
          type="submit"
        
          // onClick={()=>{
          //   console.log('ghghg')
          //   router.push('/ready_to_print/step_1')
          // }}
        >
        { props.edit? 'Edit this Project':  'Continue'}
          
        </button>}
      </div>
      
    </form>
  </div>
       
        </div>
    )
}

export async function getServerSideProps(context) {
  // const router = useRouter();
  const { hash } = parse(context.req.url)
     console.log('rtt',hash)
      // const rres =  await axios.get(`${process.env.backend_url}/api/order/${query.id}`,{
         
      //     headers: {
      //         "Content-Type": "application/json",
      //         "withCredentials": true,
      //         },
      //         })
      // const data = await rres.data
      // const temp_book = await getTempBook(data.tempBook_id)
      
      // // console.log('xxxxxx',data)
    
      // // Pass data to the page via props
      return { props: { order: 'data' } }
  }

export default Step_0