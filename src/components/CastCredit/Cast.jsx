import { useParams } from "react-router-dom"
import {searchMoviesCastById} from "../../Api"
import { useEffect } from "react"

const Cast = () =>{
    const {movieId} = useParams()
    useEffect(()=>{
        searchMoviesCastById(movieId).then(res => console.log(res))
    },[movieId])

    return(
        <div>This is Cast Component</div>
    )
}

export default Cast