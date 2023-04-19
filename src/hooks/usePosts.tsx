import  { useState, useEffect} from 'react'
import {getPostsPage} from "../api/axios"

import { QueryOptions } from "../types/queryParams.d"

const usePosts = (pageNum : number, handle : string , queryParams: QueryOptions) => {
    const [results, setResults] = useState(Array<Object>);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({"message" : ""});
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        setError({"message" : ""});
        const controller = new AbortController();
        const { signal } = controller;

        getPostsPage(pageNum, handle, queryParams,{ signal })
            .then(data => {
                let hasNext = null;
                if(data.length === 0){
                    hasNext = false;
                    setHasNextPage(hasNext);
                    setIsLoading(false);
                }
                else{
                hasNext = true;
                setResults((prev) => [...prev, ...data]);
                setHasNextPage(hasNext);
                setIsLoading(false);
                }
            })
            .catch(e => {
                setIsLoading(false);
                setHasNextPage(false);
                if(signal.aborted){
                    return;
                } 
                setIsError(true);
                setError({ "message": e.message });
            });
        return () => {
            controller.abort();
        };
    }, [pageNum, handle, queryParams])
 
    return { isLoading, isError, error, results, hasNextPage, setResults}
}

export default usePosts;