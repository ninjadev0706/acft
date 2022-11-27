import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TokenListContainer } from './styles';
import { Title, } from '../styles';

const TokenList = ({ tokenlist, handleHistory, walletAddress, handleChange, getTokens }) => {
    const [tokendata, setTokenData] = useState();

    useEffect(() => {
        if (tokenlist) {
            setTokenData(tokenlist);
        }
    }, [tokenlist])

    return (
        <TokenListContainer>
            <Title>
                <div>
                    Token List
                </div>
                <div>
                    <input value={walletAddress} onChange={handleChange} />
                    &nbsp;
                    <button onClick={getTokens}>Get Tokens</button>
                </div>
            </Title>
            <TableContainer className='tableContainer' component={Paper}>
                <Table m='10px 0' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ContractAddress</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tokendata && tokendata.map((token, id) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => handleHistory(token?.token_address)}
                            >
                                <TableCell component="th" scope="row">
                                    {token?.token_address.slice(0, 5)}...{token?.token_address.slice(-5)}
                                </TableCell>
                                <TableCell align="center">{(Number(ethers.utils.formatUnits(token?.balance, token.decimals)).toFixed(2))} {token?.symbol}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TokenListContainer>
    );
}

export default TokenList;
