import { useState, useCallback } from 'react';
import Axios from "axios";

export const useTokens = () => {
    const [data, setData] = useState(null)
    const handleTokens = useCallback(async (address) => {
        const fetchData = async () => {
            console.log("+++", address);
            if (address) {
                try {
                    await Axios.get(
                        `https://cors-anywhere.herokuapp.com/https://openapi.debank.com/v1/user/token_list?chain_id=bsc&id=${address}&is_all=false`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'AccessKey': 'e2f38ce650d6cc8dce654b1e6db427f52a3c08e9',
                            'Accept': 'application/json; charset=UTF-8',
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(res => {
                        console.log("ljljh" , res.data)
                        setData(res.data)
                    })
                } catch (error) {
                    console.error('Unable to fetch data:', error)
                }
            }
        }

        // const intervalId = setInterval(() => {
        fetchData()
        // }, 5000)

        // return () => clearInterval(intervalId);
    }, [])

    return { onTokens: handleTokens, data }
}