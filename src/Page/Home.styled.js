import styled from "styled-components";

export const Container = styled.ul`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;
export const Card = styled.div`
    width: 200px; 
    padding: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: scale(1.05); /* Increase the size on hover */
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4); /* Add a stronger shadow on hover */
      }
`;


export const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    text-align: center;
    width:150px;
    color: black;
    padding: 10px;
`;
export const Box = styled.li`
    width: 200px
`;