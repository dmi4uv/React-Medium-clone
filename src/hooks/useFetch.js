import {useState,useEffect,useCallback} from 'react'
import axios from "axios";

const useFetch = url => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = useCallback ((options={}) => {
        setOptions(options)
        console.log(options)
        setIsLoading(true)
    },[])

    useEffect(()=> {
        if (!isLoading){
            return
        }
        axios(baseUrl+url, options).then(res => {
                console.log("sucsess",res)
                setIsLoading(false)
            setResponse(res.data)
            }
        ).catch(err => {
            console.log("error", err)
            setIsLoading(false)
            setError(err.response.data)
        })
    }, [isLoading,options,url])

    return [{isLoading, response, error}, doFetch]
}

export default useFetch
