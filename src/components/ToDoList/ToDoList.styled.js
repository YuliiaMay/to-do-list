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
    padding: 12px;
    border-radius: 12px;
    

    &:not(:last-child) {
        margin-bottom:24px; 
    }
    

    &:hover {
        background-color: #FCFF75;
        border: 1px solid #000000;
    }
`

