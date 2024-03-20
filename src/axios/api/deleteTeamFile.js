import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";

export const deleteTeamsFile = async (fileId,teamId,setTeamData) => {
    try {
        const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/${teamId}/file/${fileId}`, {
            headers: {
                Authorization: `Bearer ` + getFromLocalStorage("token")
            },
            timeout: 50000,
        });
        console.log(data);
        if (data.success) {
            setTeamData(data.file);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}