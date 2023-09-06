import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import {searchMovieById} from "../Api"
import {ContainerMovie,ContainerImage, ContainerInfo, LinkInfoList, StyledLink, NavigationInfo, Text} from "./MoviesDetails.styled"

const MoviesDetails = () =>{

   const {movieId} = useParams()
   const [movie, setMovie] = useState({})
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
 
   useEffect(()=>{
    setLoading(true);
    setError(null);

    searchMovieById(movieId)
    .then(res => setMovie(res))
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
   },[movieId]) 

   if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
        <ContainerMovie>
            <ContainerImage>
            <img src={movie.poster_path ?("https://image.tmdb.org/t/p/w200/"+movie.poster_path):("https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png")} alt=""/>
            </ContainerImage>
            <ContainerInfo>
                <h2>{movie.original_title}</h2>
                <Text>user score: {((movie.vote_average / 10) * 100).toFixed(0)}%</Text>
                <h3>Overview</h3>
                <Text>{movie.overview}</Text>
                <h4>Genres</h4>
                <Text>Here is the Genre</Text>
            </ContainerInfo>
        </ContainerMovie>
    
        <NavigationInfo>
            <LinkInfoList>
                    <li>
                        <StyledLink to="cast"> Cast</StyledLink>    
                    </li>
                    <li>
                        <StyledLink to="reviews">Reviews</StyledLink>  
                    </li>
                </LinkInfoList>
        </NavigationInfo>
            <Outlet />
    </div>
    )       
}

export default MoviesDetails;