import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
    margin: 0 auto;
    max-width: 720px;
    padding: 20px 40px;
`;

export const Nav = styled.nav` 
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: #ffecd3;
`
export const ContainerLink = styled.ul`
    display: flex;
    padding: 10px 20px
`
export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin-right: 10px;

    &.active {
    color: #ffa500;
    }
`;
