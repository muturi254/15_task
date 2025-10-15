import Todo from "./Todo";


const Todos = ({ todos, onDelete }) => {

    
    return (
        <section className='container m-auto py-6'>
            <ul>
                {todos.map(todo => <Todo key={todo.id} todo={todo} onDelete={onDelete} />)}
            </ul>
        </section>
    );
}

export default Todos