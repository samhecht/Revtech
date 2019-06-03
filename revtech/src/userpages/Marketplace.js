import React from 'react';
import Posting from './Posting';
import { Box } from '@material-ui/core';

export default function Marketplace() {

    return (
        <div>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
            >

                <Posting/>
                <Posting/>
            </Box>
            
        </div>
    );
}