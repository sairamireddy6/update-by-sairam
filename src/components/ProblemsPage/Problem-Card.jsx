import React from 'react';
import { Box, Paper, Typography, Button, makeStyles, CardActions, } from '@material-ui/core';
import { spacing } from '@mui/system';
import { Delete, Edit } from "@material-ui/icons";
import Axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  ProblemCardContainer: {
    width: '100%',
    // border:'2px solid red',
    [theme.breakpoints.between('xs', 770)]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    }
  },
  ProblemCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '3px 3px 5px gray',
    // border: '2px solid blue',
    margin: '1%',
    [theme.breakpoints.between('xs', 770)]: {
      flexDirection: 'column',
      maxWidth: '350px',
      height: 'auto',
    },
    '&:hover': {
      // border: '1px solid #3F51B5',
      boxShadow: '3px 3px 15px gray',
      padding: '0',
    },
  },

  headcontain: {
    // border: '2px solid red',
    height: '70%',
    width: '100%',
    padding: '10px',
    [theme.breakpoints.between('xs', 770)]: {
      flexDirection: 'column',

    },
  },

  //---------------------------------------Bottom----------------------
  bottomcontain: {
    // border:"2px solid red",
    // height: "30%",
    height: 'auto',
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 5px',
  },
  cardHead: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:onclick': {
      color: theme.palette.primary.main,
    },
    // [theme.breakpoints.between('xs', 770)]: {
    //   variant='h6',
    // }
  },
  userbox: {
    // border:'2px solid blue',
    fontWeight: 'light',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',

    // padding:'auto',
    // margin:'auto',
  },
  username: {
    margin: 'auto',
    padding: 'auto',
    // border:'2px solid red',
    justifyContent: 'center',
  },
  seemoreBtn: {
    // border:'2px solid blue',
    margin: "1%",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    },
    [theme.breakpoints.between('xs', 770)]: {
      height:'1rem',
    }

  },
}));

const ProblemCard = ({name,user,title,body,problemId,date}) => {

  const navigate = useNavigate();

  const classes = useStyles();

  return (
        
          <Box className={classes.ProblemCard}>
           
              <Box >
                <Typography  variant={'h5'}>
                     Problem Title: {title}
                </Typography>
                <Typography  variant={'h5'}>
                     Problem Body: {body}
                </Typography>
                <Typography  variant={'h5'}>
                     Posted By: {name}
                </Typography>
                <Typography  variant={'h5'}>
                     Date: {date}
                </Typography>
              </Box>

            <Box className={classes.bottomcontain}>
             
              <Button onClick={() => { navigate(`/problemdetail/${problemId}`); }} className={classes.seemoreBtn} variant="outlined" color="primary">
                See More
              </Button>
            </Box>
          </Box>
        
    ); 

}

export default ProblemCard;
