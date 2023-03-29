import styled from "styled-components";

export const DoneBtn = styled.button`
    background-color: transparent;
    border: 1px solid #3FF101;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:hover {
        border: 5px solid #3FF101;
        font-size: 20px;
    }
`;

export const RemoveBtn = styled.button`
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    font-size: 24px;
    color: #F7CEDC;

    &:hover {
        color: #0070A0;
    }
`;

export const TextTask = styled.p`
    font-size: 18px;
    text-align: left;
`;

export const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`