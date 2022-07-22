import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// context
import { GlobalCtx } from '../context/GlobalState';

// hooks
import { UseFetch } from '../hooks/UseFetch';

// components
import { Logo } from '../components/Logo';
import { SearchBar } from '../components/SearchBar';
import { Articles } from '../components/Articles';

export const Search = () => {
    const [ search, setSearch ] = useState(null);
    const { 
        searchText, 
        setSearchText,
        setSearchHistory
    } = useContext(GlobalCtx);

    const { data } = UseFetch(search); 

    const onSubmit = () => {
        setSearch(searchText);
        setSearchHistory({ 
            search: searchText,
            tstamp: new Date().toDateString(),
        });  

        // resest the search text
        setSearchText('');
    }

    useEffect(() => {
        // quick search handler
        if (searchText !== '') setSearch(searchText);
    }, []);

    return (
        <div className='container mx-auto px-4 my-6'>
            <div className="h-full flex justify-center">
                <div className='w-full'>
                    <Logo />
                    <SearchBar /> 

                    <div className="m-6 flex justify-center">
                        <button className='btn btn-warning' onClick={ onSubmit } disabled={ !searchText }>Search</button>
                        <Link to="/history" className='btn btn-primary'>History</Link>
                    </div> 
                </div>
            </div>

            <Articles data={ data }/>
        </div>
    );
}