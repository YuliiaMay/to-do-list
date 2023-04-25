import styled from "styled-components";

export const AddTaskBox = styled.div`
    margin-right: 0;
    width: 175px;
    text-align: center;
    color: #2B2B2B;
    padding: 4px;
    border: 3px solid transparent;
    border-radius: 20px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;



    transition-property: color, border;
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 100ms;


    &:hover {
        color: #4113A4;
        border: 3px solid #4113A4;
        // border-radius: 20px;
    }
`;

export const PlusBtn = styled.button`
    border: none;
    background-color: transparent; 
    padding: 0;
    width: 32px;
    height: 32px;

    transition-property: color, transform;
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 0;


    ${AddTaskBox}:hover & {
        transform: translateX(-25%);
        transform: rotate(90deg);
        color: #4113A4;
    }
`;

export const AddTaskText = styled.span`
    display: none;
    color: #4113A4;

    transition-property: display;
    transition-duration: 500ms;
    transition-timing-function: linear;
    transition-delay: 500ms;



    ${AddTaskBox}:hover & {
        display: flex;
    }


`;