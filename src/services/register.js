import axios from "axios";

export default async (username, password) => {
    const response = await axios.post("register", {
        username,
        password
    });

    return response.data;
};