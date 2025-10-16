import { useEffect, useState } from "react";
import { TODOS } from "../data/todo";
import Todo from "./Todo";


const Todos = ({ onDelete }) => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTodos = async () => {
            // fetch("http://localhost:5000/todo").then( resp => resp.json()).then(data => setTodos(data))
            try {
                const res = await fetch("http://localhost:5000/todos");
                const data = await res.json()
                setTodos(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchTodos()
    }, [])

    // if (loading) {
    //     return <p>Loading...</p>
    // }

    return (
        <section className='container m-auto py-6'>
            <ul>
                {!loading ? todos.map(todo => <Todo key={todo.id} todo={todo} onDelete={onDelete} />) : <p>loading.....</p>}
            </ul>
        </section>
    );
}

export default Todos