const Navbar = () => {
    return (
        <nav className="bg-blue-400 border-b mb-3 ">
            <div className="max-w-7xl h-15 flex justify-end items-center">
                <div className="container w-full m-auto border flex justify-between">
                    <a href="#">Todos</a>
                    <a href="#">Completed Todos</a>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;