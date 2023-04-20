import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const useRedirect = (redirectUrl: string, waitTimeInSeconds: number) => {

    const navigate = useNavigate();
    const[secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {

        if(waitTimeInSeconds <= 0){
            navigate(redirectUrl)
            return;
        }
        const timeo = setInterval(() => {
            setSecondsElapsed(prev => prev +1);
        if(secondsElapsed === waitTimeInSeconds-1){
            navigate(redirectUrl)
        }
        }, 1000);

        return () => {
            clearInterval(timeo)
        }
    }, [secondsElapsed])

    return {
    secondsElapsed,
    waitTimeInSeconds,
    "remainingSeconds": waitTimeInSeconds-secondsElapsed, redirectUrl,
    "message": `You are gonna be redirected to ${redirectUrl} in ${waitTimeInSeconds-secondsElapsed}`
    };
}

export default useRedirect;