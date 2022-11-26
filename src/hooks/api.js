import { useState, useCallback } from 'react';
import Axios from "axios";

export const useTokens = () => {
    const [data, setData] = useState(null)
    const handleTokens = useCallback(async (address) => {
        const fetchData = async () => {
            if (address) {
                try {
                    await Axios.get(
                        `https://rest.cryptoapis.io/blockchain-data/ethereum/ropsten/addresses/0x9a908db106003823b289c55d89fac14597e221d1/tokens?context=yourExampleString&limit=50&offset=0`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': '79123f95ae49017095f016b66298150fd5bb2ef3',
                            'Accept': 'application/json; charset=UTF-8',
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(res => {
                        console.log("++++", res.data)
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