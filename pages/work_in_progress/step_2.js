import { Container } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
import BackNextNav from "../../components/elements/back_next_nav"
import { SwitchButton } from "../../components/elements/button"
import { useForm } from "react-hook-form";

const step_2WIP = (props)=>{

    const [CoverDesignType, setCoverDesignType] = useState('')
    const [CoverDesign, setCoverDesign] = useState(false)
    const [Editing, setEditing] = useState(false)
    const [ProofReading, setProofReading] = useState(false)
    const [ISBN, setISBN] = useState(false)
    const [onlineSale, setOnlineSale] = useState(false)
    const [save, setSave] = useState(true)

    useEffect(()=>{
        let x= store.get('step_2_wip')
        if(x){
                setEditing(x.Editing)
                setProofReading(x.ProofReading)
                setISBN(x.ISBN)
                setOnlineSale(x.onlineSale)
                setEditing(x.onlineSale)
                setCoverDesign(x.CoverDesign)
                setCoverDesign(x.CoverDesignType)
        }
    }, [])

        props.setPaststeps('step_2')
    useEffect(()=>{
       
        props.setCanNext(true)
    },[])


    const saveIt=()=>{
      
let data = {Editing, ProofReading, ISBN,onlineSale, CoverDesignType, CoverDesign}
       
   
        store.set('step_2_wip', data)
        let qr = {}
        qr.data = data
        qr.id = store.get("tempBook_id")
        props.updateStep(qr)
        setSave(true)
    }
    
    // console.log('ade',props.checkPaststeps('1', props.pastSteps))
    if(props.checkPaststeps('1', props.pastSteps) ){

    // console.log('ooop', rtp)
    
    
    return(

        
         <div className="mb-[200px]">
            <h1 className=" font-semibold  text-3xl"> Services</h1>
            <div className="w-full md:w-[70%] lg:w-full mt-[40px] lg:mt-[0px]">
            < div className=" md:grid lg:grid grid-cols-2 pt-10 gap-[16%] relative h-full">
                <div>
                    <h1 className=" ">Editing</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setEditing(!Editing)}}
 onclickRight= {()=>{setEditing(!Editing)}}
 state={Editing}
  />
                    </div>
                    <div>
                    <h1 className=" ">ProofReading</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setProofReading(!ProofReading)}}
 onclickRight= {()=>{setProofReading(!ProofReading)}}
 state={ProofReading}
  />
                    </div>

                    <div>
                    <h1 className=" ">ISBN</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setISBN(!ISBN)}}
 onclickRight= {()=>{setISBN(!ISBN)}}
 state={ISBN}
  />
                    </div>
                    <div>
                    <h1 className=" ">Online Sale (Amazon)</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setOnlineSale(!onlineSale)}}
 onclickRight= {()=>{setOnlineSale(!onlineSale)}}
 state={onlineSale}
  />
                    </div>

                    <div>
                    <h1 className=" ">Do you require Cover Design?</h1>
                <SwitchButton left='Yes' right='No'
 onclickLeft={()=>{setCoverDesign(!CoverDesign)}}
 onclickRight= {()=>{setCoverDesign(!CoverDesign)}}
 state={CoverDesign}
  />

  {CoverDesign? <div>        
<h1 className= 'text-black-300 mt-6' >Please Choose an option</h1> 
                    <select
                 
                  onChange={(e)=>{
                    setCoverDesignType(e.target.value)
                  }}
                    name="CoverDesignType"
                    id="CoverDesignType"
                    placeholder="number of pages"
                    className=" w-full lg:w-[80%] rounded-md border border-black-200 mt-2 bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        > 
        <option >-- Please Select an option --</option>
        <option>Graphics with Online Images/author supplied image</option>
        <option>Graphics with Premium Paid Images</option>
        <option>Artist Illustrated</option>
        
        </select>
        
        </div>: null}
                    </div>

    </div>
   <div className="mt-[15%]">
   {/* <button className="bg-green px-10 py-2 rounded-xl mx-auto w-2/3 block  md:mx-0  md:w-1/4" onClick={()=>{ saveIt()
        }}>Save</button> */}
      <BackNextNav saveIt={saveIt} lastStep={false} rtp={store.get('readyToPrint')?.readyToPrint} canNext ={true} />
   </div>
   </div>

        </div>
    )}else{
        return <h1> You need to fill previous steps </h1>
    }

}
export default step_2WIP
