import { ContainerGrid } from "../components/elements/containers"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import store from "store"
import { titleCase } from "../utilityMethods/text"


const Project_Readiness = (props)=>{
  const router = useRouter()
  const [project, setProject] = useState('')
  const [readyToPrint, setReadyToPrint] = useState(false)
  const [workInProgress, setWorkInProgress] = useState(false)
  const [touched, setTouched] = useState(false)
  // console.log(router.asPath)

let tempBook ={}
useEffect(()=>{

  if(router.isReady){
    setProject(router.asPath.split('#')[1])
   let x= store.get('readyToPrint')
    
   if(x){
    setReadyToPrint( x.readyToPrint)
    setWorkInProgress(x.workInProgress)
    
    }

  }
  store.set('tempBook_id', '')
}, [])


useEffect(()=>{

   
    tempBook.projectType = router.asPath.split('#')[1]
    tempBook.readyToPrint = readyToPrint
    tempBook.workInProgress= workInProgress
    store.set('readyToPrint', tempBook)

}, [readyToPrint, workInProgress])





// setRTP()
// }

  const setRTP=(x)=>{
    // alert('aaaa', readyToPrint)
    if( x=='rtp' ){

      setReadyToPrint(true)
      setWorkInProgress(false)
 
    }else {
      setReadyToPrint(false)
      setWorkInProgress(true)

    }
  
    setTouched(true)
  }


    return (
        <div>
             <ContainerGrid gridGap='gap-4' gridCols='md:grid-cols-2 lg:grid-cols-4' classes='mt-[120px] md:mt-[60px] grid-rows-3 text-sm'  width='92%'>
<div className={`${readyToPrint?'bg-blue-100': 'bg-white'} rounded-lg h-[250px] p-5 relative hover:bg-blue-100 mb-8 md:mb-[0px] relative`} onClick={()=>{setRTP('rtp')}} >
  <img src='/img/book.png' className='mx-auto ' />
  <div className='text-blue flex gap-4 items-center  absolute bottom-[10%] left-[50%] translate-x-[-50%] font-bold w-[80%] text-center'> 
  <img src="/img/printer.png" className="w-[40px]  h-[40px] bg-green-100 p-2 rounded-full" /> <p>Ready to Print?</p></div>
  <input className="absolute top-0 right-0 m-3" type='checkbox' checked={readyToPrint} onChange={()=>{
    setRTP('rtp')
  }} />
</div>

<div className={`${workInProgress? 'bg-blue-100': 'bg-white'} rounded-lg h-[250px] p-5 relative hover:bg-blue-100 mb-8 md:mb-[0px] relative`} onClick={()=>{setRTP('wip')}} >
  <img src='/img/book.png' className='mx-auto ' />
  <div className='text-blue flex gap-4 items-center  absolute bottom-[10%] left-[50%] translate-x-[-50%] font-bold w-[80%] text-center'> 
  <img src="/img/wip.png" className="w-[40px]  h-[40px] bg-red-100 p-2 rounded-full" /> <p>Work in progress?</p></div>
  <input className="absolute top-0 right-0 m-3" type='checkbox' checked={workInProgress} onChange={()=>{
   setRTP('wip')
  }} />
</div>

 <div className='bg-white rounded-lg h-[70%] p-5 relative hover:bg-blue-100 mb-8 md:mb-[0px] col-span-2 row-span-3'>
  <img src='/img/bookshelf.png' className='mx-auto w-[80%] ' /> 
  <button className={`${touched? 'bg-blue': 'bg-gray'} rounded-2xl text-white px-8 py-3 text-lg block w-[80%] mx-auto text-center mt-7`} onClick={()=>{
    if(!touched){alert('Please choose an option before proceeding')}
  }} ><a  href={touched?'/step_0':'#'}> {`Customise your ${titleCase(project)}`}</a> </button>
    <p className="text-center mt-6">Do you have questions? <Link href='/contact_us' className="ml-4 text-blue"> Contact Us</Link></p>
    </div>

    </ContainerGrid>
       
        </div>
    )
}


export default Project_Readiness