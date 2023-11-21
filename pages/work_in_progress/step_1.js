import { Container } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
import BackNextNav from "../../components/elements/back_next_nav"
import { SwitchButton } from "../../components/elements/button"
import { useForm } from "react-hook-form";

const step_1WIP = (props)=>{
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [portrait, setPortrait] = useState(true)
    const [bookSize, setBookSize] = useState('')
    const [blackNwhiteQty, setBlackNwhiteQty] = useState(false)
    const [blackNwhite, setBlackNwhite] = useState(false)
    const [coloredQty, setColoredQty] = useState(false)
    const [currentBookFormat,setCurrentBookFormat] = useState("")
    const [colored, setColored] = useState(false)
    const [totalPgs, setTotalPgs] = useState(0)
    const [rtp, setRtp] = useState(false)
    
const calcTotal =()=>{
    
setTotalPgs(parseInt(blackNwhiteQty) + parseInt(coloredQty) )
}
useEffect(()=>{
let step_1 = store.get('step_1_wip')
// let step_1 = store.get('step_1')
let readyToPrint = store.get('readyToPrint')

setRtp(readyToPrint.readyToPrint)

setBlackNwhite(step_1.BWprint)
setColored(step_1.Colorprint)


if(step_1){

    if(step_1.portrait === undefined){
        // console.log('ttt',step_1)
     
    }else{
        // console.log('kkk')
        reset(step_1)
      
        setPortrait(step_1.portrait)
        setBookSize(step_1.bookSize)
    }
}
}, [])

useEffect(()=>{
    if(currentBookFormat && blackNwhiteQty && bookSize){
        props.setCanNext(true)
        props.setPaststeps('step_1')
    }
},[currentBookFormat,blackNwhiteQty,bookSize])


    const onSubmit = data =>{ 
        data.portrait = portrait
        data.bookSize = bookSize
        // calcTotal()
        data.number_of_pages = totalPgs
        data.quantity_of_BW= data.quantity_of_BW? data.quantity_of_BW:0
        data.quantity_of_Color= data.quantity_of_Color? data.quantity_of_Color:0
        data.current_book_format = currentBookFormat
        console.log({currentBookFormat,data})
        store.set('step_1_wip', data)
        let qr = {}
    qr.data = data
    // console.log("jju", totalPgs)
    qr.id = store.get("tempBook_id")
    props.updateStep(qr)
    
  
   }
    const setBS =(x)=>{
        switch(x){
            case 0:
                setBookSize('A6')
                break;
            case 1:
                setBookSize('5x8')
                break;
            case 2:
                    setBookSize('A5')
                    break;
            case 3:
                setBookSize('5.5x8.5')
                break;

            case 4:
                    setBookSize('6x9')
                    break;
            case 5:
                        setBookSize('7x10')
                        break;
            case 6:
                setBookSize('A4')
                break;
    
        }
    }
    // console.log('ade',props.checkPaststeps('1', props.pastSteps))
    

    // console.log('ooop', rtp)
    
    
    return(

        
         <div className="mb-[200px]">
            <h1 className=" font-semibold  text-3xl"> Book Information</h1>
            <form onSubmit={handleSubmit(onSubmit)} >

            <div className="  block md:grid grid-cols-2 mt-10 gap-6">
            <div>
            <h1 className= 'text-black-300' >Number of Words</h1> 
                    <input
                    min="0"
                    {... register("word_count",  {onChange: (e)=>{setBlackNwhiteQty(e.target.value)} } )}
                    type="number"
                    name="word_count"
                    id="word_count"
                    placeholder="number of pages"
                    className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-2 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
</div>
    <div>        
<h1 className= 'text-black-300' >Current Book Format</h1> 
                    <select
                    min="0"
                    {... register("current_book_format",  {onChange: (e)=>{setCurrentBookFormat(e.target.value)} } )}
                  
                    name="current_book_format"
                    id="current_book_format"
                    placeholder="number of pages"
                    className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-2 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        > 
        <option >-- Please Select an option --</option>
        <option>MS Word</option>
        <option>PDF (Text Only)</option>
        
        </select>
        
        </div>
     

         {/* <div>
     <h1 className= 'text-black-300' >Have you edited your manuscript?</h1> 
                    <input
                    min="0"
                    {... register("quantity_of_BW",  {onChange: (e)=>{setBlackNwhiteQty(e.target.value)} } )}
                    type="number"
                    name="quantity_of_BW"
                    id="quantity_of_BW"
                    placeholder="number of pages"
                    className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-2 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
</div>  */}    
  </div> 
          
        <div className="md:w-1/2 lg:w1/3">

        <h1 className="font-semibold mt-5 mb-2">Layout Style</h1>


<SwitchButton left='Portrait' right='Landscape'
 onclickLeft={()=>{setPortrait(!portrait)}}
 onclickRight= {()=>{setPortrait(!portrait)}}
 state={portrait}
  />
        </div>




         <h1 className="font-semibold mt-10 ">Select Book Size (in Inches)</h1>
         <p className="mt-2 mb-2">Please note that A6, A5 and A4 sizes are all Trimmed variations </p>
         <div className="w-[100%] overflow-x-scroll bg-blue-100">
{portrait? 
// bg-[#F9F9F9]
        <div className="bg-blue-100 grid grid-65 w-[130%] h-[220px] gap-5 pb-10  items-end px-5">
           
            <div className={`w-full relative bg-white shadow h-[30%] col-span-5 hover:shadow-xl ${bookSize == 'A6' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(0)}}>
                <h1 className="absolute left-0 top-[-5%]">A6</h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>

            </div>
            
            <div className={`w-full relative bg-white shadow h-[42%] col-span-6 hover:shadow-xl ${bookSize == '5x8' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(1)}}>
            <h1 className="absolute left-0 top-[-5%]">5x8</h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
            </div>

            <div className={`w-full relative bg-white shadow h-[45%] col-span-8 hover:shadow-xl ${bookSize == 'A5' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(2)}}>
                <h1 className="absolute left-0 top-[-5%]">A5</h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
            </div>

            <div className={`w-full relative bg-white shadow h-[50%] col-span-7 hover:shadow-xl ${bookSize == '5.5x8.5' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(3)}}>
                <h1 className="absolute left-0 top-[-5%]">5.5x8.5 </h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
            </div>
            <div className={`w-full relative bg-white shadow h-[60%] col-span-9 hover:shadow-xl ${bookSize == '6x9' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(4)}}>
                <h1 className="absolute left-0 top-[-5%]">6x9</h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
            </div>
            <div className={`w-full relative bg-white shadow h-[70%] col-span-10 hover:shadow-xl ${bookSize == '7x10' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(5)}}>
                <h1 className="absolute left-0 top-[-5%]">7x10</h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
            </div>
             <div className={`w-full relative bg-white shadow h-[80%] col-span-12 hover:shadow-xl ${bookSize == 'A4' && portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(6)}}>
                <h1 className="absolute left-0 top-[-5%]">A4</h1>
                <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
            </div>
        </div> :
        <div className="bg-blue-100 grid grid-80 w-[160%] h-[220px] gap-5 pb-10  items-end px-5">
           
        <div className={`w-full relative bg-white shadow h-[15%] col-span-6 hover:shadow-xl ${bookSize == 'A6' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(0)}}>
            <h1 className="absolute left-0 top-[-5%]">A6</h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>

        </div>
        
        <div className={`w-full relative bg-white shadow h-[25%] col-span-9 hover:shadow-xl ${bookSize == '5x8' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(1)}}>
        <h1 className="absolute left-0 top-[-5%]">5x8</h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
        </div>

        <div className={`w-full relative bg-white shadow h-[30%] col-span-9 hover:shadow-xl ${bookSize == 'A5' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(2)}}>
            <h1 className="absolute left-0 top-[-5%]">A5</h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
        </div>

        <div className={`w-full relative bg-white shadow h-[35%] col-span-10 hover:shadow-xl ${bookSize == '5.5x8.5' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(3)}}>
            <h1 className="absolute left-0 top-[-5%]">5.5x8.5 </h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
        </div>
        <div className={`w-full relative bg-white shadow h-[40%] col-span-11 hover:shadow-xl ${bookSize == '6x9' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(4)}}>
            <h1 className="absolute left-0 top-[-5%]">6x9</h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
        </div>
        <div className={`w-full relative bg-white shadow h-[45%] col-span-12 hover:shadow-xl ${bookSize == '7x10' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(5)}}>
            <h1 className="absolute left-0 top-[-5%]">7x10</h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
        </div>
         <div className={`w-full relative bg-white shadow h-[55%] span-15 hover:shadow-xl ${bookSize == 'A4' && !portrait? 'border-2 border-blue': ''} `} onClick={()=>{setBS(6)}}>
            <h1 className="absolute left-0 top-[-5%]">A4</h1>
            <div className="w-0.5 h-full absolute top-0 left-[50%] border-l border-l-gray"></div>
        </div>
    </div>
}
         </div>
         {/* border border-blue */}
         {/* <button type="submit" className="bg-green-300 mt-10 px-4 py-2 rounded-xl">Save</button> */}
         <BackNextNav saveIt={handleSubmit(onSubmit)} lastStep={false} rtp={store.get('readyToPrint')?.readyToPrint} canNext ={props.canNext} />
         </form>
        </div>
    )

}
export default step_1WIP
