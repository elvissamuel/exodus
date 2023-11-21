
import { Container, ContainerGrid, Row } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
import { Tabs, Tablist } from "../../components/elements/tabs"
import { arrowLeft, arrowRight } from "../../components/svg"
import BackNextNav from "../../components/elements/back_next_nav"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { update_steps } from "../../apicalls/tempBook"


const Step_1 = (props)=>{
const router = useRouter()
    


// tab titles
    const tbs = [
        {name: 'Paper Type', id: 1, },
        {name: 'Binding', id: 2, },
        {name: 'Print Type', id: 3, }
    ]


    // data tracking

    const [save, setSave] = useState(false)
    const [whitePaper, setWhitePaper] = useState(false)
    const [creamPaper, setCreamPaper] = useState(false)
    const [glossyPaper, setGlossyPaper] = useState(false)
    const [BWprint, setBWprint] = useState(false)
    const [Colorprint, setColorprint] = useState(false)
    const [Bothprint, setBothprint] = useState(false)
    const [paperBinding, setPaperBinding] = useState(false)
    const [stapleBinding, setStapleBinding] = useState(false)
    const [hardBinding, setHardBinding] = useState(false)
    useEffect(()=>{
        setSave(false)
       if(router.isReady){ let t  = store.get('step_1') 
     if(t){setWhitePaper(t.whitePaper)
        // console.log('kkk',t)
        setCreamPaper(t.creamPaper)
        setGlossyPaper(t.glossyPaper)
        setBWprint(t.BWprint)
        setColorprint(t.Colorprint)
        setBothprint(t.Bothprint)
        setPaperBinding(t.paperBinding)
        setStapleBinding(t.stapleBinding)
        setHardBinding(t.hardBinding)}
}
    }, [router.isReady])


   const saveIt= ()=>{


    
       if((whitePaper || creamPaper || glossyPaper) && (BWprint || Colorprint || Bothprint) && (paperBinding || stapleBinding || hardBinding) ){
        //    console.log('jjkkkkk')
           props.setCanNext(true)
           props.setPaststeps('step_1')
       }
let x = {whitePaper, creamPaper, glossyPaper, BWprint, Colorprint, Bothprint, paperBinding, stapleBinding, hardBinding}

    

    store.set('step_1',  x)
    let qr = {}
    qr.data = JSON.stringify(x)
    qr.id = store.get("tempBook_id")
    props.updateStep(qr)
    setSave(true)
 
            }

        
    const choosePaper =(x)=>{
        switch(x){
            case 0 :
                setWhitePaper(true)
                setCreamPaper(false)
                setGlossyPaper(false)
                break

            case 1:
                setWhitePaper(false)
                setCreamPaper(true)
                setGlossyPaper(false)
                break
            case 2:
             setWhitePaper(false)
                setCreamPaper(false)
                setGlossyPaper(true)   
                break

        }
// props.setActiveTab(2)
    }


    const choosePrint =(x)=>{
        switch(x){
            case 0 :
                setBWprint(true)
                setColorprint(false)
                setBothprint(false)
                break

            case 1:
                setBWprint(false)
                setColorprint(true)
                setBothprint(false)
                break
            case 2:
                setBWprint(false)
                setColorprint(false)
                setBothprint(true)
                break

        }

    }

    const chooseBinding =(x)=>{
        switch(x){
            case 0 :
                setPaperBinding(true)
                setStapleBinding(false)
                setHardBinding(false)
                break

            case 1:
                setPaperBinding(false)
                setStapleBinding(true)
                setHardBinding(false)
                break
            case 2:
                setPaperBinding(false)
                setStapleBinding(false)
                setHardBinding(true)  
                break

        }

    }


    
    return(
        <div>
        <ContainerGrid  gridCols='md:grid-cols-3 lg:grid-cols-6 ' classes='relative' >

<div className="md:col-span-2 lg:col-span-4 ">
    
    <Row>
        <h1 className="mediumText">Paper Information</h1>
    </Row>

    <Row>
    <Tabs  defaultTab='1' classes=' p-[20px] text-lg'  >
    <Tablist id='_tabListTabControl_' activeTabs='x' activeTabClass='bg-blue text-white' inActiveTabClass='bg-white text-blue border-gray border-2' > 

    {tbs.map(t=>{
      return  <h1 data={t} className="" key={t.name}>{t.name}</h1>
    })}

    </Tablist>
    
<div id='1'> 
<Row classes='pt-10 w-full md:w-[60%]'>
<div className={`flex justify-between border-2 border-gray rounded-xl px-4 py-3 ${whitePaper? 'bg-blue':'bg-white'}`} onClick={()=>{ 
     choosePaper(0)
    
    }} >
    <input type='checkbox' checked={whitePaper} onChange={()=>{
        choosePaper(0)
    }} />
<div className="w-[90%] flex justify-between"> <p className={`${whitePaper? 'text-white': 'text-black-400'} leading-10`} >White</p> <span className={`p-3 rounded-full w-[40px] h-[40px] text-center leading-4  ${whitePaper? 'text-blue bg-white': 'text-white bg-blue'} `}>?</span> </div></div>

<div className={`flex justify-between border-2 border-gray rounded-xl px-4 py-3 mt-5 ${creamPaper? 'bg-blue':'bg-white'}`} onClick={()=>{
    choosePaper(1)
}} >
    <input type='checkbox' checked={creamPaper} onChange={()=>{
        choosePaper(1)
    }} />
<div className="w-[90%] flex justify-between"> <p className={`${creamPaper? 'text-white': 'text-black-400'} leading-10`} >Cream</p> <span className={`p-3 rounded-full w-[40px] h-[40px] text-center leading-4  ${creamPaper? 'text-blue bg-white': 'text-white bg-blue'} `}>?</span> </div></div>

<div className={`flex justify-between border-2 border-gray rounded-xl px-4 py-3 mt-5 ${glossyPaper? 'bg-blue':'bg-white'}`} onClick={()=>{
    choosePaper(2)
}} >
    <input type='checkbox'  className="p-3" checked={glossyPaper} onChange={()=>{   choosePaper(2)     }} />
<div className="w-[90%] flex justify-between"> <p className={`${glossyPaper? 'text-white': 'text-black-400'} leading-10`} >Glossy (135 grms)</p> <span className={`p-3 rounded-full w-[40px] h-[40px] text-center leading-4  ${glossyPaper? 'text-blue bg-white': 'text-white bg-blue'} `}>?</span> </div></div>
</Row>
</div>
<div id='2'>
<Row classes='pt-10 w-full md:w-[90%]'>
<ContainerGrid gridCols='md:grid-cols-2' gridGap='gap-10' classes='block md:grid  '>
    <div className={`grid grid-cols-3 ${paperBinding? 'bg-blue text-white' :'bg-gray-100'}  px-6 gap-8 border-gray border-2 rounded-lg py-4  shadow relative  cursor-pointer `} onClick={()=>{
        chooseBinding(0)
    }} >
        <img src="/img/paper_binding.jpg" />
        <p className="col-span-2" >Paper Binding</p>
          <input type='checkbox'  className=" absolute bottom-0 right-0 m-2" checked={paperBinding} onChange={()=>{   chooseBinding(0)     }} />
         </div>

         <div className={`grid grid-cols-3 ${stapleBinding? 'bg-blue text-white' :'bg-gray-100'} mb-3 mt-3  px-6 gap-8 border-gray border-2 rounded-lg py-4  shadow relative cursor-pointer  `} onClick={()=>{
            chooseBinding(1)
         }} >
        <img src="/img/staple_binding.png" />
        <p className="col-span-2" >Staple Sticthing</p>
          <input type='checkbox'  className=" absolute bottom-0 right-0 m-2" checked={stapleBinding} onChange={()=>{   chooseBinding(1)     }} />
         </div>

         <div className={`grid grid-cols-3 ${hardBinding? 'bg-blue text-white' :'bg-gray-100'}  px-6 gap-8 border-gray border-2 rounded-lg py-4  shadow relative cursor-pointer  `} onClick={()=>{
            chooseBinding(2)
         }} >
        <img src="/img/hard_cover_binding.png" />
        <p className="col-span-2" >Hard Back</p>
          <input type='checkbox'  className=" absolute bottom-0 right-0 m-2" checked={hardBinding} onChange={()=>{   chooseBinding(2)     }} />
         </div>
</ContainerGrid>

</Row>
</div>
<div id='3'> 
<Row classes='pt-10 w-full md:w-[60%]'>
<div className={`flex justify-between border-2 border-gray rounded-xl px-4 py-3 ${BWprint? 'bg-blue':'bg-white'}`} onClick={()=>{ choosePrint(0)}}>
    <input type='checkbox'  value={BWprint} checked={BWprint} onChange={()=>{
        choosePrint(0)
    }} />
<div className="w-[90%] flex justify-between"> <p className={`${BWprint? 'text-white': 'text-black-400'} leading-10`} >Black & White</p> <span className={`p-3 rounded-full w-[40px] h-[40px] text-center leading-4  ${BWprint? 'text-blue bg-white': 'text-white bg-blue'} `}>?</span> </div></div>

<div className={`flex justify-between border-2 border-gray rounded-xl px-4 py-3 mt-5 ${Colorprint? 'bg-blue':'bg-white'}`} onClick={()=>{ choosePrint(1)}}>
    <input type='checkbox' value={Colorprint} checked={Colorprint} onChange={()=>{
        choosePrint(1)
    }} />
<div className="w-[90%] flex justify-between"> <p className={`${Colorprint? 'text-white': 'text-black-400'} leading-10`} >Colored Prints</p> <span className={`p-3 rounded-full w-[40px] h-[40px] text-center leading-4  ${Colorprint? 'text-blue bg-white': 'text-white bg-blue'} `}>?</span> </div></div>

<div className={`flex justify-between border-2 border-gray rounded-xl px-4 py-3 mt-5 ${Bothprint? 'bg-blue':'bg-white'}`} onClick={()=>{ choosePrint(2)}}>
    <input type='checkbox'  value={Bothprint} className="p-3" checked={Bothprint} onChange={()=>{
        choosePrint(2)
    }} />
<div className="w-[90%] flex justify-between"> <p className={`${Bothprint? 'text-white': 'text-black-400'} leading-10`} >Black & White with Colored Prints</p> <span className={`p-3 rounded-full w-[40px] h-[40px] text-center leading-4  ${Bothprint? 'text-blue bg-white': 'text-white bg-blue'} `}>?</span> </div></div>
</Row>

</div>
</Tabs>

 
    </Row>
</div>
<div className="md:col-span-1 lg:col-span-2 relative">
    <img src='/img/bookshelff.png' className="absolute  md:top-[50%] left-0 md:left-[-30%] translate-y-[-30%] lg:translate-y-[-50%] w-[150%]" />
</div>
        <div className='md:mt-[-100px] mb-[50px] absolute bottom-[-5%] md:bottom-[10%] left-0 w-1/2 '>
    <button className="bg-green px-10 py-2 rounded-xl mx-auto w-2/3 block  md:mx-0  md:w-1/3" onClick={()=>{ saveIt()
        }}>Save</button>
</div>
        </ContainerGrid>
        </div>
    )
}
export default Step_1