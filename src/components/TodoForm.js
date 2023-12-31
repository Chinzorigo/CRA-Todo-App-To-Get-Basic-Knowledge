import { useState } from "react";

function TodoForm(props) {
    const { todo, saveTodo } = props;
    const [value, setValue] = useState(todo?.text || '' )

    const onSubmit = (e) => {
        e.preventDefault(); //prevent refresh

        if (value) {

            if (todo) {
                saveTodo(value, todo.id)
            } else {
                saveTodo(value)
            }

            

            setValue('')
        }
    }

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <input 
                type="text" 
                className="todo-input" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Хадгалах</button>
        </form>
    )
}

export default TodoForm;