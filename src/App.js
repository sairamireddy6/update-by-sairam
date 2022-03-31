import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

//Paths
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/homepage/landing";
import PostProblem from "./components/PostProblem/PostProblem";
import Login from "./components/Login";
import ProblemsPage from "./components/ProblemsPage/ProblemsPage";
import SignUp from "./components/SignUp";
import Jobs from "./components/Jobs/Jobs";
import ProblemDetail from "./components/ProblemDetail/ProblemDetail1";
import MyProblemsPage from './components/MyProblems/myproblems';
import Edit from './components/edit/Edit'


const useStyles = makeStyles((theme) => ({
  body: {
    overflow: 'hidden'
  },
  maincontainer: {
    height: "auto",
    margin: 0,
    padding: 0,
    marginTop: 65,
    // border: "2px solid red",
    minHeight: "90vh",
  }
}))

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tab: 770,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  pallete: {
    primary: {
      main: "#003979",
      home: "#02142A",
    },
    secondary: {
      main: "#D3DCEE",
    },
    text: {
      main: "#003979",
      white: "fff",
    },
  }
})

function App() {
  const [contact,setcontact]=React.useState([]);
  const addDataHandler=(data)=>{
    console.log(data);
    setcontact([...contact,data]);

  }

  const classes = useStyles();
  return (
    <>
      <div className={classes.body}>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Header />
          <Box className={classes.maincontainer}>
            <Routes>
              <Route exact path="/" element={<><Landing /></>}></Route>
              <Route path="/login" element={<><Login /></>}></Route>
              <Route path="/signup" element={<><SignUp /></>}></Route>
              <Route path="/postproblem" element={<PostProblem addDataHandler={addDataHandler}/> }></Route>
              <Route path="/problemspage" element={<><ProblemsPage contact={contact} /></>}></Route>
              <Route path="/problemdetail/:problemId" element={<><ProblemDetail  /></>}></Route>
              <Route path="/jobs" element={<><Jobs /></>}></Route>
              <Route path="/myproblems" element={<> <MyProblemsPage />  </>}></Route>
              <Route path="/Edit/:problemId" element={<> <Edit/>  </>}></Route>
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
