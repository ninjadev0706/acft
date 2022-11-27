import React, { useEffect } from 'react';
import { ethers } from "ethers";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { HistoryContainer } from './styles';
import { Title } from '../styles';

const TokenHistory = ({ tokenhistories, walletAddress, tokenAddress, handleTx, getTx, tokenprice }) => {

    useEffect(() => {
        console.log("history = >", tokenhistories);
    }, [tokenhistories])

    return (
        <HistoryContainer>
            <Title>
                <div>
                    Transactions
                </div>
                <div>
                    <input value={tokenAddress} onChange={handleTx} />
                    &nbsp;
                    <button onClick={() => getTx(tokenAddress, walletAddress)}>Get Txs</button>
                </div>
            </Title>
            <TableContainer className='tableContainer' component={Paper}>
                <Table m='10px 0' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>WalletAddress</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">TxType</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            <TableCell align="center">GASPrice</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tokenhistories?.map((tokenhistory, id) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{(tokenhistory?.from === walletAddress) ? `${tokenhistory?.to.slice(0, 5)}...${tokenhistory?.to.slice(-5)}` : `${tokenhistory?.from.slice(0, 5)}...${tokenhistory?.from.slice(-5)}`}</TableCell>
                                <TableCell component="th" scope="row">
                                    {(Number(ethers.utils.formatUnits(tokenhistory?.value, tokenhistory?.tokenDecimal)).toFixed(2))} {tokenhistory?.tokenSymbol}
                                </TableCell>
                                <TableCell align="center">{(tokenhistory?.from === walletAddress) ? 'Sell' : 'Buy'}</TableCell>
                                <TableCell align="center">
                                    {
                                        tokenprice && tokenhistory &&
                                        <>
                                            {(Number(ethers.utils.formatUnits(tokenprice?.nativePrice.value, tokenprice?.nativePrice.decimals)) * Number(ethers.utils.formatUnits(tokenhistory?.value, tokenhistory?.tokenDecimal))).toFixed(5)} BNB
                                        </>
                                    }
                                </TableCell>
                                <TableCell align="center">{tokenhistory?.gas}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </HistoryContainer>
    );
}

export default TokenHistory;
