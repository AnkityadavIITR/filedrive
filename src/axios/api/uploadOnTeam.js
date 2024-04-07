import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";
export async function uploadDataOnTeams(
  title,
  content,
  setTeamData,
  setLoading,
  setUploadModal,
  fileType,
  params
) {
  console.log(fileType);
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/upload/${params}`,
      { title: title, content: content, type:fileType},
      {
        headers: {
          Authorization: `Bearer ` + getFromLocalStorage("token"),
        },
        timeout: 50000,
      }
    );
    console.log(data);
    if (data.success) {
        setTeamData((prev) => [...prev, data.file]);
        setLoading(false);
        setUploadModal(false);
        return true;
      } else {
        setLoading(false);
        setUploadModal(false);
        return false;
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setUploadModal(false);
      return false;
    }
}
