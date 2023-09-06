import styled from "styled-components";

export const ButtonAddMore =styled.button`
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 5px;
    border-radius: 20px;
    border: none;
    background: #ffa500;
    cursor: pointer;
    &:hover {
        transform: scale(1.05); /* Increase the size on hover */
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4); /* Add a stronger shadow on hover */
    }
`