import { useEffect, useRef, useState } from "react"
import {fetchedTrandingMovies} from "../Api"
import { Link, useLocation } from "react-router-dom"
import Loader from "components/Loader/Loader"
import { Container,Title,Card,Text,Box} from "./Home.styled"
const Home = () =>{
    const [name, setName] =useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  
    const location = useLocation()
    const locationRef= useRef(location)
    // console.log("location in Home",location)
    useEffect(()=>{
        setLoading(true)

       fetchedTrandingMovies()
       .then(res => setName(res))
       .catch((error) => setError(error))
       .finally(() => setLoading(false))
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
    } 

    return(
        <div>
            <Title>Trending today</Title>
            {loading  
                ?( <Loader />)
                :(<div>
                    <Container>
                        {name.map(({original_title, id,poster_path,backdrop_path, original_name }) => 
                        <li key={id}>
                            <Link to={`movies/${id}`} state={locationRef.current}>
                                <Card>
                                    <img src={"https://image.tmdb.org/t/p/w200/"+poster_path} alt={backdrop_path} />
                                    <Text> {original_title ? (original_title) : (original_name)}</Text>
                                </Card>
                            </Link>
                        </li>)}    
                        <Box><span></span></Box>    
                    </Container>
                </div>)}
        </div>
    )
}

export default Home
