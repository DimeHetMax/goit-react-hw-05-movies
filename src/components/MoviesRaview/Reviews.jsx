import { useParams } from "react-router-dom"
import {searchMoviesReviewsById} from "../../Api"
import { useEffect, useState } from "react"
import Loader from "components/Loader/Loader";
import {ContainerReview, Title, Text} from "./Reviews.styled"
const Reviews =() =>{
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  
    console.log("review array",reviews)
    useEffect(()=>{
        setLoading(true)
        
        searchMoviesReviewsById(movieId)
        .then(res => setReviews(res.results))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },[movieId])
    if (error) {
        return <div>Error: {error.message}</div>;
    } 

    return(
        <div>
        {loading 
            ?( <Loader />)
            :(<ul>
                {reviews.length === 0 
                    ?(<li><div>No reviews to this film</div></li>)
                    :(reviews.map(({id,author,content}) => 
                        <li key={id}>
                            <ContainerReview >
                                <Title>{author}</Title>
                                <Text>{content}</Text>
                            </ContainerReview>
                        </li>
                        )
                    )}
                </ul>)
        }
        </div>
    )
}

export default Reviews