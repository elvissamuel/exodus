import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { Container } from "../elements/containers"
import store from "store"
import Link from "next/link"
import React from "react"
import BackNextNav from "../elements/back_next_nav"
import { toast, ToastContainer } from 'react-toastify';
import { useMutation } from "react-query"
import { update_steps } from "../../apicalls/tempBook"
import {titleCase} from '../../utilityMethods/text'
import SideBar from "../elements/sideBar"

 const CreateBookLayout = (props)=>{
    const router = useRouter()
    const scrollRef = useRef(null)
    const {asPath, pathname} = router
    
    const section = pathname.split('/')
    const step0 = section.indexOf('step_0') < 0
const [currentStep, setCurrentStep] = useState('')
const [pastSteps, setPastSteps] = useState([])
const [canNext, setCanNext] = useState(false)
const [bookName, setBookName] = useState('')
const [projectType, setProjectType] = useState('')

const [rtp, setRTP] = useState(false)


// const helpMutate =dt=>{}
const { mutate: updateStep } = useMutation((x)=>{
    // toast.loading('please wait...')
    return update_steps(x)
   },
      
      {
          onSuccess: async (newdata) => {
            toast.success('Saved')
  
          console.log("Sucess", newdata.data)
          
        },
  
        onSettled: (data)=>{
          console.log("Settled", data)
        //   store.set('step_1', data)
        //   router.push(`/ready_to_print/step_2`)
        },
  
         onError: async (newdata) => {
            toast.error('An Error Occurred: Could not save')
          console.log("Logging error", newdata)
          
        }
      }
    );

// useEffect(()=>{
// const data = JSON.parse(localStorage.getItem("step_0"))
// console.log({data})
// },[])


useEffect(()=>{
    let bk = store.get('step_0') 
    let rt = store.get('readyToPrint') 
    let p = store.get('pastSteps') 
    let step_0 = JSON.parse(localStorage.getItem("step_0"))
    setPastSteps(p)
if(bk){
console.log({bk})
    setBookName(bk.book_name)
}
    setProjectType(rt.projectType)
    setRTP(rt.readyToPrint)
   
},[router])

const checkPaststeps = (x, y) =>{

    // console.log('aa', steps)
    
    
    if( pastSteps.indexOf('step_'+x) >= 0) {
        // console.log('aaa',x, pastSteps.indexOf('step_'+x))
        
        return true
    }else{
        // console.log('bbb',x,pastSteps)
        return false
    }
}
useEffect(()=>{
    console.log('rtp from CBL: ', store.get('readyToPrint'))
}, [])

useEffect(()=>{
    if(router.isReady) {
        setCanNext(false)
        setCurrentStep(section[2])
        store.set('currentStep',section[2] )
        // console.log('ff', section[2])
        // scrollRef.current.scrollLeft = 580

        checkPaststeps('2')
        setScroll(section[2])

setPastSteps(store.get('pastSteps') || [])
        

      
    }
},[router])
// useEffect(()=>{
//     if(router.isReady) {

//         setPastSteps(section[2])
//         store.set('currentStep',section[2] )
//     }
// },[router])
    // let currentStep = store.get('currentStep') ? store.get('currentStep') : ''
    // let pastSteps =  store.get('pastSteps') ? store.get('pastSteps') : []

    const setPaststeps = (y)=>{
        // console.log('kkkkk', y)
        let x = pastSteps
        if(x.indexOf(y) < 0){

            x.push(y)
        }
        setPastSteps(x)

        store.set('pastSteps', x)
    }

    const setScroll =(x)=>{
        switch(x){
            case 'step_1':
            scrollRef.current.scrollLeft = 0
            break;
            case 'step_2':
            scrollRef.current.scrollLeft = 160
            break;
            case 'step_3':
            scrollRef.current.scrollLeft = 300
            break;
            case 'step_4':
            scrollRef.current.scrollLeft = 400
            break;
            case 'step_5':
            scrollRef.current.scrollLeft = 660
            break;
            case 'step_6':
            scrollRef.current.scrollLeft = 660
            break;
        }
    }
let g = React.Children.toArray(props.children)
  const el = React.cloneElement(g[1], {checkPaststeps:checkPaststeps, setPaststeps: setPaststeps,currentStep: currentStep, pastSteps: pastSteps  , canNext: canNext, setCanNext: setCanNext, updateStep:updateStep ,  book: store.get('tempBook') })
  useEffect(()=>{
    console.log('from createBookLayout el : ', el.props)
    console.log('from createBookLayout g1 : ', g[1].props)
  }, [])

//   console.log(g)

    if(step0){

        return (
            
            <div className="block  md:overflow-y-hidden lg:grid grid-cols-5 h-[100%] w-full absolute top-[10%] left-0 ">
            <div ref={scrollRef}  className='w-[98%] mx-auto overflow-x-scroll lg:col-span-1 lg:h-full '>
            <SideBar canNext={canNext} checkPaststeps={checkPaststeps} currentStep={currentStep} rtp={rtp} />
            </div>
            <div className="md:col-span-3 lg:col-span-4  py-[6%] lg:overflow-y-scroll ">
            <Container  classes=  'w-[90%]'>
            <ToastContainer />

            <div className="flex gag-8 lg:gap-10 text-sm text-black-300 mb-8 bg-white shadow px-4 lg:px-8 py-5">
            <h1>Project Name:  <span className="text-blue">{bookName} </span></h1>
            <h1>Project Type:  <span className="text-blue">{titleCase(projectType)} </span></h1>
                <h1>Project Readiness: <span className="text-blue">{rtp? 'Ready to print': 'Work in progress'} </span></h1>
            </div>
                {el}

                </Container>
                </div>
                {/* <BackNextNav canNext={canNext} rtp={rtp} /> */}
            </div>
            )
            
       }else{
        
         return  ( <div>
            <ToastContainer />
                {props.children}
            </div>
        )
    }
}


export default CreateBookLayout