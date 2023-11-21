import { Container } from "./containers"


export const AnimatedBG =(props)=>{


    return(
        <Container  classes='' >
            <div className='w-[100%] h-[1150px] md:h-[100vh] background ' id='background' >

         {   props.children}
            </div>
        </Container>
    )
}