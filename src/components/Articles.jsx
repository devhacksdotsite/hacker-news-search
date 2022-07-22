// components
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Articles = (props) => {
    const articles = props.data;

    const formatDate = (tstamp) => {
        const date = new Date(tstamp);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/"+ date.getFullYear();
    }
    return (
        <>
            <div className="text-right py-2 font-bold">({ articles && articles.length })</div>
            <table className="w-full m-6 table-fixed border-seperate border border-spacing-2 border-slate-500">
                <thead className='text-center'>
                    <tr className='bg-orange-500 text-white'>
                        <th className="border border-slate-600 p-4">Title</th>
                        <th className="border border-slate-600">Author</th>
                        <th className="border border-slate-600">Date</th>
                    </tr>
                </thead>

                <tbody>
                    { articles && articles.map((article, idx) => (
                        <tr 
                            className="cursor-pointer hover:bg-orange-200"
                            key={ idx }
                        >
                            <td className="border border-slate-700 p-4">
                                { article.title }
                                <a href={ article.url } target="_blank">
                                    <FaExternalLinkAlt className='cursor-pointer  text-orange-500' />
                                </a>
                            </td>
                            <td className="border border-slate-700 p-4">
                                { article.author }
                            </td>
                            <td className="border border-slate-700 p-4">
                                { formatDate(article.created_at) }
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    );
}