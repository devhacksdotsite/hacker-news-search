import { useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// components
import { FaHistory } from 'react-icons/fa';
import { Logo } from '../components/Logo';
import { GlobalCtx } from '../context/GlobalState';

export const History = () => {
    const navigate = useNavigate();
    const { history, setSearchText } = useContext(GlobalCtx);

    const quickSearch = (search) => {
        setSearchText(search);
        navigate('/');
    }

    return (
        <div className="container mx-auto px-4 my-6">
            <Link to="/">
                <Logo className="cursor-pointer"/> 
            </Link>  

            <div className="max-w-6xl rounded overflow-hidden shadow-lg items-center mx-auto">
                <div className="p-6">
                    <div className="flex font-bold text-xl mb-2">
                        <FaHistory className="self-center text-orange-500"/>
                        <h1 className="mx-2">Search History</h1>
                    </div>

                    <hr className="bg-gray-200 dark:bg-gray-800 
        border border-gray-200 dark:border-gray-400 rounded-full
        m-2" />
                    <ul className="my-4 text-gray-700 text-base">
                        { history && history.map((item, idx) => (
                            <li key={ idx } className="flex justify-between my-4">
                                <div className='text-lg self-center'>
                                    { item.tstamp }
                                </div>
                                <div className='text-lg self-center'>
                                    { item.search }
                                </div>
                                <div className="btn btn-warning" onClick={ () => quickSearch(item.search) }>Quick Search</div>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>   
        </div>
    );
}