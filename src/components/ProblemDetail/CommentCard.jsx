import React from 'react';
import { Box, Paper, Typography, Button, makeStyles, CardActions, } from '@material-ui/core';
import { spacing } from '@mui/system';
import { Delete, Edit } from "@material-ui/icons";
import Axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  CommentCardContainer: {
    // border:'2px solid red',
    [theme.breakpoints.between('xs', 770)]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  },
  CommentCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: '3px 3px 10px silver',
    transition: '100ms All linear',
    // display: 'flex',

    marginTop: '20px',
    [theme.breakpoints.between('xs', 770)]: {
      flexDirection: 'column',
    //   maxWidth: '350px',
      height: 'auto',
    },
    '&:hover': {
      // border: '1px solid #3F51B5',
      boxShadow: '3px 3px 5px gray',
      padding: 0
    },
  },
  right: {
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
    padding: '15px',
    fontWeight: 'light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.between('xs', 770)]: {
      width: '100%'
    },
  },
  rightBottom: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  seemoreBtn: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    },

  },
  headcontain: {
    // border:'2px solid red',
    display: 'block',
    height: '70%',
    width: '100%',
    padding: '10px',
    // justifyContent: 'space-between',
    // alignItems: 'start',
    [theme.breakpoints.between('xs', 770)]: {
      flexDirection: 'column',

    },
  },
  bottomcontain: {
    // border:"2px solid red",
    height: "30%",
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
  },

  btn: {
    border: 'blue solid 1px',
    '&:hover': {
      border: 'blue solid 1px',
      backgroundColor: 'white',
      color: 'blue'
    },
  },

  cardHead: {
    // color:theme.palette.primary.main,
  },
}));

const CommentCard = ({text,user,name,problem,date,commentId}) => {
  
 
  const classes = useStyles();
  return (
        <Box className={classes.CommentCard}>
              <Typography className={classes.cardHead} variant={'h5'}>
                 Text:{text}
              </Typography>
            
            <Typography className={classes.carduser} variant='h6'>
                Posted By:{name}
            </Typography>
              <Typography className={classes.cardHead} variant={'h5'}>
                 Date:{date}
              </Typography>
        </Box>
  )
}

export default CommentCard;
