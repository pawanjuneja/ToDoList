import React, { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  
  const [todos, setTodos] = useState([
    'Go to the Gym',
    'Eat more fruits and geve',
    'Pick up the kids from school'
  ])

  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList);
    persistData(todos)
  }

  function handleRemoveTodos(removeIndex) {
    console.log('remove button pressed')
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== removeIndex
    })
    setTodos(newTodoList);
    persistData(todos)
  }

  function handleEditTodos(editIndex) {
    const valueToBeEdited = todos[editIndex];
    setTodoValue(valueToBeEdited)
    handleRemoveTodos(editIndex)
  }
  
  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return      
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}></TodoInput>
      <TodoList todoValue={todoValue} setTodoValue={setTodoValue} editTodoItem={handleEditTodos} removeTodoItem={handleRemoveTodos} todos={todos}></TodoList>
    </>
  )
}

export default App

