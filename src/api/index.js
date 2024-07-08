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
        console.error("Error sending Addmission data :", error);
        throw error; // Optional: rethrow the error if you want to handle it elsewhere
    }
}

export { getYoutubeLink, addmissionData }