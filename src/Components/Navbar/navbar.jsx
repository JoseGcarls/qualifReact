
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    const [search, setSearch] = useState([]);
    return(
        <div className="bg-gray-600 text-white text-xl text-gray-400 font-bold w-full h-16 flex items-center justify-between p-5 font-sans">
            <Link to="/">
                <div>
                    Sp&AElig;tify
                </div>
            </Link>
            <div className="">
                <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <form action={`/search/${search}`} method="get">
                            <input id="search" name="" value={search} onChange={e=>{setSearch(e.target.value)}} className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search"/>
                        </form>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}
export default Navbar