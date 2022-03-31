import React, { Component, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles, Button, Typography } from '@material-ui/core';
import TextEditor from './TextEditor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TextareaAutosize } from '@material-ui/core';
import {postProblem} from '../../services/api';
import jwt_decode from "jwt-decode";


const useStyles = makeStyles((theme) => ({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10% auto'
    },
    _body: {
        // border:'2px solid green',
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
    container: {
        width: '80%',
        margin: 'auto',
    },
    problembox: {
        width: '100%',
        margin: 'auto',
        // backgroundColor: 'white',
        // border:'2px solid red',
    },
    problenamemdiv: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection : 'column',
        // border:'2px solid white',
    },
    submitbox: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    btn: {
        margin: 'auto',
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            color: theme.pallete.primary.main,
        }
    },
    heading: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 0 10px #6292E8'
    },
    editor: {
        border: '2px solid grey',
        // height:'500px',
    },
    heading2: {
        fontWeight: 'bold',
    },
    textarea: {
        width: '100%',
        backgroundColor: "#D3DCEE",
        padding:'10px',
        fontSize:18,
    },
}))


const PostProblem = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const login = localStorage.getItem("login");
    const userName = localStorage.getItem('cUser');

    const [userId,setUserId]=React.useState(null);

 

    const [problem1, setProblem] = React.useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        setProblem({ ...problem1, [e.target.name]: e.target.value })
    };


    const handlePosted = async(e) => {

        e.preventDefault();
        if (problem1.body === "" || problem1.title=== "") {
            toast.error('All Fields are mendatory!')
            return; 
        }

        try {
            var decoded = jwt_decode(localStorage.getItem('token'));
            const response= await postProblem(decoded.userID,problem1);  
            if(response.status===200){
                setProblem({ body: "", title: ""}); 
                toast.success("Posted");
                navigate("/problemspage"); 
            }else{

            }  
        } catch (error) {
        }

        // props.addDataHandler(user);

    };

    const handleCancelled = () => {
        toast.error("Canclled");
        navigate("/problemspage");
    };

    return (
        <Box className={classes.body}>
            {login ? <div className={classes.container}>
                <div className={classes.heading}>
                    <Typography variant='h4'>Post Problem!</Typography>
                </div><hr />
                <Box className={classes.problenamemdiv}>
                    <Typography className={classes.heading2} variant="h5" >Problem Title</Typography>
                    {/* <Typography>(Be sepcific while asking a question)</Typography> */}
                    <TextField
                        onChange={(e) => { handleChange(e) }}
                        name = 'title'
                        value={problem1.title}
                        id="problembox"
                        // label="Click here to add your Problem"
                        label="...start typing problem (Be sepcific while asking a question)"
                        // placeholder="...start typing"
                        className={classes.problembox}
                    />
                </Box>
                <br />

                <Box>
                    <Typography className={classes.heading2} variant='h5'>Body</Typography>
                    {/* <Typography>(Include information to support your problem)</Typography> */}
                    <TextareaAutosize
                        className={classes.textarea}
                        onChange={(e) => { handleChange(e) }}
                        name = 'body'
                        value={problem1.body}
                        minRows={10}
                        placeholder="Include information to support your problem"
                    />
                </Box>



                {/* Text Editor*/}
                {/* <Box>
                    <Typography className={classes.heading2} variant='h5'>Body</Typography>
                    <Typography>(Include information to support your problem)</Typography>
                    <div className={classes.editor}>
                        <TextEditor onChange={(e) => setUser({ qbody: e.target.value })} value={user.qbody} />
                    </div>
                </Box> */}


                <br />
                <Box className={classes.submitbox}>
                    <Button onClick={handlePosted} variant="outlined" className={classes.btn}>Post</Button>
                    <Button onClick={handleCancelled} variant="outlined" className={classes.btn}>Cancel</Button>
                </Box>
            </div> : <><Box className={classes._body}>
                <Typography className={classes._logintext} variant="h5">Please Login first to post a Problem</Typography>
                <Button onClick={() => { navigate("/login") }} variant="outlined" className={classes._btn}>Go to Login Page</Button>
            </Box>
            </>}
        </Box>
    );
}
export default PostProblem;