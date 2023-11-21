import {useMutation} from 'react-query';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { sign_in } from "../../apicalls/auth";
import { useRouter } from 'next/router'
import store from "store";
import { useEffect, useState } from "react";

// import UserStore from '../../store/userStore'

  
const  SignIn =()=>{
  const { asPath } = useRouter();
  const[signupMSG, setSignupMSG] =useState('')
  
  
  const { register, handleSubmit,reset , formState: { errors } } = useForm()
  const{mutate, isLoading, error} = useMutation(sign_in)
  const router = useRouter()
  useEffect(()=>{
    const fromSignUp = asPath.split('#')[1]
    if(fromSignUp == 'from_signup'){
setSignupMSG('Your Account Was Created Successfully, Please Log in Below')
    }
    
})
// const setCurrentUser = UserStore((state)=> state.setCurrentUser)

const onnSubmit = x =>{
   console.log(x)
   

    const id = toast.loading("Please wait...")
    //do something else
toast.closeButton=true

    mutate(x, {
      onSuccess: (data)=>{
     if(data) {  console.log('mutate sus', data)
       

        toast.update(id, { render: "All is good", type: "success", isLoading: false ,  autoClose: 5000});

     
      //  setUser(d)
    }
      },
      onError: error => {
        console.error(error)
        toast.update(id, { render: "There was an Error", type: "error", isLoading: false,  autoClose: 5000 });

      },
      onSettled: (data)=>{
      
        store.set('currentUser',data)
        router.push(`/dashboard`)
      }
    })
    
  }

    return (
      <>
      <ToastContainer />
      <h1>{signupMSG}</h1>
      
        <form onSubmit={handleSubmit(onnSubmit)} className='p-6 fixed left-[50%] top-[50%] w-1/3 h-[250px] bg-blue-100 shadow translate-x-[-50%] translate-y-[-50%]' >
            <h1 className='text-center'>Sign In</h1>
            <div>

            <label>username</label>   
<input className='w-full  block mb-4 mt-2' type='text' {... register('username', { required: true})}  />
            </div>
            <div>
              
<label>password</label>   
<input className='w-full  block mb-4 mt-2' type='password' {... register('password', { required: true})} />
              </div>
<input className='bg-blue w-2/3 block mx-auto text-white'  value='Submit' type='submit' />


        </form>
      </>
    )
}


export default SignIn