import { useState } from "react"

export const NavBar =(props)=>{
    const [showMobileMenu, setShowMobileMenu]= useState(false)

    return <nav className={`${props.classes} block  lg:flex lg:justify-between items-center h-[100px]`} 
    style={{width: props.width? props.width: '100%', marginBottom:props.mb? props.mb: '10px' }} 
    onClick={props.onClick} >

        <div className={` ${props.logoClasses} text-center  leading-10 w-[60%]  lg:text-left md:w-[30%] lg:w-[14%] mx-auto md:mx-0 `}>
        {/* md:text-left md:w-100% */}
        {props.logo}
        </div>

        <div className={`block  absolute right-[5%] z-20 top-[5%] lg:hidden ${props.navClasses} `} onClick={()=>{
            setShowMobileMenu(!showMobileMenu)
        }}>
        {props.mobileMenuIcon?props.mobileMenuIcon: <h3 className="float-right">Menu</h3> }
        </div>

        <div className={`hidden lg:block '} w-[40%] ${props.navClasses} `} >

    {props.children} 
        </div>

        {showMobileMenu? <div className={`block absolute z-10 top-0 left-0 w-[60%] h-[100vh] md:w-[100%] md:h-[30%]   lg:hidden ${props.mobileNavbg?props.mobileNavbg:'bg-gray'}`}>
            {props.children}
        </div>: ''}
    </nav>
}