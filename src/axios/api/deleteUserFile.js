import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";

export const deleteUserFile = async (fileId, setUserData,userData) => {
    try {
        const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/files/${fileId}`, {
            headers: {
                Authorization: `Bearer ` + getFromLocalStorage("token")
            },
            timeout: 50000,
        });
        console.log(data);
        console.log("userDat befor",userData);
        if (data.success) {
            setUserData(data.remainingFiles);
            console.log("userData after",userData);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}