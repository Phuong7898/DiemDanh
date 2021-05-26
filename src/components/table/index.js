import react from 'react';
import useStyles from './style.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { postsState$ } from '../selector/selector'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../action';
const Index = () => {
    const posts = useSelector(postsState$)
    const dispatch = useDispatch();
    const classes = useStyles();
    react.useEffect(() => {
        dispatch(actions.getPosts.getRequest())
    }, [dispatch]);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Mã Sinh Viên</TableCell>
                        <TableCell align="right">Họ Và tên</TableCell>
                        <TableCell align="right">Điểm danh</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.masv}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            {(row.diemdanh === true) ? <TableCell align="right" style={{ color: '#00cc44', fontWeight: 'bolder' }}>OK</TableCell> : <TableCell align="right" style={{ color: 'red', fontWeight: 'bolder' }}>Fail</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Index;
