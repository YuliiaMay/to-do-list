import React, { Component } from "react";
import ToDoList from "./ToDoList/ToDoList";
import HaveDoneList from "./HaveDoneList/HaveDoneList";

export class App extends Component {
  state = {
    tasks: [
      { id: 'id-1', text: 'Вивчити англійську до рівня Advanced', completed: false },
      { id: 'id-2', text: 'Пробігти марафон', completed: false },
      { id: 'id-3', text: 'Вивчити React', completed: false },
      { id: 'id-4', text: 'Отримати водійське посвідчення', completed: false },
    ],
    haveDone: [],
  }

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }))
  }



  haveDoneTask = (taskId) => {
    console.log(this.state.tasks.completed);

    // this.setState(prevState => ({
    //   haveDone: prevState.haveDone.filter(task => task.id === taskId)
    // }))

    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => {
        if (task.id === taskId) {

        }
      })
    }))


  }

  render() {
    const { tasks, haveDone } = this.state;

    return (
      <div>
        <div>
          <h1>⚡️ TO DO LIST ⚡️</h1>
          <ToDoList tasks={tasks} onDeleteTask={this.deleteTask} onHaveDoneTask={this.haveDoneTask} />
        </div>


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
