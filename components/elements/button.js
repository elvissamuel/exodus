
export const Button =(props)=>{

    return <button className={`${props.classes} px-2 py-1`} onClick={props.onClick} >{props.children} </button>
}

export const SwitchButton =(props)=>{        


return(<div className={`w-full   h-[65px] border border-black-200 border-solid  bg-white rounded-lg outline-1 ring-black grid grid-cols-2 gap px-3 py-3 `}>
            
<div  className={`${props.state? 'bg-[#3E4095] text-white' : 'text-blue bg-white'}   px-2 text-center leading-10 rounded-md cursor-pointer  `} onClick={props.onclickLeft} > {props.left} </div>
<div className={` ${!props.state? 'bg-[#3E4095] text-white' : 'text-blue bg-white'}   px-2 text-center leading-10 rounded-md cursor-pointer `} onClick={props.onclickRight} >{props.right}</div>
</div>)

}

 