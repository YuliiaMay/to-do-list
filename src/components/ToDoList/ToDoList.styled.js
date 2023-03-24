import styled from "styled-components";

export const ToDoItems = styled.ul`
`

export const ToDoItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    cursor: grab;
    width: 500px;
    padding: 8px;
    border-radius: 8px;

    &:not(:last-child) {
        margin-bottom: 18px; 
    }
    

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

export const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`