import { Container } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
import { SwitchButton } from "../../components/elements/button"
import { useRouter } from "next/router"
import BackNextNav from "../../components/elements/back_next_nav"




const step_3 = (props)=>{
    const router = useRouter()

    const [save, setSave] = useState(false)
    const [InsideLayout, setInsideLayout] = useState(false)
    const [InsideLayoutType, setInsideLayoutType] = useState('')
    const [artIllustration, setArtIllustration] = useState(false)
    const [artIllustrationType, setArtIllustrationType] = useState('')
    const [Editing, setEditing] = useState(false)
    const [allFalse, setAllFalse] = useState(false)
    const [readyToPrint, setReadyToPrint] = useState(false)

    useEffect(()=>{
        const x = store.get('readyToPrint')

        setReadyToPrint(x.readyToPrint)

    },[])
    const saveIt=()=>{
  
let data = {InsideLayout,  InsideLayoutType, artIllustration, artIllustrationType}
       
// console.log('lll', data)
        store.set('step_3_wip', data)
        let qr = {}
        qr.data = data
        qr.id = store.get("tempBook_id")
        props.updateStep(qr)
        setSave(true)
    }
    useEffect(()=>{
        // if(save){
        props.setCanNext(true)
        props.setPaststeps('step_3')
    },[])
    useEffect(()=>{
        setSave(false)
       if(router.isReady){ let t  = store.get('step_3_wip') 
     if(t){
        setArtIllustrationType(t.artIllustrationType)
        setInsideLayoutType(t.insideLayoutType)
        setInsideLayout(t.InsideLayout)
        setArtIllustration(t.artIllustration)
     }
}
    }, [router.isReady])

    if(props.checkPaststeps('2', props.pastSteps) && !readyToPrint  ){
    
    return(

        
        <div  className="pb-[40%]">
            <h1  className="font-semibold text-3xl">Inside Layout</h1>
            < div className=" md:grid lg:grid grid-cols-2 pt-10 gap-[20%]  gap-10">

                <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
                <h1 className=" ">Do you require inside layout design?</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setInsideLayout(!InsideLayout)}}
 onclickRight= {()=>{setInsideLayout(!InsideLayout)}}
 state={InsideLayout}
  />

{InsideLayout? <div>        
<h1 className= 'text-black-300 mt-6' >Please Choose an option</h1> 
                    <select
                 
                  onChange={(e)=>{
                    setInsideLayoutType(e.target.value)
                  }}
                    name="InsideLayoutType"
                    id="InsideLayoutType"
                    placeholder="number of pages"
                    className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-2 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        > 
        <option >-- Please Select an option --</option>
        <option> Poetry Layout</option>
        <option>Poetry with picture</option>
        <option>Simple fiction/non-fiction layout (no graphics or images)</option>
        <option>Fiction/non-fiction layout with pictures, Graphic and/charts</option>
        <option>Comic Book</option>




        </select>
        
        </div>: null}
   </div>



                <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
                <h1 className=" ">Do you require custom illustration in your work?</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setArtIllustration(!artIllustration)}}
 onclickRight= {()=>{setArtIllustration(!artIllustration)}}
 state={artIllustration}
  />
  {artIllustration? <div>        
<h1 className= 'text-black-300 mt-6' >Please Choose an option</h1> 
                    <select
                 
                  onChange={(e)=>{
                    setArtIllustrationType(e.target.value)
                  }}
                    name="InsideLayoutType"
                    id="InsideLayoutType"
                    placeholder="number of pages"
                    className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-2 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        > 
        <option >-- Please Select an option --</option>
        <option> Simple Black and White Sketch/Inking</option>
        <option>Full Colour flat 2D illustration (Children and Young Adult Style)</option>
        <option>Full Colour 3D illustration (Adult Comic Book Style)</option>
        <option>Comic Book</option>





        </select>
        
        </div>: null}
   </div>
            



  
   </div>


 
    {/* <button className="bg-green px-10 py-2 rounded-xl mx-auto w-2/3 block  md:mx-0  md:w-1/4 mt-10" onClick={()=>{ saveIt()
        }}>Save</button> */}

<BackNextNav saveIt={saveIt} lastStep={false} rtp={store.get('readyToPrint')?.readyToPrint} canNext ={true} />
        </div>
    )}else{
        
        return readyToPrint? <h1> This step is not relevant for your path</h1>: <h1> You need to fill previous steps </h1>
    }

}
export default step_3
