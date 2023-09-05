import { Route, Routes } from "react-router-dom";
import Home from "Page/Home";
import Movies from "Page/Movies";
import MoviesDetails from "Page/MoviesDetails";
import Cast from "./CastCredit/Cast";
import Reviews from "./MoviesRaview/Reviews";
import { Container, StyledLink,Nav } from "./App.styled";

export const App = () => {
  return (
    <Container>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MoviesDetails/>} > 
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Routes>
    </Container>
  );
};
