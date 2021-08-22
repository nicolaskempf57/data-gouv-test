import axios from "axios";

export default async () => {
    const response = await axios.get("me");

    return response.data;
};