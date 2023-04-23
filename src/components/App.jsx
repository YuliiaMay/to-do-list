import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

// import { nanoid } from 'nanoid'
// import { TaskEditor } from "./TaskEditor/TaskEditor";
// import ToDoList from "./ToDoList/ToDoList";
// import Filter from "./Filter/Filter";
// import Statistics from "./Statistics/Statistics";

const Home = lazy(() => import('../pages/Home'));
const UserAccount = lazy(() => import('../pages/UserAccount'));
const Planner = lazy(() => import('../pages/Planner'));
const TaskDetails = lazy(() => import('../pages/TaskDetails'));
const Notes = lazy(() => import('../pages/Notes'));
const HabitTracker = lazy(() => import('../pages/HabitTracker'));
const Calendar = lazy(() => import('../pages/Calendar'));
const Timer = lazy(() => import('../pages/Timer'));
const Productivity = lazy(() => import('../pages/Productivity'));
const ToDoGallery = lazy(() => import('./Plans/ToDoGallery/ToDoGallery'));
const InProgressGallery = lazy(() => import('./Plans/InProgressGallery/InProgressGallery'));
const HaveDoneGallery = lazy(() => import('./Plans/HaveDoneGallery/HaveDoneGallery'));
const AllTastsGallery = lazy(() => import('./Plans/AllTastsGallery/AllTastsGallery'));




export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/:userName" element={<UserAccount />} />
          
      
          <Route path="/planner" element={<Planner />}>
            <Route path="to-do" element={<ToDoGallery />} />
            <Route path="in-progress" element={<InProgressGallery />} />
            <Route path="have-done" element={<HaveDoneGallery />} />
            <Route path="all" element={<AllTastsGallery />}/>
          </Route>
          <Route path="/planner/:taskId" element={<TaskDetails />}/>
          
          <Route path="/notes" element={<Notes />} />
          <Route path="/habit-tracker" element={<HabitTracker />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/productivity" element={<Productivity />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Home />} />          
        </Route>
      </Routes>
    </>
  )
}





// const TASKS_KEY = 'tasks';

// export class App extends Component {
//   state = {
//     tasks: [
//       { id: '01', text: 'Вивчити англійську до рівня Advanced', completed: false },
//       { id: '02', text: 'Пробігти марафон', completed: false },
//       { id: '03', text: 'Вивчити React', completed: false },
//       { id: '04', text: 'Отримати водійське посвідчення', completed: false },
//     ],
//     filter: '',
//     // haveDone: [],
//   }

  
//   componentDidMount() {
//     const tasks = localStorage.getItem(TASKS_KEY);
//     const parsedTasks = JSON.parse(tasks);

//     if (parsedTasks) {
//       this.setState({ tasks: parsedTasks });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.tasks !== this.state.tasks) {
//       localStorage.setItem(TASKS_KEY, JSON.stringify(this.state.tasks))
//     }
//   }

//   addTask = (text) => {
//     const task = {
//       id: nanoid(),
//       text,
//       completed: false
//     }

//     this.setState(prevState => ({
//       tasks: [task, ...prevState.tasks]
//     }))

//   }

//   deleteTask = (taskId) => {
//     this.setState(prevState => ({
//       tasks: prevState.tasks.filter(task => task.id !== taskId)
//     }))
//   }

//   toggleCompleted = (taskId) => {
//     this.setState(prevState => ({
//       tasks: prevState.tasks.map(task => {
//         if (taskId === task.id) {
//           return {
//             ...task,
//             completed: !task.completed
//           }
//         }

//         return task;
//       })
//     }))
//   }

//   getVisibleTasks = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();

//     return this.state.tasks.filter(task =>
//       task.text.toLowerCase().includes(normalizedFilter)
//     );
//   }

//   handelFilerChange = ({ target: { value } }) => {
//     this.setState({
//       filter: value
//     })
//   }


//   getComplitedTasksCount = () => {
//     const { tasks } = this.state;
      
//     return tasks.reduce((total, task) => (task.completed ? total + 1 : total), 0)
//   }


//   render() {
//     const { tasks, filter } = this.state;
//     const totalTasksCount = tasks.length;
//     const visibleTasks = this.getVisibleTasks();
//     const complitedTasksCount = this.getComplitedTasksCount();

//     return (
//       <div>
//         <h1>⚡️ TO DO LIST ⚡️</h1>

//         {/* <IconButton /> */}

//         <TaskEditor onSubmit={this.addTask} />



//         <Filter filter={filter} onFilterChange={this.handelFilerChange} />

//         <ToDoList tasks={visibleTasks} onDeleteTask={this.deleteTask} onToggleCompleted={this.toggleCompleted} />

//         {/* {
//           haveDone.length > 0 && (
//           <>
//               <h1> ✨ HAVE DONE LIST ✨ </h1>
//               <HaveDoneList haveDone={haveDone}  />
//           </>
//         )} */}
      
//         <Statistics total={totalTasksCount} complited={complitedTasksCount} />

//       </div>
//     );
//   }

// };