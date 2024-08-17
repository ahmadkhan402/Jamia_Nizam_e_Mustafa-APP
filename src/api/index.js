import axios from "axios"

const getYoutubeLink = async () => {
    try {
        const response = await axios.get("https://nizamemustafa.com/Get_YoutubeLinks_API.php");
        return response.data;
    } catch (error) {
        console.error("Error fetching YouTube links:", error);
        throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}

const addmissionData = async (data) => {
    try {
        const response = await axios.post("https://nizamemustafa.com/admision_api.php", data)
        return response.data
    } catch (error) {
        return error.response.data
        // console.error("Error sending Addmission data :", error.response);
        // throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}
const getLibraryData = async () => {
    try {
        const response = await axios.get("https://nizamemustafa.com/GetLibraryBooks.php")
        return response.data
    } catch (error) {
        // console.error("Error fetching Library data:", error);
        throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}
const getResultData = async (rollNumber) => {
    try {
        const response = await axios.get(`https://nizamemustafa.com/GetStudentResults_Api.php?rollno=${rollNumber}`)

        if (response.data.success) {
            return response.data
        } else {
            return response.message
        }
    } catch (error) {
        return error.response.data
    }
}
const addQuestionData = async (data) => {
    try {
        const response = await axios.post("https://nizamemustafa.com/question_api.php", data)
        return response.data
    } catch (error) {
        console.error("Error sending Addmission data :", error);
        throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}
const getQuestionList = async (data) => {
    try {

        const response = await axios.post('https://nizamemustafa.com/GetQuestionAnswares_api.php', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Library data:', error);
        throw error;
    }
};
const getAllQuestions = async () => {
    try {
        const response = await axios.get("https://nizamemustafa.com/get_latest_questions.php")

        return response.data
    } catch (error) {
        console.error("Error fetching Library data:", error);
        throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}
const getPastStudents = async () => {
    try {
        const response = await axios.get("https://nizamemustafa.com/GetPastStudents.php")
        return response.data
    } catch (error) {
        console.error("Error fetching Library data:", error);
        throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}
export { getYoutubeLink, getPastStudents, addmissionData, getLibraryData, getResultData, addQuestionData, getQuestionList, getAllQuestions }