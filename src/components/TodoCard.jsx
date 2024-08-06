import React from 'react'

export default function TodoCard(props) {
    const {removeTodoItem, editTodoItem, children} = props;
    
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={editTodoItem}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button  onClick={removeTodoItem}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
