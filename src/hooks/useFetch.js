import { useState, useCallback, useMemo } from 'react';
import Axios from 'axios';

const axios = Axios.create({
    validateStatus: status => {
        return (status >= 200 && status < 400) || status === 422;
    }
});

export const useFetch = () => {
    const [cache, setCache] = useState({});
    const [error, setError] = useState(null);
    const [items, setItems] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [totalCount, setTotalCount] = useState(null);
    const [search, setSearch] = useState("");
    const [limit, setLimit] = useState(30);
    const [grid, setGrid] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);

    const optionsLimit = useMemo(() => [
        { value: '30', label: '30' },
        { value: '60', label: '60' },
        { value: '90', label: '90' }
    ], []);

    const fetchData = useCallback(async (page) => {
        let response;
        const cacheValue = `${search}***${limit}`;

        if (cacheValue in cache && page === 1) {
            response = cache[cacheValue];
        } else {
            try {
                const url = 'https://api.github.com/search/repositories?q=' + search + 'in:name&sort=stars&per_page=' + limit + '&page=' + page;
                setIsLoaded(true);
                response = await axios.get(url);

                const { status, data } = response;

                if (status === 422) {
                    const error = new Error(data.message);
                    error.code = status;
                    error.errorMessages = data.errors;
                    throw error;
                }

            } catch (error) {
                setIsLoaded(false);

                if (error.code === 422) {
                    const { errorMessages } = error;
                    return console.log('[errorMessages]', errorMessages);
                }
                return console.log(error)
            }
        }

        if (response) {
            setIsLoaded(false);
        }

        const {
            data: { items, total_count },
            headers: { link: links }
        } = response;

        setCache(prevState => ({
            ...prevState,
            [search]: response
        }));

        setCurrentPage(page);
        setItems(items.length ? items : null);
        setTotalCount(total_count);

        if (!links) return;

        let lastPageNumber = 1;

        for (const link of links.split(",")) {
            const [url, title] = link.split(";");

            if (title.trim() !== 'rel="last"') continue;

            const pageIndex = url.lastIndexOf("page");
            lastPageNumber = +url.slice(pageIndex + 5, -1);
        }

        setLastPage(page > lastPageNumber ? page : lastPageNumber);
    }, [search, limit, cache]);

    const onChangeHandler = useCallback(e => setSearch(e.target.value), []);
    const changeLimitHandler = useCallback(props => setLimit(props.value), []);
    const changeGridHandler = useCallback(props => setGrid(props), []);

    return {
        grid,
        items,
        limit,
        search,
        totalCount,
        isLoaded,
        currentPage,
        lastPage,
        optionsLimit,
        fetchData,
        onChangeHandler,
        changeLimitHandler,
        changeGridHandler
    };
};
