import { ImBin } from 'react-icons/im';
import { TiTickOutline } from 'react-icons/ti';

const Todo = ({ todo, onDelete }) => {

    const handleDelete = () => {
        console.log(todo);
        onDelete(todo.id)
    }

    return (
        <div className="w-full bg-blue-100 mb-3 px-10 py-4 flex justify-between items-center rounded-md hover:bg-white hover:text-blue-300 hover:cursor-pointer hover:border-blue-400 hover:border transition ease-in-out duration-500">
            <h3>{todo.title}</h3>
            <div className="flex">
                <TiTickOutline className="text-green-600 mr-3" />
                <ImBin className='text-red-400 hover:text-red-600' onClick={ handleDelete } />
            </div>
        </div>
    );
}

export default  Todo;