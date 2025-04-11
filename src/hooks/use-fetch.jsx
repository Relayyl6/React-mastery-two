import { useEffect } from "react";
import { useState } from "react"

function useFetch(url, options=[]) {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    async function fetchData() {
        setPending(true);
        try {

            const apiResponse = await fetch(url, {...options});
           // const response = await apiResponse.json();

            if (!apiResponse.ok) {
                throw new Error(apiResponse.statusText);
            }

            const response = await apiResponse.json();

            if (response) {
                setData(response);
                setErrorMsg(null);
                setPending(false);
            }

        } catch(error) {
            setPending(false);
            console.error(error);
            setErrorMsg(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data,
        pending,
        errorMsg
    }
}

export default useFetch