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

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const result = await response.json();

            setData(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        data,
        isFetching
    };
}