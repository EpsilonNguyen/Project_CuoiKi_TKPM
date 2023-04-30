const Search = () => {
    return (
        <div className="flex justify-center my-10">
            <input className="border-2 border-blue-300 w-[350px] pl-2" type="text" placeholder="Search query..." />
            <button className="text-white bg-blue-300 px-2 py-2" type="button">Search</button>
        </div>
    )
}

export default Search;