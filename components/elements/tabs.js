import React, { useEffect, useLayoutEffect, useState } from "react"
import TabStore  from "../../store/store"


export const Tabs =(props)=>{
    
    const activeTab = TabStore((state)=>state.activeTab)
    const setActiveTab = TabStore((state)=>state.setActiveTab)
 

    // const [activeTab, setActiveTab]= useState('')
    let elements = React.Children.toArray(props.children)
    const prepEl = elements.map(el=>{
        return   React.cloneElement(el, {activeTab,setActiveTab })
    })
    const tablist = prepEl.filter(el=>{
   
        return el.props.id == '_tabListTabControl_'
            })
   
    useEffect(()=>{
        setActiveTab(props.defaultTab)
    }, [])
  const elemnt=  elements.filter(el=>{
return el.props.id == activeTab
    })

    const element = elemnt.map(el=>{
        return   React.cloneElement(el, {activeTab,setActiveTab })
    })
    
    //  console.log('pop', element)
    return (
        <div className={`relative    p-[20px] min-h-[300px] md:min-h-[500px] ${props.classes}`}>
{/* border border-gray border-t-0 */}
            <div className="">
                {tablist}
            </div>
       
            <div className="mt-[10px] py-20px  md:mt-[10px] md:py-[0px] md:bg-transparent" >{element} </div>
        </div>
    )
}

export const Tablist =(props)=>{
    let elements = React.Children.toArray(props.children)
    const [grd, setgrd]= useState(2)
    useEffect(()=>{
        setgrd(elements.length)
    },[elements.length])
    // console.log('hhh',props.activeTab)
    
    const chdClick= (x)=>{
        props.setActiveTab(x)
        // console.log(x,' has been clicked')
    }
    return(
        <div  className={` w-full block  md:grid md:absolute md:top-0 md:left-0  md:mt-[-20px] `} style={{gridTemplateColumns: `repeat(${grd}, minmax(0, 1fr))`}}>
             {
                elements.map(el=>{
                    return React.cloneElement(el, { onClick: ()=>{chdClick(el.props.data.id)}, className: el.props.data.id==props.activeTab? props.activeTabClass?props.activeTabClass + ' pl-[20px] pr-[5px] py-2 cursor-pointer  border-l ':'bg-gray' :props.inActiveTabClass?props.inActiveTabClass + ' pl-[20px] pr-[5px] py-2 cursor-pointer  border-l ':'bg-gray-100' })
                })
             }
        </div>
    )
}