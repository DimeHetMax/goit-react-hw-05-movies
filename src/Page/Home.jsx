import { useEffect, useState } from "react"
import {fetchedTrandingMovies} from "../Api"
import { Link } from "react-router-dom"
import { Container,Title,Card,Text,Box} from "./Home.styled"
const Home = () =>{
    const [name, setName] =useState([])
    useEffect(()=>{
       fetchedTrandingMovies().then(res => setName(res))
    },[])
    return(
        <div>
            <Title>Trending today</Title>
            <Container>
                {name.map(({original_title, id,poster_path,backdrop_path, original_name }) => 
                <li key={id}>
                    <Link key={id} to={`movies/${id}`}>
                        <Card>
                            <img src={"https://image.tmdb.org/t/p/w200/"+poster_path} alt={backdrop_path} />
                             <Text> {original_title ? (original_title) : (original_name)}</Text>
                        </Card>
                    </Link>
                </li>)}    
                <Box><span></span></Box>    
            </Container>
           
        </div>
    )
}

export default Home
