import React, { Component } from "react";
import TaskEditor from "./TaskEditor/TaskEditor";
import ToDoList from "./ToDoList/ToDoList";
import HaveDoneList from "./HaveDoneList/HaveDoneList";

export class App extends Component {
  state = {
    tasks: [
      { id: '01', text: 'Вивчити англійську до рівня Advanced', completed: false },
      { id: '02', text: 'Пробігти марафон', completed: false },
      { id: '03', text: 'Вивчити React', completed: false },
      { id: '04', text: 'Отримати водійське посвідчення', completed: false },
    ],
    haveDone: [],
  }

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }))
  }


  toggleCompleted = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }

        return task;
      })

    }))
  }

  handelChange = (e) => {
    console.log(e.target.value);
  }

  handelSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    const { tasks, haveDone } = this.state;

    return (
      <div>
        <h1>⚡️ TO DO LIST ⚡️</h1>

        <TaskEditor onHandelChange={this.handelChange} onHandelSubmit={this.handelSubmit} />
        <ToDoList tasks={tasks} onDeleteTask={this.deleteTask} onToggleCompleted={this.toggleCompleted} />

        {
          haveDone.length > 0 && (
          <>
              <h1> ✨ HAVE DONE LIST ✨ </h1>
              <HaveDoneList haveDone={haveDone}  />
          </>
        )}

      </div>
    );
  }

};
