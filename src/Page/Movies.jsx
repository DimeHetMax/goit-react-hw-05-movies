import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import Button from "components/Button/Button"
import {searchMovies} from "../Api"
import {Container,Card,Box, Text,TextSpan, Form, Input, ButtonInput} from "./Movie.styled"
const Movies = () =>{
    const [movieName, setMovieName] = useState("")
    const [movie, setMovie] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();

    const searchedQuery = searchParams.get("query") ?? "";
    const searchedPage = searchParams.get("page")
    // console.log("params:",searchedQuery,searchedPage)

    useEffect(() => {
        if (searchedQuery) {
          setMovieName(searchedQuery);
         } else {
            setSearchParams({ query: movieName });
        }
        if (searchedPage) {
          setPage(Number(searchedPage));
        }
      }, [searchedQuery, searchedPage, movieName, setSearchParams]);

    const onSubmit =(event) =>{
        event.preventDefault()
        const inputValue = event.target.name.value.trim()
        if(inputValue === ""){
            setSearchParams({});
            return
        }
        onChange(inputValue)
        setSearchParams({query: inputValue, page: 1})
    }
    const onChange =(query)=>{
        setMovieName(query)
        setPage(1)
        setMovie([])
        setSearchParams({})
    }
    const addMore = () =>{
        setPage(page + 1)
        setSearchParams({ query: movieName, page: page +1})
    }
    useEffect(()=>{
        searchMovies(movieName, page)
        .then(res => 
            {setMovie(prevState =>{return [...prevState, ...res.results]})
             setTotalPages(res.total_pages)
            })
    },[movieName,page])
    return(
        <div>
            <Text>We are looking for:  <TextSpan>{movieName}</TextSpan></Text>
            <Form onSubmit={onSubmit}>
                <Input type="text" name="name" />
                <ButtonInput type="submit">search</ButtonInput>    
            </Form>
           
            <Container>
                {movie.map(({original_title,poster_path,backdrop_path,id})=>
                <li key={id}>
                    <Link to={`${id}`} state={{from: location}}>
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
            {movie.length >0 && totalPages !== page && (<Button onClick={addMore}/>)}
        </div>
    )
}

export default Movies

// <img src={"https://image.tmdb.org/t/p/w200/"+poster_path} alt={backdrop_path} />