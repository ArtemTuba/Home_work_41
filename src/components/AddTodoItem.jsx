const AddTodoItem = (props) => {
    return(
        <div>
            <input type='text' value={props.newTodoTitle} onChange={(e) => props.setNewTodoTitle(e.target.value)}/>
            <button onClick={props.addTodo}>Додати задачу</button>
        </div>
    )
}

export default AddTodoItem;