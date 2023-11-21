import {Row} from '../elements/containers'
export const TextImageBanner =(props)=>{


    return (
        <Row classes={`${props.classes} block md:grid grid-cols-5 gap-9`} >
{props.children}
        </Row>
    )
}