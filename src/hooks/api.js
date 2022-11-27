import { useState, useCallback } from 'react';
import Axios from "axios";

//get token list and information from wallet

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

//get token history from bscscan api

export const useHistory = () => {
    const [tokenhistory, setTokenHistory] = useState(null)
    const handleHistory = useCallback(async (tokenAddress, walletAddress) => {
        const fetchData = async () => {
            try {
                await Axios.get(
                    `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=${tokenAddress}&address=${walletAddress}&page=1&offset=5&startblock=0&sort=desc&apikey=5RA8RUEP8T48AFIXTZ9V2E81HWM532BZ1E`).then(res => {
                    setTokenHistory(res.data)
                })
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

//get token price from moralis api

export const useTokenPrice = () => {
    const [tokenprice, setTokenPrice] = useState(null)
    const handlePrice = useCallback(async (tokenAddress) => {
        const fetchData = async () => {
            try {
                await Axios.get(
                    `https://deep-index.moralis.io/api/v2/erc20/${tokenAddress}/price?chain=bsc`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': 'Dtn7MAUqnS4GXJBGinl4TiW4d5IzYzuZRCkN4nhHkLMo9ysx2MJuPUVcGpMn1x6S',
                        'Accept': 'application/json; charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => {
                    setTokenPrice(res.data)
                })
            } catch (error) {
                console.error('Unable to fetch data:', error)
            }
        }

        if (tokenAddress) {
            fetchData()
        }
    }, [])

    return { onPrice: handlePrice, tokenprice }
}