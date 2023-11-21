import { Row } from "./containers"


export const Card =(props)=>{


    return(
<Row classes={` ${props.classes} shadow  max-w-[500px] px-2 relative min-h-[200px] hover:shadow-md pt-12`}>
{props.children}
</Row> 
    )
}


export const CardFooter =(props)=>{


    return(
<Row classes={` ${props.classes} w-full px-2 absolute min-h-[30px] bottom-0 left-0 `} mb= '0px'>
{props.children}
</Row> 
    )
}

export const CardHeader =(props)=>{


    return(
<Row classes={` ${props.classes} bg-white w-full px-2 pt-3 absolute min-h-[50px]  top-0 left-0`}   mb= '0px'>
{props.children}
</Row> 
    )
}


