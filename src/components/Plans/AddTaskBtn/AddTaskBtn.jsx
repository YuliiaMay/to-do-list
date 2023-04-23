import { RxPlusCircled } from "react-icons/rx";
import { AddTaskBox, PlusBtn, AddTaskText } from "./AddTaskBtn.styled";


const AddTaskBtn = () => {
    return (
        <AddTaskBox>
            <PlusBtn><RxPlusCircled size={32} /></PlusBtn>
            <AddTaskText>Create Task</AddTaskText>
        </AddTaskBox>
    )
};

export default AddTaskBtn;