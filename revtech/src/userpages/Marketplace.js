import React from 'react';
import Posting from './Posting';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';

export default function Marketplace() {
    const titleStyle = {
        marginTop: "5%",
    }
    return (
        <div>
            <Navbar/>
            <Typography 
                variant="h2"
                style={titleStyle}
            >
                Marketplace
            </Typography>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
            >

                <Posting/>
                <Posting/>
            </Box>
            <div style={{
                marginTop: '20%',
                marginBottom: '5%'
            }}>
                <p>Copyright 2019 the dream team</p>
            </div>
            
        </div>
    );
}