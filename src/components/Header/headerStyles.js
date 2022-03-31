import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    btn: {
        marginLeft: '10px',
        border: '1px solid',
        borderColor:theme.palette.primary.main,
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
        }
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: '1',
        margin: '0',
        flexWrap: 'wrap',
        padding: '0'
    },
    appBar:{
        // backgroundColor:theme.palette.secondary.main,
        backgroundColor:'white',
        // boxShadow:'0 0 0 transparent',
    },
    btnbox: {
        display: 'flex',
        flexWrap: 'wrap',
        // border: '1px solid red'
    },
    navlinks: {
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
        // border: '1px solid red'
    },
    navigation: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '81%',
        // border: '1px solid red',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navbox: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '19%',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        }
        // border: '1px solid red'
    },
    navText: {
        color : "#000",
        // color:theme.palette.text.main,
    },
    navLogo: {
        // border: '1px solid red',
        paddingLeft: '0',
        width:'auto',
    },
    logo:{
        height:'40px',
        width:'auto',
        margin:'0',
        padding:'0'
    },
    userIcon: {
        fontSize: '30px',
        color:theme.palette.text.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: '50px',
        }
    },
    iconContainer: {
        border: '1px solid',
        borderColor: theme.palette.text.main,
        color: theme.palette.text.main,
        borderRadius: '30px',
        padding: '5px'
    },
    MenuItems: {
        color: theme.palette.primary.main,
        textAlign: 'right',
        margin: '0 20px',
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            color:'inherit'
        }
    },
    MenuContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'start',
        }
    },
    Button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        }
    },
    InnerUserIcon: {
        fontSize: '100px'
    }
}));
export default useStyles;