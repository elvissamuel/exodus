import { Container } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
import { SwitchButton } from "../../components/elements/button"
import BackNextNav from "../../components/elements/back_next_nav"
import { useRouter } from "next/router"

const step_4 = (props)=>{
    const router = useRouter()

   

    const [save, setSave] = useState(false)
    const [ISBN, setISBN] = useState(false)
    const [Embossing, setEmbossing] = useState(false)
    const [SpotLamination, setSpotLamination] = useState(false)
    const [Foiling, setFoiling] = useState(false)
    const [GlossyLamination, setLamination] = useState('')
    const [readyToPrint, setReadyToPrint] = useState(false)


    const saveIt=()=>{

let data = {ISBN, Embossing, SpotLamination, Foiling, GlossyLamination}
if(GlossyLamination){
    data.SpotLamination = false
}else{
    console.log("good")
}
    console.log(123)
        store.set('step_3', data)
        let qr = {}
        qr.data = data
        console.log({data},"step3")
        qr.id = store.get("tempBook_id")
        props.updateStep(qr)
        setSave(true)
    }
    useEffect(()=>{
        const x = store.get('readyToPrint')

        setReadyToPrint(x.readyToPrint)

    },[])

    useEffect(()=>{       
            props.setCanNext(true)
            props.setPaststeps('step_3')}
        
            , [])

            useEffect(()=>{
                setSave(true)

               if(router.isReady){ 
                let t  = store.get('step_3') 
             if(t){
                setEmbossing(t.Embossing)
                setFoiling(t.Foiling)
                setISBN(t.ISBN)
                setLamination(t.GlossyLamination)
                setSpotLamination(t.SpotLamination)
             }
        }
            }, [router.isReady])
    
    
    if((readyToPrint && props.checkPaststeps('2', props.pastSteps) ) ){
    
    return(

        
        <div className="pb-[40%]">
            <h1  className="font-semibold text-3xl">Book Cover Information</h1>
            < div className=" lg:grid grid-cols-2 mt-10 gap-[20%] ">
            
            <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
                <h1 className=" ">Do you need ISBN?</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setISBN(!ISBN)}}
 onclickRight= {()=>{setISBN(!ISBN)}}
 state={ISBN}
  />
 </div>
            
           
            <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
                <h1 className=" ">Embossing</h1>
            <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setEmbossing(!Embossing)}}
 onclickRight= {()=>{setEmbossing(!Embossing)}}
 state={Embossing}
  />
   </div>
   
   <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
                <h1 className=" ">Foiling</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setFoiling(!Foiling)}}
 onclickRight= {()=>{setFoiling(!Foiling)}}
 state={Foiling}
  />
   </div>

{ !GlossyLamination?
            <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
                <h1 className=" ">Spot Lamination</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setSpotLamination(!SpotLamination)}}
 onclickRight= {()=>{setSpotLamination(!SpotLamination)}}
 state={SpotLamination}
  />
 </div>: '' } 
            

   </div>            
   <div className="w-[80%] md:w-[40%] lg:w-[60%]  mt-[80px] mb-[100px]  ">
                <h1>Lamination </h1>
                <div className="grid grid-cols-2 ">
                    <div  className='' onClick={()=>{
                setLamination(!GlossyLamination)
            }} > <img src="/img/gloss.png" className={!GlossyLamination|| GlossyLamination == '' ?  'p-2': 'border-2 border-blue-300  p-2 bg-white'} /></div>
            <div className='' onClick={()=>{
                setLamination(!GlossyLamination)
            }} ><img src="/img/matte.png" className={!GlossyLamination ?  'border-2 border-blue-300  p-2 bg-white': 'p-2'} /></div>
                </div>
                </div>
            
                {/* <button className="bg-green px-10 py-2 rounded-xl mx-auto w-2/3 block  md:mx-0  md:w-1/4" onClick={()=>{ saveIt()
        }}>Save</button> */}
        
        <BackNextNav saveIt={saveIt} lastStep={false} rtp={store.get('readyToPrint').readyToPrint} canNext ={true} />
        </div>
    )

}else{
    return <h1> You need to fill previous steps </h1>
}

}
export default step_4
