import { Typography, Box, Container, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React,{useEffect} from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import TextEditor from './TextEditor';
import {postComment} from '../../services/api';

export const CommentForm=({problemId,userId})=>{

    const [comment,setComment]=React.useState({
        text:''
    })

    const handleChange=(e)=>{
        setComment((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const submitComment=async()=>{
        if(comment.text==='') return alert('Enter Comment Data First!');

        const responseComment = await postComment(problemId,userId,comment);
        console.info(responseComment);
    } 


    return(<>
                <Box >
                    <Typography variant="h4">Your Answer</Typography> 
                    
                    <Box >
                        <TextField 
                        id="inputcommentbox" 
                        label="Add Comment" 
                        name='text'
                        variant="outlined" 
                        size='large' 
                        onChange={handleChange}
                        fullWidth />
                    </Box>
                    <Box >
                        <Button variant="outlined"
                         color="primary" 
                         onClick={submitComment}                       
                         >Comment</Button>
                    </Box>
                </Box>
    </>)
}