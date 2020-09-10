import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
        return(
            <div className="collection-item transparent" key={todo.id}>
                <button className="waves-effect waves-light btn" onClick={() => deleteTodo(todo.id)}><i className="material-icons left">clear</i> Delete Task </button>
                <h7 className="white-text">{todo.content}</h7>
            </div>
        )
    })
    ) : (<p className="center white-text">You Have Nothing To Do!</p>)
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos