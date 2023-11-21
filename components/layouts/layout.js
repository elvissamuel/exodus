import MainLayout from "./mainLayout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import DashboardLayout from "./dashboardLayout"
import { NavBar } from "../elements/navbar"



import { MenuIcon } from '../svg'
import LandingLayout from "./LandingLayout"
import CreateBookLayout from "./CreateBookLayout"
import store from "store"
import { pingUser, sign_out } from "../../apicalls/auth"
import { useMutation, useQuery } from "react-query"
import { toast } from "react-toastify"
import Link from "next/link"


const Layout =(props)=>{
const router = useRouter()
const {asPath, pathname} = router
const [signedIn, setSigngedIn] = useState(false)
const [currentUser, setCurrentUser] = useState({})
const section = pathname.split('/')

useEffect(()=>{
  console.log('This is the url from main layout: ', pathname)
  console.log('This is the url from main layout22: ', section)
}, [])

// const setCurrentUser = UserStore((state)=>state.setCurrentUser)
const{mutate:confirmUser} = useMutation(pingUser, {
  onError:(e)=>{
    console.log('ppppppppp', e)
    store.remove('currentUser')
    setCurrentUser({})
    setSigngedIn(false)
  },
  onSuccess: (data)=>{
    console.log('success', data)
  }
})
// const confirmUser = useQuery('pingUser',ping)
useEffect( ()=>{
  const user = store.get('currentUser')
if(user) { confirmUser(user.access_token)
  setCurrentUser(user)}else{
    
    setCurrentUser({})
  }
}, [router.isReady])




const {mutate:signOut} = useMutation("logout", sign_out, {
    onSuccess:()=>{
toast('Logged Out Successfully')
    },
    onError:(e)=>{console.log('error Logging out', e)}
});
useEffect(()=>{
    if (router.isReady){
        store.set('currentStep', section[2])
    //    console.log('kkk', router)
    let bk = store.get('step_0')
    console.log({bk},"jwjwiijwjwjiieuyebejnejnje")
  if(bk){
  console.log({bk})
    // setBookName(bk.book_name)
  }
}
},[router.isReady])

useEffect(()=>{
    let us = store.get('currentUser')
    if(us){
        confirmUser(us.access_token)
    setCurrentUser(us)

    setSigngedIn(true)
}else{
    setCurrentUser({})
    setSigngedIn(false)
}
},[router.pathname], currentUser)

useEffect(()=>{
    let usrr = store.get('currentUser')
    setCurrentUser(usrr)
}, [])

    return (
        
<div className="bg-img h-[130vh] md:h-[160vh]  lg:h-[100vh]  md:absolute  lg:overflow-hidden">
<NavBar mb='0px' logo={<a href='/dashboard'> <img src='/img/magicwand.png' className="w-[30%]  lg:w-[60%] md:ml-10 text-center pt-4 mx-auto " /> </a>} width='100%' classes=' absolute md:fixed top-0 left-0 z-[1000] mx-auto bg-[#F9F9F9] shadow border-b' logoClasses=''  mobileMenuIcon={<MenuIcon classes='hidden'/>} >

<div className="flex gap-4 items-center text-sm"> 
    <Link href='/'>
        <button className='bg-blue text-white shadow rounded-lg px-6 py-2 ]' >Create a new Book</button></Link>
{signedIn && currentUser?
   <>
   <img className="w-[30px]" src={currentUser.avatar_url}/> {currentUser.name}
   <p onClick={()=>router.push('/dashboard')} className="cursor-pointer"> My Dashboard </p>
    <p className="cursor-pointer" onClick={()=>{
        console.log('opopo ', 'rt')
        signOut()
        router.push('/auth/signin')
    }}>Sign Out </p>
   </> :
   <Link href='/auth/signin'>Sign In </Link>
}
    </div>
 </NavBar>
 {
(section[1] == 'dashboard' &&  section[2] != 'invoices') || section[1] == 'ready_to_print' || section[1] == 'work_in_progress' || section[1] == 'stationaries'  ?
 <div    className= 'hidden lg:block lg:bg-[#F9F9F9] shadow  lg:h-[102%]  pl-7  lg:w-[20%] mt-[-10px] '  ></div> : ''
 }
 

      { section.indexOf('dashboard') == 1? 
      <DashboardLayout section={section} signedIn={signedIn} currentUser={currentUser}>{props.children} </DashboardLayout>: 
      section.indexOf('auth') == 1?
      <div><h1>Auth Layout</h1> {props.children}  </div>: 
      section[1] == '' || section.indexOf('project_readiness') == 1  ?
      <LandingLayout signedIn={signedIn} currentUser={currentUser}>{props.children}</LandingLayout> : 
      <CreateBookLayout signedIn={signedIn} currentUser={currentUser}>  {props.children}</CreateBookLayout>} 
 </div>
       
    )
}

export default Layout