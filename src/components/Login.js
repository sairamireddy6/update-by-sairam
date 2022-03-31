import {
  Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, FormControl, CircularProgress
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: '30px',
    margin: '20px 20%',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 0 10px silver'
  },
  inputContainer: {
      margin: '30px 0'
  },
  Button: {
      '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: 'white'
      },
      width: '200px'
  },
  label: {
      backgroundColor: 'white',
      padding: '2px 5px',
      marginTop: '-5px',
  },
  buttonBox: {
      textAlign: 'center'
  },
  heading: {
      margin: '20px 10%',
      color: theme.palette.primary.main,
      fontWeight: 'bolder',
      textAlign: 'center'
  },
  body: {
      marginTop: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }
}));

const Login = () => {

  // localStorage.setItem("login");
  // localStorage.setItem("cUser");
  // localStorage.setItem("admin");

  const navigate = useNavigate();
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState('')
  const [loading, setLoading] = useState(false)

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!email || !password) {
      toast.error('Enter all the values !!');
    }
    if (email && password) {
      let response, data, token
      try {
        response = await Axios.post('https://cryptonaukribackend.herokuapp.com/api/v1/user/login', { email, password });
        data = response.data
        token = response.headers.authorization;
        //console.log(response.headers.authorization);
      } catch (error) {
        if (error && error.response) {
          data = error.response.data
        }
      }
      if (data && data.code === "LOGGED_IN" && data.userLoggedIn) {
        localStorage.setItem('login', true);
        localStorage.setItem('cUser', email);
        localStorage.setItem('token',token)
        toast.success("Login Successfully !");
        navigate('/');
      } else if (data && data.code === "WRONG_PASSWORD") {
        toast.error("Password doesn't match");
      } else if (data && data.code === "NOT_FOUND") {
        toast.error("Email Address not found!!");
      } else {
        toast.error("Login failed, please try again!!");
      }
    }
    setLoading(false)
  };

  return (
    <div className={classes.body} >
      <Container>
        <div className={classes.heading}>
          <Typography variant="h4" >
            <Box sx={{
              fontWeight: 'bold'
            }}>
              Login
            </Box>
          </Typography>
        </div>
        <Box component='form' className={classes.formContainer}>
          <Box className={classes.inputContainer}>
            <FormControl fullWidth variant="outlined">
              <InputLabel className={classes.label} htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type='text'
                value={email}
                onChange={handleEmailChange}
                name='email'
                label='Email'
                required
              />
            </FormControl>
          </Box>
          <Box className={classes.inputContainer}>
            <FormControl fullWidth variant="outlined">
              <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type='password'
                value={password}
                onChange={handlePassChange}
                name='password'
                label='Password'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                required
              />
            </FormControl>
          </Box>
          <Box className={classes.buttonBox}>
            <Button onClick={handleSubmit} variant="outlined" color="primary" className={classes.Button} disabled={loading} >
              {loading ? (
                <div align='center'>
                  <CircularProgress size={20} thickness={5} />
                </div>
              ) : 'Login'}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
