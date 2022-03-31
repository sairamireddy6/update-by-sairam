import axios from "axios";

const url = "http://localhost:5000";
// const url = "https://community-backend-vaibhav.herokuapp.com/";

export const postProblem = async (userId,postData) => {
    try {
      return await axios.post(`${url}/postproblem/${userId}`, postData);
    } catch (error) {
      console.log("Error while calling postProblems API", error);
    }
};



export const getProblems = async () => {
    try {
      return await axios.get(`${url}/problems`);
    } catch (error) {
      console.log("Error while calling getProblems API", error);
    }
};

export const getSpecificProblem = async (problemId) => {
    try {
      return await axios.get(`${url}/problems/${problemId}`);
    } catch (error) {
      console.log("Error while calling getSpecificProblem API", error);
    }
};

export const postComment = async (problemId,userId,commentData) => {
    try {
      return await axios.post(`${url}/problems/${problemId}/post/${userId}`,commentData);
    } catch (error) {
      console.log("Error while calling postComment API", error);
    }
};

export const  getUserProblems = async (userId) => {
    try {
      return await axios.get(`${url}/myProblems/${userId}`);
    } catch (error) {
      console.log("Error while calling getUserProblems API", error);
    }
};

export const  editProblem = async (problemId,userId,patchData) => {
    try {
      return await axios.patch(`${url}/myProblems/${problemId}/edit/${userId}`,patchData);
    } catch (error) {
      console.log("Error while calling editProblems API", error);
    }
};

export const  deleteProblem = async (problemId,userId) => {
    try {
      return await axios.delete(`${url}/myProblems/${problemId}/delete/${userId}`);
    } catch (error) {
      console.log("Error while calling deleteProblem API", error);
    }
};

export const editComment = async (problemId,commentId,userId,editData) => {
    try {
      return await axios.patch(`${url}/${problemId}/myComments/${commentId}/edit/${userId}`,editData);
    } catch (error) {
      console.log("Error while calling editComment API", error);
    }
};

export const deleteComment = async (problemId,commentId,userId) => {
    try {
      return await axios.delete(`${url}/${problemId}/myComments/${commentId}/delete/${userId}`);
    } catch (error) {
      console.log("Error while calling deleteComment API", error);
    }
};

export const likeProblem = async (problemId,userId) => {
    try {
      return await axios.put(`${url}/problems/${problemId}/like/${userId}`);
    } catch (error) {
      console.log("Error while calling likeProblem API", error);
    }
};

export const likeComment = async (problemId,commentId,userId) => {
    try {
      return await axios.put(`${url}/${problemId}/comments/${commentId}/like/${userId}`);
    } catch (error) {
      console.log("Error while calling likeComment API", error);
    }
};

export const getProblemLikes = async (problemId) => {
    try {
      return await axios.get(`${url}/problems/${problemId}/likes`);
    } catch (error) {
      console.log("Error while calling getProblemLikes API", error);
    }
};

export const getProblemComments = async (problemId) => {
    try {
      return await axios.get(`${url}/problems/${problemId}/comments`);
    } catch (error) {
      console.log("Error while calling getProblemComments API", error);
    }
};

export const getCommentLikes = async (commentId) => {
    try {
      return await axios.get(`${url}/comments/${commentId}/likes`);
    } catch (error) {
      console.log("Error while calling getCommentLikes API", error);
    }
};


export const deleteee = async (problemId) => {
  try {
    return await axios.delete(`${url}/problems/${problemId}`);
  } catch (error) {
    console.log("Error while calling deleteComment API", error);
  }
};

// export const dele = (id,e) =>{
//   e.preventDefault()
//    axios.delete(`${url}/problems/${id}`)
//    .then(res => console.log("Deleted!", res).catch(err => console.log(ErrorEvent)))
// }


