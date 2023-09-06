import { RotatingLines } from  'react-loader-spinner'
import {Container} from "./Loader.styled"
const Loader = ()=>{
    return(
        <Container>
            <RotatingLines
                strokeColor="#ffa500"
                strokeWidth="5"
                animationDuration="0.75"
                width="40"
                visible={true}
            />
        </Container>
       
    )
}

export default Loader