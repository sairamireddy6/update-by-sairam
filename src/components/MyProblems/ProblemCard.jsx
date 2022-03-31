import { Paper, Box,  Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import {deleteProblem} from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';




const useStyles = makeStyles((theme) => ({
    card:{
        padding: '5px',
    },
    container: {
        position:'relative',
        left:'17px',
        top:'3px',
        fontSize: '160%',
        whiteSpace: 'nowrap', 
        width: '150px', 
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    container1: {
        position:'relative',
        left:'17px',
        top:'35px',
        opacity: 0.5,
        // bottom: '10px',
    },

    Delete: {
        position:'relative',
        color: "red",
        fontSize: 30,
        // left:'10px',
    },

    Edit:{
        position:'relative',
        fontSize: 30,
        color:'#5074bc',
        left:'-10px',
    },

    right:{
        textAlign: 'right',
        position:'relative',
        left:'-17px',
        position:'relative',
        bottom: '50px',
    }
}))

export default function ProblemCard({problem}){
    const [ID, setID] = useState(problem._id)
    const navigate = useNavigate();
    const classes = useStyles();
    console.info(problem);
    var deletePro = ()=>{
        
        // deleteProblem(problem._id,problem.user);
        // navigate('/myproblems')
        
        try{
            var i = true
            if(i){
                deleteProblem(problem._id,problem.user);
                toast.success("Delete");
                navigate('/problemspage')
            }
        }catch (error) {
        }
    }
    return(<>
            <Box sx={{marginTop:'30px'}} className={classes.card}>
                <Paper>
                <Typography className={classes.container}>
                    <b>{problem.title}</b> 
                </Typography>
                {/* <Typography className={classes.container}>
                    {problem.body} 
                </Typography> */}
                <Typography className={classes.container1}>
                 Asked on :  <b>{problem.date.slice(0, -14)}</b> 
                </Typography>

                {/* <Button variant='contained' color='primary'> Edit </Button>
                <Button variant='contained' color='secondary'> Delete </Button> */}
                <Box className={classes.right}>
                <Button variant="outlined" className={classes.Edit} ><EditIcon onClick={() => { navigate(`/Edit/${ID}`) }}/></Button>
                {/* <EditIcon className={classes.Edit} onClick={() => { navigate("/Edit") }}/> */}
                <Button variant="outlined" className={classes.Delete} onClick={deletePro}><DeleteIcon/></Button>
                {/* <DeleteIcon className={classes.Delete}/> */}
                </Box>

                </Paper>
            </Box>
    </>)
}