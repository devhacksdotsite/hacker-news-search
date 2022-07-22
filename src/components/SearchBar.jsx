import { useContext } from 'react';

// context 
import { GlobalCtx } from '../context/GlobalState';

// components
import { BsSearch } from 'react-icons/bs'; 

export const SearchBar = () => {
    const { searchText, setSearchText } = useContext(GlobalCtx);

    const search = (e) => {
        const str = e.target.value.toLowerCase();
        setSearchText(str);
    }

    return (
        <div id="search" className="flex-auto self-center">
            <div className="w-9/12 relative bg-gray-200 opacity-100 p-3 text-black mx-auto rounded-lg">
                <BsSearch className="absolute left-1 top-4 ml-2" />

                <input type="text" placeholder="Search" className="ml-6 bg-transparent text-black focus:outline-none w-full" value={ searchText } onChange={ search } />
            </div>
        </div>
    );
}