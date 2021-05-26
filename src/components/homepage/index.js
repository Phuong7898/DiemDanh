import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux'
import { showModal } from '../action';
import Form from '../form';
import useStyles from './styles';
import Table from '../table';
import Header from '../header';

function Index() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(() => {
        dispatch(showModal());
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Header />
            <Table />
            <Form />
            <Fab color='primary' className={classes.fab} onClick={openCreatePostModal}>
                <AddIcon />
            </Fab>
        </Container>
    );
}

export default Index;