import  { useState, useEffect} from 'react'
import {getPostsPage} from "../api/axios"

const usePosts = (pageNum = 1, handle : string) => {
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

        getPostsPage(pageNum, handle, { signal })
            .then(data => {
                let hasNext = null;
                if(data.videos === undefined){
                    hasNext = false;
                    setHasNextPage(hasNext);
                    setIsLoading(false);
                }
                else{
                hasNext = true;
                setResults((prev) => [...prev, ...data.videos]);
                setHasNextPage(hasNext);
                setIsLoading(false);
                }
            })
            .catch(e => {
                setIsLoading(false);
                if(signal.aborted)  return;
                setIsError(true);
                setError({ "message": e.message });
            });
        return () => controller.abort();
    }, [pageNum, handle])
 
    return { isLoading, isError, error, results, hasNextPage, setResults}
}

export default usePosts;