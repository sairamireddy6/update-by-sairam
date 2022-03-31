import React from "react";
import { AppBar, makeStyles, Container, Grid, Link, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Instagram, Facebook, Twitter, YouTube, LinkedIn, Copyright } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  icon: {
    marginRight: '10px',
    marginLeft: '20px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '0px',
    }
  },
  typography: {
    textDecoration: 'none',
    color: 'white ',
    '&:hover': {
      color: '#AED6F1'
    }
  },
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '10px',
    // border:"2px solid red"
  },
  container: {
    width: '33%',
    minWidth: '300px',
    border: '1px solid red',
  },
  gridContainer: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
  },
  gridSocialContainer: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
  },
  copyright: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px'
    }
  },
  footerHead: {
    fontWeight: 'bolder',
    padding: '20px 0'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer} >
        <div >
          <Container>
            <div className={classes.mainContainer}>
              <Grid container spacing={5}>
                <Grid className={classes.gridContainer} item xs={12} sm={6} md={4}>
                  <Typography className={classes.typography, classes.footerHead} variant="h5">
                    About</Typography>
                  <Link href="#" color="inherit" underline="none" className={classes.typography}>
                    <Typography variant="h6" className={classes.typography}>About us</Typography>
                  </Link>
                  <Link href="#" color="inherit" underline="none" className={classes.typography}>
                    <Typography variant="h6" className={classes.typography} >Terms and Conditions</Typography>
                  </Link>
                  <Link href="#" color="inherit" underline="none" className={classes.typography}>
                    <Typography variant="h6" className={classes.typography}>Privacy</Typography>
                  </Link>
                </Grid>
                <Grid className={classes.gridContainer} item xs={12} sm={6} md={4}>
                  <Typography className={classes.typography, classes.footerHead} variant='h5'>Support</Typography>
                  <Link href="#" color="inherit" underline="none" className={classes.typography}>
                    <Typography variant="h6" className={classes.typography} >Contact</Typography>
                  </Link>
                  <Link href="#" color="inherit" underline="none" className={classes.typography}>
                    <Typography variant="h6" className={classes.typography} >Blog</Typography>
                  </Link>
                  <Link href="#" color="inherit" underline="none" className={classes.typography}>
                    <Typography variant="h6" className={classes.typography} >General Queries</Typography>
                  </Link>
                </Grid>
                <Grid className={classes.gridContainer} item xs={12} sm={12} md={4}>
                  <Typography className={classes.typography, classes.footerHead} variant="h5">Social Media Handles</Typography>
                  <Box className={classes.gridSocialContainer}>
                    <Link href="https://www.instagram.com/cryptonaukri/" target='_blank' color="inherit" underline="none" className={classes.typography}>
                      <Typography variant="h6" className={classes.typography}  >
                        <Instagram className={classes.icon} />
                        Instagram
                      </Typography></Link>
                    <Link href="https://www.linkedin.com/company/cryptonaukri/" target='_blank' color="inherit" underline="none" className={classes.typography}>
                      <Typography variant="h6" className={classes.typography}>
                        <LinkedIn className={classes.icon} />
                        LinkedIn
                      </Typography></Link>
                    <Link href="https://twitter.com/CryptoNaukri" target='_blank' color="inherit" underline="none" className={classes.typography}>
                      <Typography variant="h6" className={classes.typography} >
                        <Twitter className={classes.icon} />
                        Twitter
                      </Typography></Link>
                    <Link href="https://www.youtube.com/channel/UCj-OThZ-RvEXqmscW4SKLRg" target='_blank' color="inherit" underline="none" className={classes.typography}>
                      <Typography variant='h6' className={classes.typography} >
                        <YouTube className={classes.icon} />
                        You Tube</Typography></Link>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className="text-center p-3">
          <Typography variant="h6" className={classes.typography, classes.copyright} component='div'>
            <Box sx={{ fontWeight: 'lighter', my: 1 }}>
              <Copyright className={classes.icon} />
              2022 Copyrights CryptoNaukri
            </Box>
          </Typography>
        </div>
      </footer>
    </>
  )
};

export default Footer;
