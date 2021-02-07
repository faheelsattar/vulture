import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async (options) => {
        setIsLoading(true);
        try {
            const result = await fetch(url, options)
            const data = await result.json()
            setResponse(data)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setError(err)
            if (err.status === 400) {
                const errholder = await err.json()
                setError(errholder.message)
            }
            else if (err.status === 401) {
                const errholder = await err.json()
                setError(errholder.message)
            }
        }
    }
    return [
        response,
        error,
        isLoading,
        fetchData
    ]
}

//OPTION
// {
//     method: "POST",
//     body: JSON.stringify({
//         email: values.email,
//         password: values.password
//     }),
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'X-XSRF-TOKEN': csrftoken
//     },
//     credentials: "include",
// }