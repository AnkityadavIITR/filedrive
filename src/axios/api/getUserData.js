import { getFromLocalStorage, setLocalStorage } from "@/lib/utils";
import axios from "axios";
export const getUserData = async (
  setCurrentUserData,
  setLoading
) => {
  try {
    console.log("req")
    const {data} = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/user/data`,
      {
        headers: {
          Authorization: `Bearer ` + getFromLocalStorage("token"),
        },
        timeout: 10000,
      }
    );
    console.log(data);
    if(data.success){
      setLoading(false);
      setCurrentUserData(data.files);
      return true;
    }else {
      setLoading(false);
      return false;
    }
  } catch (e) {
    console.log(e);
    setLoading(false);
    return false;
  }
};
