import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        "--border-width": '10px',
        top: '20%',
        left: '35%',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 30px 0px black',
        border: '4mm ridge rgba(170, 50, 220, .6)',
        padding: theme.spacing(2, 4, 5),
        animation: '$moveGradient 0.5s ease-in-out',
        borderRadius: "16px",
    },
    "@keyframes moveGradient": {
        "0%": {
            // 'transform': 'translate(200%,150%)',
            'transform': 'scale(0, 1)',
            'opacity': '0',
        },
        '100%': {
            // 'transform': 'translatex(0%)',
            'transform': 'scale(1, 1)',
        }
    },

    grid: {
        display: 'flex',
        justifyContent: 'center',
    },
    masv: {
        width: "330px",

    },
    name: {
        width: "330px",
    },
    button: {
        marginRight: "10%",
    },
    add: {
        position: 'absolute',
        top: '15%',
    },
    insert: {
        color: 'black',

    },
    check: {
        color: 'blue'
    }
}))