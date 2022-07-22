import { useEffect, useState } from 'react';

export const UseFetch = (txt) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        if (txt !== null) {
            (async () => {
                const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${ JSON.stringify(txt) }`);

                if (res.ok) {
                    const d = await res.json();
                    setData([...d.hits]);
                }
            })();
        }
    }, [ txt ]);

    return { data, loading };
}
