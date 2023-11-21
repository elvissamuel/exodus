

 const LandingLayout = (props)=>{


    return (
        <div className="p-8 rounded-3xl bg-covr drop-shadow-sm w-full md:w-[70%] lg:w-[65%] h-[120%] md:h-[90vh]  lg:h-[75vh]  md:absolute translate-x-[0%] md:translate-x-[-50%]">
           {/* overflow-y-scroll lg:overflow-y-hidden */}
            {props.children}
        </div>
    )
}


export default LandingLayout