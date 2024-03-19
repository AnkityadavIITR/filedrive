import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";
export async function uploadUserData(
  title,
  content,
  setUserData,
  setLoading,
  setUploadModal
) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/user/uploadData`,
      { title: title, content: content },
      {
        headers: {
          Authorization: `Bearer ` + getFromLocalStorage("token"),
        },
        timeout: 50000,
      }
    );
    if (data.success) {
      setUserData((prev) => [...prev, data.file]);
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
