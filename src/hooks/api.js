import { useState, useCallback } from 'react';
import Axios from "axios";

export const useToken = () => {
    const [tokenlist, setTokenlist] = useState(null)
    const handleTokens = useCallback(async (walletAddress) => {
        const fetchData = async () => {
            try {
                await Axios.get(
                    `https://deep-index.moralis.io/api/v2/${walletAddress}/erc20?chain=bsc`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': 'Dtn7MAUqnS4GXJBGinl4TiW4d5IzYzuZRCkN4nhHkLMo9ysx2MJuPUVcGpMn1x6S',
                        'Accept': 'application/json; charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => {
                    setTokenlist(res.data)
                    console.log("fa====> ", res.data)
                })
            } catch (error) {
                console.error('Unable to fetch data:', error)
            }
        }

        if (walletAddress) {
            fetchData()
        }
    }, [])

    return { onTokens: handleTokens, tokenlist }
}

export const useHistory = () => {
    const [tokenhistory, setTokenHistory] = useState(null)
    const handleHistory = useCallback(async (tokenAddress, walletAddress) => {
        console.log("tokenAddress => ", tokenAddress)
        const fetchData = async () => {
            try {
                await Axios.get(
                    `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&sort=desc&apikey=5RA8RUEP8T48AFIXTZ9V2E81HWM532BZ1E`).then(res => {
                    setTokenHistory(res.data)
                })
                // await Axios.get(
                //     `https://deep-index.moralis.io/api/v2/${tokenAddress}?chain=bsc&limit=5`, {
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'X-API-Key': 'Dtn7MAUqnS4GXJBGinl4TiW4d5IzYzuZRCkN4nhHkLMo9ysx2MJuPUVcGpMn1x6S',
                //         'Accept': 'application/json; charset=UTF-8',
                //         'Access-Control-Allow-Origin': '*'
                //     }
                // }).then(res => {
                //     setTokenHistory(res.data)

                //     console.log("txdsfa====> ", res.data)
                // })
            } catch (error) {
                console.error('Unable to fetch data:', error)
            }
        }

        if (tokenAddress && walletAddress) {
            fetchData()
        }
    }, [])

    return { onHistory: handleHistory, tokenhistory }
}