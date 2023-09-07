import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const ContainerMovie = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

`;
export const ContainerImage = styled.div`
    display: grid;
    align-items: center;
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 20px;
`;

export const LinkInfoList = styled.ul`
    display: flex;
    padding: 10px 20px;
`
export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin-right: 10px;

    &.active {
    color: orange;
    }
`;
export const NavigationInfo = styled.div`
    margin-bottom: 20px;
    border-bottom: 2px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background: #ffecd3;
`;
export const Text = styled.p`
    line-height: 1.4;
    font-size: 16px;
`
export const ContainerIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left:10px;
    color:#000000;
    &:hover {
        color:#ffa500;
    }
`
// border-bottom: 2px solid #ccc;
// box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// background: #ffecd3;