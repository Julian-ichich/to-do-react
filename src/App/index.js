import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButtom } from '../CreateTodoButtom';
import React from 'react';
import { useLocalStorage } from './useLocalStage'
// import './App.css';

// const defaultTodos =[
//   {text: 'cortar cebolla', completed: false},
//   {text: 'llorar con la llorona', completed: false},
//   {text: 'tomar el curso de intro a react.js', completed: false},
//   {text: 'LALALALA', completed: false},
//   {text: 'comer', completed: false}

// ]

// localStorage.setItem('TODOS_V1', defaultTodos)
// localStorage.removeItem('TODOS_V1')


function App() {
 
  const [todos, saveTodos]= useLocalStorage('TODOS_V1', [])
  const  [searchValue, setSearchValue] = React.useState('')
  const completedTodo = todos.filter(todo => todo.completed)
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

 

  const completeTodo=(texto)=> {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === texto)

    newTodos[todoIndex].completed === true ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo=(texto)=> {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === texto)

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  // const dibujarTodo=()=>{
  //   return(
      
  //   )
  // }

  return (
    <>
      <TodoCounter completed={completedTodo.length} total={todos.length} />
      <TodoSearch
       searchValue ={searchValue}
       setSearchValue = {setSearchValue}
       />
      <TodoList>
      {searchedTodos.map(todo => 
        (<TodoItem key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        
        />))}
      </TodoList>

      <CreateTodoButtom /*onDibujar = {() => dibujarTodo()}*/ />
      
    </>
  );
}


export default App;
