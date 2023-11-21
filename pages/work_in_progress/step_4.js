// import { Container } from "../../components/elements/containers"
import store from "store"
import { useEffect, useState } from "react"
// import BackNextNav from "../../components/elements/back_next_nav"
import Book_Options_Table from "../../components/elements/book_options_tables"
import { useQuery } from "react-query"
import { getTempBook } from "../../apicalls/tempBook"
import BackNextNav from "../../components/elements/back_next_nav"

const step_4 = (props)=>{

    const [termsAndCondition, setTermsAndCondition ] = useState(false)
    const [book, setBook] = useState({})
let book_id= store.get('tempBook_id')
    const bookDetails = useQuery("bookDetails", ()=>getTempBook(book_id));
    useEffect(()=>{
       if(bookDetails.isSuccess){
// console.log('hhhhhhhh',bookDetails.data)
           setBook(bookDetails.data)
       }
    },[bookDetails.isLoading])

    useEffect(()=>{

        if(termsAndCondition){

            props.setCanNext(true)
        }
        
    },[termsAndCondition])

    if(props.checkPaststeps('step_5', props.pastSteps) || true ){
        if(bookDetails.isSuccess  ){

            return(
        
                
                <div >
     
                    <h1  className="font-semibold text-3xl">Project Summary</h1>
                    <div className="  w-full">
                    
                    <div className="md:grid grid-cols-6 gap-4 pt-6">
                    <div className="col-span-2">
                        <img className="w-[50%] md:w-full" src="/img/book2.png" />
                    </div>
                    <div className="col-span-3  mt-10">
                        <div className="w-full mb-5">
        
                            <h1>Book  Name</h1>
                            <input
        
                            value={book.book_name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                        </div>
                     <div className="w-full mb-5">
        
                            <h1> Author's Name</h1>
                            <input
                            value={book.name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                        </div>
                        </div>
                        
                </div>
                    <div className="pb-[200px] w-full  mt-[60px]">
                    <h1 className="text-xl">Quotation Details</h1>
                    <div className="mt-6  h-auto table  w-full">
                       <Book_Options_Table book={book}  />
        
                                <div className="mt-[20px]">
          <input className="mr-4" type='checkbox' checked={termsAndCondition} onChange= {()=>{setTermsAndCondition(!termsAndCondition)}} />
          <label>I have read and agree to the Terms and Conditions</label> 
          </div>   
                    </div>
                    </div>
                    <BackNextNav saveIt={() =>console.log(1)} lastStep={true} rtp={store.get('readyToPrint')?.readyToPrint} canNext ={props.canNext} />
                </div>
                 
        
           
        
                </div>
                
            )
        }else if(bookDetails.isLoading){
            <h1> Please Wait Book Details is being compiled...</h1>
        }
}else{
    return <h1> You need to fill previous steps </h1>
}

}
export default step_4
