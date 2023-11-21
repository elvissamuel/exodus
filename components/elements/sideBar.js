import Link from "next/link"

const SideBar =(props)=>{


    if(props.rtp){

        return(
            <div    className= ' flex flex-nowrap gap-3  lg:block bg-white shadow-md lg:bg-transparent  mx-auto lg:h-full  pl-7  w-[250%] lg:w-full pt-6 pb-2  lg:pt-[20%]  '  >
            <div  className= {`${props.currentStep == 'step_1' ? 'active': ""} p-2 flex gap-8   hover:active:border-r-4 border-blue `}  >
        <Link href={`'/${props.rtp? 'ready_to_print': 'work_in_progress'}'`} className="font-semibold hidden md:block">{props.checkPaststeps(1)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 1}</Link>
        <div className=''>
    
        <h1 className="font-semibold" >  Step 1</h1>
        <Link href={`'/${props.rtp? 'ready_to_print': 'work_in_progress'}'`} className="text-blue">Paper Information</Link>
        </div>
        </div>
    
        <div className={`${props.currentStep == 'step_2' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue`} href="#" >
        <Link href={(props.currentStep == 'step_1' && props.canNext) || props.checkPaststeps(2) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_2`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(2)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 2}</Link>
        <div className={``}> 
            
        <h1 className=" font-semibold" >  Step 2</h1>
        <Link href={(props.currentStep == 'step_1' && props.canNext) || props.checkPaststeps(2) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_2`:'#'} className="text-blue">Book Page Information</Link>
            </div>
        </div>
    
        {/* <div className={`${props.currentStep == 'step_3' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue`} href="#" >
        <Link href={(props.currentStep == 'step_2' &&  props.canNext) || props.checkPaststeps(3) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_3`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(3)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 3}</Link>
        <div className={``}> 
            
        <h1 className="  font-semibold" >  Step 3</h1>
        <Link href={(props.currentStep == 'step_2' &&  props.canNext) || props.checkPaststeps(3) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_3`:'#'} className="text-blue">Book service</Link>
            </div>
        </div> */}
    
        <div className={`${props.currentStep == 'step_3' ? 'active': ""} p-2  flex gap-8 hover:active:border-r-4 border-blue`} href="#" >
        <Link href={(props.currentStep == 'step_2' &&  props.canNext) || props.checkPaststeps(3) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_3`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(3)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 3}</Link>
        <div className= {``}>
            
        <h1 className=" font-semibold" >  Step 3</h1>
        <Link href={(props.currentStep == 'step_2' &&  props.canNext) || props.checkPaststeps(3) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_3`:'#'} className="text-blue">Book Cover Information</Link>
            </div>
        </div>
    
        <div className={`${props.currentStep == 'step_4' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue `} href="#" >
        <Link href={(props.currentStep == 'step_3' &&  props.canNext) || props.checkPaststeps(4) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_4`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(4)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 4}</Link>
        <div className={``}> 
            
        <h1 className="  font-semibold" >  Step 4</h1>
        <Link href={(props.currentStep == 'step_3' &&  props.canNext) || props.checkPaststeps(4) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_4`:'#'} className="text-blue">Delivery Option</Link>
            </div>
        </div>
    
        <div className={`${props.currentStep == 'step_5' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue `} href="#" >
        <Link href={(props.currentStep == 'step_4' &&  props.canNext) || props.checkPaststeps(5) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_5`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(5)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 5}</Link>
        <div className={``}>
            
        <h1 className="  font-semibold" >  Step 5</h1>
        <Link href={(props.currentStep == 'step_4' &&  props.canNext) || props.checkPaststeps(5) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_5`:'#'} className="text-blue">Confirm Order</Link>
            </div>
        </div>
    
        
        
    </div> 
        )
    }else{
       return (
        <div    className= ' flex flex-nowrap gap-3  lg:block bg-white shadow-md lg:bg-transparent  mx-auto lg:h-full  pl-7  w-[250%] lg:w-full pt-6 pb-2  lg:pt-[20%]  '  >
        <div  className= {`${props.currentStep == 'step_1' ? 'active': ""} p-2 flex gap-8   hover:active:border-r-4 border-blue `}  >
    <Link href={`'/${props.rtp? 'ready_to_print': 'work_in_progress'}'`} className="font-semibold hidden md:block">{props.checkPaststeps(1)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 1}</Link>
    <div className=''>

    <h1 className="font-semibold" >  Step 1</h1>
    <Link href={`'/${props.rtp? 'ready_to_print': 'work_in_progress'}'`} className="text-blue">Book Information</Link>
    </div>
    </div>

    <div className={`${props.currentStep == 'step_2' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue`} href="#" >
    <Link href={(props.currentStep == 'step_1' && props.canNext) || props.checkPaststeps(2) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_2`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(2)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 2}</Link>
    <div className={``}> 
        
    <h1 className=" font-semibold" >  Step 2</h1>
    <Link href={(props.currentStep == 'step_1' && props.canNext) || props.checkPaststeps(2) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_2`:'#'} className="text-blue">Services</Link>
        </div>
    </div>

    <div className={`${props.currentStep == 'step_3' ? 'active': ""} p-2  flex gap-8 hover:active:border-r-4 border-blue`} href="#" >
    <Link href={(props.currentStep == 'step_2' &&  props.canNext) || props.checkPaststeps(3) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_3`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(3)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 3}</Link>
    <div className= {``}>
        
    <h1 className=" font-semibold" >  Step 3</h1>
    <Link href={(props.currentStep == 'step_2' &&  props.canNext) || props.checkPaststeps(3) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_3`:'#'} className="text-blue">Inside Layout</Link>
        </div>
    </div>

    <div className={`${props.currentStep == 'step_4' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue `} href="#" >
    <Link href={(props.currentStep == 'step_3' &&  props.canNext) || props.checkPaststeps(4) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_4`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(4)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 4}</Link>
    <div className={``}> 
        
    <h1 className="  font-semibold" >  Step 4</h1>
    <Link href={(props.currentStep == 'step_3' &&  props.canNext) || props.checkPaststeps(4) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_4`:'#'} className="text-blue">Confirm Order</Link>
        </div>
    </div>

    {/* <div className={`${props.currentStep == 'step_5' ? 'active': ""} p-2 flex gap-8 hover:active:border-r-4 border-blue `} href="#" >
    <Link href={(props.currentStep == 'step_4' &&  props.canNext) || props.checkPaststeps(5) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_5`:'#'} className="font-semibold hidden md:block">{props.checkPaststeps(5)? <img className='w-5 h-5 ml-[-10px]'  src="/img/checked.png"/>: 5}</Link>
    <div className={``}>
        
    <h1 className="  font-semibold" >  Step 5</h1>
    <Link href={(props.currentStep == 'step_4' &&  props.canNext) || props.checkPaststeps(5) ?`/${props.rtp? 'ready_to_print': 'work_in_progress'}/step_5`:'#'} className="text-blue">Confirm Order</Link>
        </div>
    </div> */}

    
    
</div> 
       )
    }

}

export default SideBar