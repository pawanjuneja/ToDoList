import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {removeTodoItem, editTodoItem, todos} = props;

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard removeTodoItem={() => {
                    removeTodoItem(todoIndex)
                }} 
                editTodoItem={() => {
                    editTodoItem(todoIndex)
                }}
                 key={todoIndex}>
                    <p>
                        {todo}
                    </p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
