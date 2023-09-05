import { useParams } from "react-router-dom"
import {searchMoviesReviewsById} from "../../Api"
import { useEffect } from "react"

const Reviews =() =>{
    const {movieId} = useParams()
    useEffect(()=>{
        searchMoviesReviewsById(movieId).then(res => console.log(res))
    },[movieId])

    return(
        <div>This is Review Component</div>
    )
}

export default Reviews