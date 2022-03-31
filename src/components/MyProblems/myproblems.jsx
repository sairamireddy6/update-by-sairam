import React, { useState, useEffect } from 'react'
import ProblemCard from './ProblemCard';
import Axios from 'axios';
import { Container, Box, makeStyles, Divider, Button, Typography } from '@material-ui/core';
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { getUserProblems } from '../../services/api';

const useStyles = makeStyles((theme) => ({
    body: {
        marginTop: '70px'
    },

    _body: {
        // border:'2px solid green',
        marginTop: '10%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    _logintext: {
        margin: 'auto',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    _btn: {
        margin: '1% auto',
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            color: theme.pallete.primary.main,
        }
    },

    loadmorebtn: {
        margin: '5px',
        border: 'blue solid 1px',
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
        flexWrap: 'wrap',
        padding: '2%',
    },
    problemcard: {
        // border: '2px solid red',
    },
}));

const MyProblemPage = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const [myProblems, setMyProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const login = localStorage.getItem("login");

    useEffect(() => {
        const fetchData = async () => {
            if (login) {
                setLoading(true);
                const response = await getUserProblems(jwt_decode(localStorage.getItem('token')).userID);
                if (response.status === 200) {
                    setMyProblems(response.data);
                    setLoading(false);
                }

            }
        }

        fetchData();
    }, [])


    if (loading) {
        return <h2>Loading.........</h2>
    }



    return (
        <div className={classes.body}>
            {login ?
                <Container>
                    <Box className={classes.content} >
                        <h1 style={{ margin: '0px 0px 10px' }}>My Problems ({myProblems.length})</h1>
                        <Box className={classes.problemcard}>
                            {
                                myProblems.length === 0 ? <>
                                    {'You have not added problems'}
                                </> : <>
                                    {
                                        myProblems.map((problem)=>{
                                            return <ProblemCard problem={problem} />
                                        })
                                    }
                                </>
                            }

                        </Box>

                    </Box>
                </Container> :
                <><Box className={classes._body}>
                    <Typography className={classes._logintext} variant="h5">Please Login first to see your Problems</Typography>
                    <Button onClick={() => { navigate("/login") }} variant="outlined" className={classes._btn}>Go to Login Page</Button>
                </Box>
                </>
            }
        </div>
    )

}
export default MyProblemPage;

