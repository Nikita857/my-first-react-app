import type Todo from "../types/todo"


interface IProps {
    todo: Todo
    onCompleted: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}

export default function Todoitem({todo, onCompleted, onDelete}: IProps) {
    return (
        <div>
            <label htmlFor="" className="flex justify-between items-center border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <div className="flex flex-center gap-2">
                    <input type="checkbox"
                    checked={todo.completed}
                    onChange={(event) => onCompleted(todo.id, event.target.checked)}
                    className="scale-125" />
                    <span className={todo.completed ? "line-through text-gray-400": ""}>{todo.title}</span>
                </div>
                <div>
                    <button onClick={() => onDelete(todo.id)} className="bg-white border border-red-500 rounded-md p-2 text-red-500 hover:bg-red-500 hover:text-white">Delete</button>
                </div>
            </label>
        </div>
    )
}