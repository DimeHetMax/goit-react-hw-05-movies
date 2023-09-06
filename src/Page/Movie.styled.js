import styled from "styled-components";

export const Container = styled.ul`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    padding: 20px 10px;
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
export const Box = styled.li`
    width: 200px
`;
export const Text = styled.p`
    color: #000000;
    margin-bottom: 10px;
`
export const TextSpan = styled.span`
    text-transform: uppercase;
    color: #ffa500;
    font-size: 20px;

`
export const Form = styled.form`
display: flex;
`
export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: groove;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;    
    padding-left: 20px;
    &:focus {
        outline: none;
    }
`
export const ButtonInput = styled.button`
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 5px;
    border-radius: 20px;
    border: none;
    background: #ffa500;
    cursor: pointer;
`
// input:focus {
//     outline: none;
//   }
