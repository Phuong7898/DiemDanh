import react from 'react';
import { IconButton } from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Modal, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import UseStytes from './style.js';
import { Grid } from '@material-ui/core';
import PlaylistAddCheckSharpIcon from '@material-ui/icons/PlaylistAddCheckSharp';
import { modalState$ } from '../selector/selector'
import { create, hideModal } from '../action';
const Index = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector(modalState$);
    const classes = UseStytes();
    const [data, setData] = react.useState({
        masv: '',
        name: ''
    })
    const onClose = react.useCallback(() => {
        dispatch(hideModal());
        setData({
            masv: '',
            name: ''
        });
    }, [dispatch])

    const onSubmit = react.useCallback(() => {
        dispatch(create.createRequest(data));
        onClose();
    }, [data, dispatch, onClose])

    const body = (<div className={classes.paper}>
        <form noValidate autoComplete="off" className={classes.container}>
            <Grid item xs>
                <Grid item className={classes.grid}>
                    <TextField type="text" id="standard-basic" helperText="VD: 16520966" label="Mã Sinh Viên" className={classes.masv} value={data.masv} onChange={(e) => setData({ ...data, masv: e.target.value })}></TextField>
                </Grid>
                <Grid item className={classes.grid}>
                    <TextField type="text" id="standard-basic" helperText="VD: Nguyễn Văn A" label="Họ và Tên" className={classes.name} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}></TextField>
                </Grid>
                <Grid item className={classes.grid}>
                    <IconButton onClick={onSubmit} className={classes.button}>
                        <PlaylistAddIcon style={{ fontSize: 40 }} className={classes.insert} />
                        <h5 className={classes.add} style={{ color: 'black' }}>Insert</h5>
                    </IconButton>
                    <IconButton>
                        <PlaylistAddCheckSharpIcon style={{ fontSize: 40 }} className={classes.check} />
                        <h5 className={classes.add} style={{ color: 'blue' }}>Check</h5>
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    </div>);
    return (
        <Modal open={isShow} onClose={onClose}>
            <div className={classes.border}>
                {body}
            </div>
        </Modal>
    );
};
export default Index;
