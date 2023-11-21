import { useEffect, useState } from "react"
import { arrowLeft, arrowRight } from "../svg"
import store from "store"
import Link from "next/link"
import { useRouter } from "next/router"


// const prefix = '/ready_to_print/'
const steps = ['step_1', 'step_1', 'step_3', 'step_4', 'step_5', 'step_6']

const BackNextNav =(props)=>{
    const router = useRouter()
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')
    const [prefix, setPrefix] = useState('')
    
    // const [lastStep, setLastStep] = useState(false)
    const [loadn, setLoadn] = useState(false)

    const book_id = store.get('tempBook_id')

    useEffect(()=>{
        if(props.rtp){
            setPrefix('/ready_to_print/')
        }else{
            setPrefix('/work_in_progress/')
        }
    },[])

const createOrder = ()=>{
   
    // call create Order API

    // if error display the relevant error

    // on Success route to dashboard/invoices/:id
    store.set('temp_book'+'_'+book_id, {})

    router.push(`/pending#${book_id}`)

}
    useEffect(()=>{
        if(loadn){
          chooseNext(store.get('currentStep'))   
        }
       
    },[loadn])
    useEffect(()=>{
        // console.log(router.route)
        if(router.route !== next){
            router.push(`${next}`)  
        }
      
    },[next])
    // useEffect(()=>{
    //     if(router.route !== prev){
    //     router.push(`${next}`)
    //     }
    // },[prev])
    useEffect(()=>{
        
        setLoadn(false)
        // console.log(router.route)
    }, [router.route])
    
    const chooseNext=async (curr)=>{
        const readyToPrint = store.get('readyToPrint')
        if(readyToPrint.readyToPrint){

            switch(curr){
                case 'step_1':
                    // console.log('ll', prefix + 'step_2')
                    await props.saveIt()
                    setNext(prefix + 'step_2')
                    setPrev(prefix + curr +'#')
                    break;
                case 'step_2':
                    // const readyToPrint = store.get('readyToPrint')
                    await props.saveIt()
            
                        setNext(prefix + 'step_3')
                        setPrev(prefix + 'step_1')
                    
                    
                   
                    break;
                case 'step_3':
                    await props.saveIt()
                    setNext(prefix + 'step_4')
                    setPrev(prefix + 'step_2')
                     break;
                case 'step_4':
                    
                await props.saveIt()
            
                        setNext(prefix + 'step_5')
                        setPrev(prefix + 'step_3')
            
    
                        break;
                case 'step_5':

    
                    //  setLastStep(true)
                     setNext(prefix + 'step_6')

                     setPrev(prefix + 'step_4')
                     setLoadn(true)
                     setLastStep(true)
                       break;
       
            }
        }else{
            switch(curr){
                case 'step_1':
                    // console.log('ll', prefix + 'step_2')
                    await props.saveIt()
                    setNext(prefix + 'step_2')
                    setPrev(prefix + curr +'#')
                    break;
                case 'step_2':
                                  

                await props.saveIt()
                        setNext(prefix + 'step_3')
                        setPrev(prefix + 'step_1')
                    
                    
                   
                    break;
                case 'step_3':
                    
                await props.saveIt()
                    setNext(prefix + 'step_4')
                    setPrev(prefix + 'step_2')
                     break;
                case 'step_4':
                
                await props.saveIt()    
                setNext(prefix + 'step_5')
                        setPrev(prefix + 'step_3')
            
    
                        setLastStep(true)
                        break;
               
       
            }
        }
    }

    return (
        
<div className="border-t-2 border-gray fixed bottom-0 left-0 lg:left-[20%] w-full lg:w-[80%] h-[80px] px-10 pt-3 flex justify-between items-center z-10000 bg-[#ffffffd1]"> 
<div className="flex justify-between px-4 py-3 border-2 border-red  w-[150px]  h-[50px] rounded-full red cursor-pointer align-center">
<Link href={prev}>
{arrowLeft}</Link>
<Link href={prev}>Back</Link>
</div>


{/* <div className=" h-[10px] w-[50px]  flex justify-between  ">
<div className="w-[10px] rounded-full bg-blue h-[10px] shadow-lg border border-blue" > 
    </div>
    <div className="w-[10px] rounded-full bg-white h-[10px] shadow-lg border border-blue" > 
    </div>
    <div className="w-[10px] rounded-full bg-white h-[10px] shadow-lg border border-blue" > 
    </div>
    
</div> */}



{!props.lastStep ?  
    <div className={`flex justify-between px-4 py-3 text-[14px] align-middle w-[200px] h-[50px] rounded-full ${props.canNext? 'white bg-blue': 'bg-gray black'} cursor-pointer`} onClick={()=>{
        console.log({props})

        if(props.canNext){
            setLoadn(true)
        }
    }}>
        <Link href={props.canNext? next : '#'}>Save and Continue </Link>
        <Link href={props.canNext? next : '#'}>
        {
        loadn?<img src="/img/loading.gif" /> :arrowRight
        }
        </Link>
    </div> : 
    <div onClick={createOrder} className={`flex justify-between px-2 py-3  w-[150px] h-[50px] rounded-full ${props.canNext? 'white bg-blue': 'bg-gray black'} cursor-pointer`}>
<a href='#'>Confirm Order</a>
<a href='#'>
{arrowRight}
</a>
</div>   }

</div>
    )
}

export default BackNextNav