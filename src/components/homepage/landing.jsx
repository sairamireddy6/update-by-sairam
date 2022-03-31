import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  bg: {
    height: 'auto',
    minHeight: '90vh',
    marginTop:'65px',
    backgroundImage: "url('img/landing.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  text: {
    color: 'white',
    // fontSize:'10.5rem'
  },
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'inherit'
  },
  secName: {
    color: 'white',
    lineHeight: '4rem',
    fontSize: 55,
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      lineHeight: '3.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      lineHeight: '2rem',
    },
  },
  primeName: {
    color: 'white',
    lineHeight: '5rem',
    fontSize: 100,
    [theme.breakpoints.down('sm')]: {
      fontSize: 85,
      lineHeight: '3.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 45,
      lineHeight: '2rem',
    },
  },
  TagName: {
    color: 'white',
    lineHeight: '7rem',
    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      lineHeight: '3.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
      lineHeight: '1.6rem',
    },
  },
  span: {
    fontWeight: '500',
    fontFamily: 'Kanit, sans-serif !important',
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container className={classes.container}>
        {/* <Typography variant='h3' className={classes.text , classes.secName}>
          <Box sx={{ fontWeight: '500', fontFamily: 'Kanit, sans-serif !important' }}>
            Towards the
          </Box>
        </Typography> */}
        <Typography variant='h1' className={classes.text , classes.primeName}>
          <Box sx={{ fontWeight: '500', fontFamily: 'Kanit, sans-serif !important' }}>
          CryptoNaukri
          </Box>
        </Typography>
        <Typography variant='h6' className={classes.text , classes.TagName}>
          <Box sx={{ fontWeight: 'lighter', my: 1 }}>
            Community
          </Box>
        </Typography>
      </Container>
    </div>
  )
}

export default Landing;