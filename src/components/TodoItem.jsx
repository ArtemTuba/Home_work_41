const TodoItem = (props) => {
  return(
    <div>
      {props.todos.map((item) => 
        <p 
        key={item.id}
        onClick={() => props.handlClickTodo(item.id)}
        style={{textDecoration: item.completed ? "line-through" : "none"}}
        >
        {item.id}. {item.title}
        </p>
      )}
    </div>
  )
}

export default TodoItem;

