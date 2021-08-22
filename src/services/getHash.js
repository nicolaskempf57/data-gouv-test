import axios from "axios";

export default async (text, algorithm) => {
    const response = await axios.post("hash", {
        string: text,
        algorithm
    });

    return response.data;
};