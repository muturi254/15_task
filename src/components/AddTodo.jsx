import { useState } from "react";

const AddTodo = ({ onAdd }) => {

    const [todo, setTodo] = useState("");

    const submitTodo = (e) => {
        e.preventDefault()
        onAdd(todo);
    }
    return (
        <section className="container px-10 py-6 m-auto bg-emerald-50">
            <form onSubmit={submitTodo}>
                <div className="mb-6 w-full">
                <input type="text" className='border rounded-md px-3 py-2 w-full' placeholder='Enter Todo title' onChange={ (e) => setTodo(e.target.value) } value={todo} />
                <p>{todo}</p>
                </div>
                
                <div>
                <button type="submit" className='border rounded-md py-2 px-8 bg-blue-600 text-white font-bold hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'>Add todo</button>
                </div>
            </form>
        </section>
    );
}

export default AddTodo;