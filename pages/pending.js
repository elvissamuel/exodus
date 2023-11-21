import { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { useRouter } from "next/router";
import store from "store";
import { createOrderDeep } from "../apicalls/tempBook";
import { toast } from 'react-toastify';
import { sign_in } from "../apicalls/auth";

const Pending = (props)=>{
    const [msg, setMsg] = useState('Please wait while your order is being created, you will be redirected shortly')
    const [subMsg, setSubMsg] = useState('...')
    const [checkUser, setCheckUser]= useState(false)
    const router = useRouter()
    const hash= router.asPath.split('#')

    const{mutate, isLoading, error} = useMutation(sign_in)

    const Order = useQuery("Order", ()=>createOrderDeep(hash[1]));
    toast.closeButton=true

    useEffect(()=>{
        if(Order.isSuccess){
 // console.log('hhhhhhhh',bookDetails.data)
            store.set('order'+ '_' + Order.data.order.id, Order.data.order)
            setMsg('Order created successfully')
            
           // confirm if a user is logged
           setSubMsg('checking if you are logged in')
           let currUser = store.get('currentUser')
           if(currUser){

               // if user is logged in
                 // confirm that the user the order was created for is the same user logged in
                 if(currUser.id == Order.data.user.id){

                     //if same user proceed to dashboard and display invoice
                     router.push(`/dashboard/invoices/${Order.data.order.id}`)
                 }else{

                     // if different user display error message asking user to check their email for log in details
                     setSubMsg('You created the order with an email different from your current log in details, please log out and log in with the information sent to the order email')
                     toast.error('You created the order with an email different from your current log in details, please log out and log in with the information sent to the order email ')
                     
                 }
           }else{
               // if user is not logged in proceed to log the newly created user in 
            setSubMsg('Creating your account and Logging you in ...')
            console.log('iiii', Order.data.user.email)
            mutate({username:Order.data.user.email, password: Order.data.user.email}, {
                onSuccess: (data)=>{
               if(data) {  console.log('mutate sus', data)
                 
          
                  toast.update({ render: "All is good", type: "success", isLoading: false ,  autoClose: 5000});
          
               
                //  setUser(d)
              }
                },
                onError: error => {
                  console.error(error)
                  toast.update(id, { render: "There was an Error", type: "error", isLoading: false,  autoClose: 5000 });
          
                },
                onSettled: (data)=>{
                
                  store.set('currentUser',data)
                  router.push(`/dashboard/invoices/${Order.data.order.id}`)
                }
              })
           }

          
            // console.log('order',Order.data)
        }
     },[Order.isLoading])
 
     useEffect(()=>{
        let currentUser = store

     }, [checkUser])

    return(
        <div>
            <img src="/img/loading.gif" />
           <h1>
            {msg}
            
            </h1> 
            <p>{subMsg}</p>
        </div>
    )

}

export default Pending 