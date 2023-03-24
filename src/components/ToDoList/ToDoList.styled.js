import styled from "styled-components";

export const ToDoItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    font-size: 22px;
    cursor: grab;
    width: 500px;
    

    &:hover {
        background-color: #FCFF75;
    }
`

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
    border: 1px solid #FCFF75;
    width: 50px;
    height: 50px;    
    cursor: pointer;

    &:hover {
        border: 5px solid #FE0B24;
        font-size: 20px;
    }
`;

export const Task = styled.p`
    text-align: left;
`;