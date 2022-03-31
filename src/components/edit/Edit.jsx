import { Typography, Box, Container, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React,{useEffect, useState} from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import CommentCard from "./CommentCard";
// import TextEditor from './TextEditor';
import {getSpecificProblem,getProblemComments,editProblem} from '../../services/api';
// import { CommentForm } from './CommentForm';
import { CommentForm } from '../ProblemDetail/CommentForm';
import CommentCard from '../ProblemDetail/CommentCard';
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import { TextareaAutosize } from '@material-ui/core';


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
      width: '100%',
      backgroundColor: "#D3DCEE",
      padding:'10px',
      fontSize:18,
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

// console.log(problem.title,problem.body)

const Edit = () => {
    var [problem, setProblem] = React.useState({});
    // const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [refresh, setRefresh] = React.useState(false);

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
                // setComments(commentsResponse.data.problemComments);
            }catch(error){
                setLoading(false);
            }

        }
        fetchData();
    },[refresh])

      // start
    // const classes = useStyles();
    const navigate = useNavigate();
    const login = localStorage.getItem("login");
//     const userName = localStorage.getItem('cUser');

    const [problem1, setProblem1] = React.useState({
      title: "",
  })

  const [problem2, setProblem2] = React.useState({
    body: "",
});


  const handleChange = (e) => {
    setProblem1( ...problem1, e.target.value)
  };

  const handleChange1 = (e) =>{
    setProblem2(...problem2, e.target.value)
  }

  
//   const handlePosted = async(e) => {

//     e.preventDefault();
//     if (problem1.body === "" || problem1.title=== "") {
//         toast.error('All Fields are mendatory!')
//         return; 
//     }

//     try {
//         var decoded = jwt_decode(localStorage.getItem('token'));
//         const response= await Edit(decoded.userID,problem1);  
//         if(response.status===200){
//             setProblem1({ body: "", title: ""}); 
//             toast.success("Posted");
//             navigate("/problemspage"); 
//         }else{

//         }  
//     } catch (error) {
//     }

//     // props.addDataHandler(user);

// };

// const handleCancelled = () => {
//     toast.error("Canclled");
//     navigate("/problemspage");
// };

//   // end
    
const handlePosted =()=>{
  let item ={ problem1,problem2}
//   console.log(item)

    // editProblem()

    try{
        var i = true
        // let item ={ problem1,problem2}
        let item = {
            _id: problem._id,
            user: problem.user,
            title: problem1,
            body: problem2,
            name: problem.name,
            date: problem.date,
            __v: 0
            }
        if(i){
            editProblem(problem._id,problem.user,item);
            toast.success("updated");
            navigate('/problemspage')
        }
    }catch (error) {
    }
}

// const updateDocument = async (e) =>{
//   e.preventDefault();
//   if (problem1.body === "" || problem1.title=== "") {
//       toast.error('All Fields are mendatory!')
//       return; 
//   }

//   try {
//       var decoded = jwt_decode(localStorage.getItem('token'));
//       const response= await Edit(decoded.userID,problem1); 
//       if(response.status===200){
//           setProblem1({ body: "", title: ""}); 
//           toast.success("Posted");
//           navigate("/problemspage"); 
//       }else{

//       }  
//   } catch (error) {
//   }

    
// }

// updateDocument(problem._id)
    
    if(loading){
        return <>Loading... </>
    }

    return (
            // <Container>
            //     <Box className={classes.ProblemCard}>
            //         <Box>
            //                 <Typography variant={'h4'}>
            //                    Problem Title: {problem.title}
            //                 </Typography>
            //         </Box>
            //         <Box>
            //                 <Typography variant={'h5'}>
            //                  Problem Body: {problem.body}
            //                 </Typography>
            //         </Box>
            //         <Box>
            //             <Typography variant='h6'>
            //                Posted By: {problem.name}
            //             </Typography>
            //         </Box>
            //     </Box>

            //     <p>{problem.title}</p>
            //     <p>{problem.name}</p>

            // </Container>
            <Box className={classes.body}>
             {login ? <div className={classes.container}>
                <div className={classes.heading}>
                    <Typography variant='h4'>Post Problem!</Typography>
                </div><hr />
                <Box className={classes.problenamemdiv}>
                    <Typography className={classes.heading2} variant="h5" >Problem Title</Typography>
                    {/* <Typography>(Be sepcific while asking a question)</Typography> */}
                    <TextareaAutosize
                        className={classes.problembox}
                        onChange={(e) => { setProblem1(e.target.value) }}
                        name = 'title'
                        // value={problem1.title}
                        id="problembox"
                        // label="Click here to add your Problem"
                        label="...start typing problem"
                        placeholder="...start typing"
                        defaultValue={problem.title}
                    />
                </Box>
                <br />

                <Box>
                    <Typography className={classes.heading2} variant='h5'>Body</Typography>
                    {/* <Typography>(Include information to support your problem)</Typography> */}
                    <TextareaAutosize
                        className={classes.textarea}
                        onChange={(e) => { setProblem2(e.target.value) }}
                        name = 'body'
                        // value={problem1.body}
                        minRows={10}
                        placeholder="Include information to support your problem"
                        defaultValue={problem.body}
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
                    <Button onClick={handlePosted} variant="outlined" className={classes.btn}>update</Button>
                    <Button onClick={() => { navigate("/myproblems") }} variant="outlined" className={classes.btn}>Cancel</Button>
                </Box>
            </div> : <><Box className={classes._body}>
                <Typography className={classes._logintext} variant="h5">Please Login first to post a Problem</Typography>
                <Button onClick={() => { navigate("/login") }} variant="outlined" className={classes._btn}>Go to Login Page</Button>
            </Box>
            </>}
        </Box>
    )
}
export default Edit;
