import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Button from "components/Button/Button"
import {searchMovies} from "../Api"
import {Container,Card,Box, Text,TextSpan, Form, Input, ButtonInput} from "./Movie.styled"

const Movies = () =>{
    const [movieName, setMovieName] = useState("")
    const [movie, setMovie] = useState([])
    const [page,setPage] = useState(1)
    const location = useLocation()
    const locationRef= useRef(location)
    // console.log("Location in MOvie",location)
    // console.log("locationRef",locationRef)

    const onSubmit =(event) =>{
        event.preventDefault()
        onChange(event.target.name.value)
    }
    const onChange =(query)=>{
        setMovieName(query)
        setPage(1)
        setMovie([])
    }
    const addMore = () =>{
        setPage(page + 1)
    }
    useEffect(()=>{
        searchMovies(movieName, page).then(res => setMovie(prevState =>{return [...prevState, ...res]}))
    },[movieName,page])

    return(
        <div>
            
            <Text>We are looking for:  <TextSpan>{movieName}</TextSpan></Text>
            <Form onSubmit={onSubmit}>
                <Input type="text" name="name"/>
                <ButtonInput type="submit">search</ButtonInput>    
            </Form>
           
            <Container>
                {movie.map(({original_title,poster_path,backdrop_path,id})=>
                <li key={id}>
                    <Link to={`${id}`} state={locationRef.current}>
                        <Card>
                            <img src={poster_path ?("https://image.tmdb.org/t/p/w200/"+ poster_path):("https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png")} alt={original_title} />
                            <Text> {original_title}</Text>
                        </Card>    
                    </Link>
                </li>
                )}
                <Box><span></span></Box>
                <Box><span></span></Box>  
            </Container>
            {movie.length >0 && (<Button onClick={addMore}/>)}
        </div>
    )
}

export default Movies

// <img src={"https://image.tmdb.org/t/p/w200/"+poster_path} alt={backdrop_path} />