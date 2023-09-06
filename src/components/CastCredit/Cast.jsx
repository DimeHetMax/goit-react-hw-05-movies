import { useParams } from "react-router-dom"
import {searchMoviesCastById} from "../../Api"
import { useEffect, useState } from "react"
import Loader from "components/Loader/Loader"
import {Container, Card, Box, Text} from "./Cast.styled"

const Cast = () =>{
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  
    useEffect(()=>{
        setLoading(true)

        searchMoviesCastById(movieId)
        .then(res => setMovie(res.cast))
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
                :(<Container>
                    {movie.length === 0 
                        ?(<li><div>No Cast information</div></li>)
                        :(movie.map(({id, original_name, popularity, profile_path, character})=> 
                            <li key={id}>
                                <Card>
                                    <img src={profile_path ?("https://image.tmdb.org/t/p/w200/"+ profile_path):("https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png")} alt={original_name} />
                                    <h3>{original_name}</h3>
                                    <Text>Character: {character}</Text>
                                    <Text>Popularity: {(popularity).toFixed(0)}%</Text>
                                </Card>
                            </li>
                            )
                        )}
                        <Box><span></span></Box> 
                        <Box><span></span></Box>  
                </Container>)
            } 
        </div>
    )
}

export default Cast