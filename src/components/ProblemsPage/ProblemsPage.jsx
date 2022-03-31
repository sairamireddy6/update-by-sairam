import { Container, Box, makeStyles, Divider, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import ProblemCard from './Problem-Card';
import Axios from 'axios';
import {getProblems} from '../../services/api';

const useStyles = makeStyles((theme) => ({
    body: {
        marginTop: '70px'
    },
    loadmorebtn: {
        margin: '20px auto',
        border: 'blue solid 1px',
        width:"150px",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        },

    },
    content: {
        // border: "2px solid black",
        margin: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center",
        flexWrap: 'wrap',
        padding:'2%',
    },
    problemcard: {
        // border: '2px solid red',
        width:"100%",
    },
}));

const ProblemPage = () => {

    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    // const token= localStorage.getItem('token');
    const classes = useStyles();

    useEffect(  ()=>{
        setLoading(true);
      
        const fetchData=async ()=>{
            try{
                const response = await getProblems();
                setLoading(false);
                setProblems(response.data.problems);
            }catch(error){
                setLoading(false);
            }

        }
        fetchData();
    },[])

    if(loading){
        return <>Loading ...</>;
    }

    return (
        <div className={classes.body}>
            <Container>
                <Box className={classes.content} >
                    <h1 style={{ margin: '0px 0px 10px' }}>Problems Posted By User ({problems.length})</h1>
                    
                    {
                        problems.map((problem) => {
                            return  <ProblemCard
                                        key={problem._id}
                                        title={problem.title}
                                        name={problem.name}
                                        body={problem.body}
                                        date={problem.date}
                                        user={problem.user}
                                        problemId={problem._id}
                                    />;
                        })
                    }
                    <Button className={classes.loadmorebtn} variant="outlined" color="primary">Load More</Button>
                </Box>
            </Container>
        </div>
    )

}
export default ProblemPage;

