// Custom hook rules ;
/*
1. Трябва да започва с use
2. Какво приема? - Каквото искаме
3. Какво връща? - Каквото искаме
- hooks can use other hooks
*/

import { useEffect, useState } from "react";

export function useFetch(url, initialData) {

    const [data, setData] = useState([initialData]);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        // 1 аборт контролер отговаря за 1 конкретна заявка и го връзваме със сигнала
        const abourtController = new AbortController();
        (async () => {
            setIsFetching(true);

            const response = await fetch(url, { signal: abourtController.signal});
            const result = await response.json();

            setData(result);
            setIsFetching(false);
        })();

        return () => abourtController.abort();
    }, [url, toggleRefetch]);

    const refetch = () => {
        setToggleRefetch(state => !state);
    };

    return {
        data,
        isFetching,
        refetch
    };
}