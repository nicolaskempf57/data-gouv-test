import axios from "axios";

export default async () => {
    const response = await axios.get("dummy-hash");

    return response.data;
};