import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import TokenList from './components/TokenList';
import TokenHistory from './components/TokenHistory';
import { useToken, useHistory } from './hooks/api';
import Navbar from './Navbar';

const App = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [tokenAddress, setTokenAddress] = useState('');

    const { onTokens, tokenlist } = useToken();
    const { onHistory, tokenhistory } = useHistory();

    const isMobile = useMediaQuery("(max-width: 1000px)");

    const handleChange = (e) => {
        setWalletAddress(e.target.value);
    }

    const handleTx = (e) => {
        setTokenAddress(e.target.value);
    }

    const getTokens = () => {
        if (walletAddress !== '') {
            onTokens(walletAddress);
        } else {
            alert('input wallet address');
        }
    }

    const getTx = () => {
        if (tokenAddress !== '') {
            onHistory(tokenAddress);
        } else {
            alert('input token address');
        }
    }

    const handleHistory = (tokenAddress) => {
        onHistory(tokenAddress, walletAddress);
    }

    useEffect(() => {
        console.log("tokenlist = >", tokenhistory);
    }, [tokenhistory])


    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1 }} m='20px'>
                {
                    !isMobile ?
                        <Grid container justifyContent="space-between">
                            <Grid item xs={5}>
                                <TokenList tokenlist={tokenlist} handleHistory={handleHistory} walletAddress={walletAddress} handleChange={handleChange} getTokens={getTokens} />
                            </Grid>
                            <Grid item xs={6}>
                                <TokenHistory walletAddress={walletAddress} tokenhistories={tokenhistory?.result} tokenAddress={tokenAddress} handleTx={handleTx} getTx={getTx} />
                            </Grid>
                        </Grid>
                        :
                        <Grid container>
                            <Grid item xs={12}>
                                <TokenList tokenlist={tokenlist} handleHistory={handleHistory} walletAddress={walletAddress} handleChange={handleChange} getTokens={getTokens} />
                            </Grid>
                            <Grid item xs={12}>
                                <TokenHistory walletAddress={walletAddress} tokenhistories={tokenhistory?.result} tokenAddress={tokenAddress} handleTx={handleTx} getTx={getTx} />
                            </Grid>
                        </Grid>
                }
            </Box>
        </>
    )
}

export default App;

