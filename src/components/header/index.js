import React from 'react';
import { Typography } from '@material-ui/core';
import useStytes from './styles';
const Index = () => {
    const classes = useStytes();
    return (
        <div>
            <Typography variant="h4" align="center" className={classes.container}>
                SMART TEAM
            </Typography>
        </div>
    );
}

export default Index;