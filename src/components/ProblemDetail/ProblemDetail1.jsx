import { Typography, Box, Container, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React,{useEffect} from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import TextEditor from './TextEditor';
import {getSpecificProblem,getProblemComments,postComment} from '../../services/api';
import { CommentForm } from './CommentForm';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
    ProblemCard: {
        margin: '75px 0px 0px',
        padding: '2% 1%',
        backgroundColor: 'white',
        boxShadow: '3px 3px 5px gray',
    },
    cardHead: {
        color: theme.pallete.primary.main,
    },
    heading: {      
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 0 10px #6292E8'
    },
    btn: {
        margin: '1% auto 5%',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.home,
            color: theme.palette.primary.main,
        }
    },
    commentbtn: {
        textAlign: 'center'
    },
    inputcommentbox: {
        width: '100%',
        margin: '0% 2px',
    },
    commentboxsection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: "2% 0% 1%",
        // border:'2px solid red',
    },
    editor: {
        border: '2px solid grey',
        // height:'500px',
    },
}))
const ProblemDetail = () => {
    
    const [problem, setProblem] = React.useState({});
    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [refresh, setRefresh] = React.useState(false);
    const [comment,setComment]=React.useState({
        text:''
    })

    var decoded = jwt_decode(localStorage.getItem('token'));
    const navigate = useNavigate();
    const classes = useStyles();
    let params=useParams();

    useEffect(  ()=>{
        setLoading(true);
      
        const fetchData=async ()=>{
            try{
                const problemResponse = await getSpecificProblem(params.problemId);
                const commentsResponse=await getProblemComments(params.problemId);
                setLoading(false);
                setProblem(problemResponse.data.problem);
                setComments(commentsResponse.data.problemComments);
            }catch(error){
                setLoading(false);
            }

        }
        fetchData();
    },[refresh])


    

    const handleChange=(e)=>{
        setComment((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    const submitComment=async(e)=>{
        e.preventDefault(); 
        setLoading(true);
        if(comment.text==='') return toast.error('Enter Comment Data First!');
        try {
           const response = await postComment(problem._id,decoded.userID,{text:comment.text});
           if(response.status===200){

               setComment((pre)=>{
                return {...pre,text:''}
            })  
            setRefresh(true);
            toast.success("comment done")
            setRefresh(false);
            setLoading(false);
        }
        else{
            toast.error("Error");
        }

        } catch (error) {
            
        }
        
    } 

    
    
    if(loading){
        return <>Loading... </>
    }

    return (
            <Container>
                <Box className={classes.ProblemCard}>
                    <Box>
                            <Typography variant={'h4'}>
                               Problem Title: {problem.title}
                            </Typography>
                    </Box>
                    <Box>
                            <Typography variant={'h5'}>
                             Problem Body: {problem.body}
                            </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6'>
                           Posted By: {problem.name}
                        </Typography>
                    </Box>
                </Box>

                <Box className={classes.comments} sx={{ paddingTop: '20px' }}>
                    <Typography variant="h4">Comments ({comments.length})</Typography>
                    {
                        comments.length===0 ?<>
                            <Typography variant="h6">
                             No Comment Yet, Become a First Commenter
                             </Typography>
                        </>:<>
                        {
                        comments.map(({text,user,name,problem,date,commentId})=>{
                            return   <CommentCard
                                        text={text}
                                        user={user}
                                        name={name}
                                        problem={problem}
                                        date={date}
                                        commentId={commentId}
                            /> 
                        })      
                        
                         }
                        </>
                    }
                </Box>

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

            </Container>
    )
}
export default ProblemDetail;
