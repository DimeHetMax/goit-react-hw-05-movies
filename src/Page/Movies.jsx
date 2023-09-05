import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {searchMovies} from "../Api"

const Movies = () =>{
    const [movieName, setMovieName] = useState("")
    const [movie, setMovie] = useState([])
    const [page,setPage] = useState(1)
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
            <form onSubmit={onSubmit}>
                <input type="text" name="name"/>
                <button type="submit">search</button>    
            </form>
            <p>We are looking for: {movieName}</p>
            <ul>
                {movie.map(({original_title,poster_path,backdrop_path,id})=>
                <li key={id}>
                    <Link key={id} to={`${id}`}>
                        <img src={"https://image.tmdb.org/t/p/w200/"+poster_path} alt={backdrop_path} />
                        <p> {original_title}</p>
                    </Link>
                </li>
                )}
            </ul>
            {movie.length >0 && (<button onClick={addMore}>load more</button>)}
        </div>
    )
}

export default Movies