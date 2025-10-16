import  logo  from "../assets/react.svg";


const Navbar = () => {
    return (
        <nav className="bg-blue-500  mb-3 ">
            <div className="max-w-10xl h-15 flex justify-end items-center m-auto">
                <div className="container w-full m-auto flex justify-between">
                    <a href="#" className="font-bold text-white flex items-center">
                        <img src={logo} alt="alaa" /> <span>TODO</span>
                    </a>
                    <div className="text-white">
                        <a href="#" className="inline-block mr-4 hover:font-bold transition ease-in duration-500">Todos</a>
                        <a href="#" className="inline-block  hover:font-bold transition ease-in duration-500">Completed</a>
                        <a href="#" className="inline-block  hover:font-bold transition ease-in duration-500 ml-4">About</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;