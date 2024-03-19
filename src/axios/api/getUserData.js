import { getFromLocalStorage, setLocalStorage } from "@/lib/utils";
import axios from "axios";
import { auth } from "@/config/firebase";
// import { refreshFirebaseToken } from "@/services/getRefreshToken";

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
        timeout: 50000,
      }
    );
    console.log(data);
    if(data.success){
      setLoading(false);
      setCurrentUserData(data.files);
      return true;
    }else return false
  } catch (e) {
    console.log(e);
    return false;
  }
};
