import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "Page/Home";
import Movies from "Page/Movies";
import MoviesDetails from "Page/MoviesDetails";
// import Cast from "./CastCredit/Cast";
// import Reviews from "./MoviesRaview/Reviews";

import { Container, StyledLink,Nav, ContainerLink } from "./App.styled";

// const Home = lazy(()=> import("../Page/Home"))
// const Movies = lazy(()=> import("../Page/Movies"))
// const MoviesDetails = lazy(()=> import("../Page/MoviesDetails"))
const Cast = lazy(()=> import("./CastCredit/Cast"))
const Reviews = lazy(()=> import("./MoviesRaview/Reviews"))

export const App = () => {
  return (
    <Container>
        <header>
            <Nav>
              <ContainerLink>
                <li>
                  <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/movies">Movies</StyledLink>
                </li>
              </ContainerLink>
            </Nav>
        </header>
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
