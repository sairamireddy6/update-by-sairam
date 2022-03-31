import { Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, FormControl, Grid, CircularProgress } from '@material-ui/core';
import { Email, Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import React from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import { DriveFileRenameOutlineOutlined } from '@mui/icons-material';

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
        width: '250px'
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
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const SignUp = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    let urlParamId = searchParams.get("code");

    const navigate = useNavigate();
    const classes = useStyles();
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [coupon, setCoupon] = useState(urlParamId);
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false)
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleFNameChange = (event) => {
        setFName(event.target.value)
    };
    const handleLNameChange = (event) => {
        setLName(event.target.value)
    };

    
    const handlesetCoupon = (event) =>{
        setCoupon(event.target.value);
    };

    const sendOtp = async () => {
        if (!email) {
            toast.error("Please enter the email!!");
        } else {
            const response = await Axios.get(`https://cryptonaukribackend.herokuapp.com/api/v1/user/otp?email=${email}`);
            const data = response.data;
            if (data.code === "OTP_SENT" && data.otpSent) {
                toast.success("OTP has been sent!");
            } else {
                toast.error("Failed to send the OTP");
                toast.info("Make sure the entered email is correct");
            }
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // if (urlParamId === coupon) {
        //     toast.success('Coupon matched successfully!');
        //     // toast.success('Account Created !!');
        //     // toast.success('U can Now LogIn!!');
        // } else{toast.error('Wrong code');};

        if (!fname || !lname || !email || !password || !otp) {
            toast.error('Enter All the Values')
        }
        if (fname && lname && email && password && otp) {
            let response, data
            try {
                const location = Intl.DateTimeFormat().resolvedOptions().timeZone
                response = await Axios.post('https://cryptonaukribackend.herokuapp.com/api/v1/user/signup', {
                    firstName: fname,
                    lastName: lname,
                    email,
                    password,
                    location,
                    phoneNumber: phone,
                    otp: parseInt(otp)
                });
                data = response.data;
            } catch (error) {
                if (error && error.response) {
                    data = error.response.data
                }
            }
            if (data && data.code === "USER_ADDED" && data.userAdded) {
                toast.success('Account Created!!');
                toast.success('U can Now LogIn!!');
                navigate('/login');
            } else if (data && data.code === "WRONG_OTP") {
                toast.error("Incorrect OTP entered!!");
            } else {
                toast.error("Could not create account, please try again!!");
            }
        }
        setLoading(false)
    };
    return (
        <div className={classes.body}>
            <Container>
                <div className={classes.heading}>
                    <Typography variant="h4" >
                        <Box sx={{
                            fontWeight: 'bold'
                        }}>
                            New User SignUp
                        </Box>
                    </Typography>
                </div>
                <Box component='form' className={classes.formContainer}>

                    <Grid container spacing={3}>

                        <Grid item xs={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">First Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={fname}
                                    onChange={handleFNameChange}
                                    name='fname'
                                    label='Company Name'
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Last Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={lname}
                                    onChange={handleLNameChange}
                                    name='lname'
                                    label='Company Name'
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Box className={classes.inputContainer}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-email">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-email"
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-phone">Phone Number</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-phone"
                                        type='email'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.inputContainer}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel className={classes.label} htmlFor="outlined-adornment-email">Coupon Code</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                // type='email'
                                value={coupon}
                                onChange={handlesetCoupon}
                            />
                        </FormControl>

                    </Box>

                    <Box className={classes.inputContainer}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel className={classes.label} htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                    <Box className={classes.inputContainer}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-otp">OTP</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-otp"
                                        type="text"
                                        value={values.otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        label="OTP"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="primary" className={classes.Button} onClick={sendOtp}>Send OTP on email</Button>
                            </Grid>
                        </Grid>                        
                    </Box>

                    <Box className={classes.buttonBox}>
                        <Button onClick={handleSubmit} variant="outlined" color="primary" className={classes.Button} disabled={loading}  >
                        {loading ? (
                            <div align='center'>
                                <CircularProgress size={20} thickness={5} />
                            </div>
                        ) : 'Create Account'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
export default SignUp;