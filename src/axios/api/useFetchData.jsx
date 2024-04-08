// "use client";
// import axios from "axios";
// import { response } from "express";
// import { useEffect, useState } from "react";

// const useFetchData = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const { data } = await axios.get(`${NEXT_PUBLIC_SERVER_URI}${url}`,      {
//         headers: {
//           Authorization: `Bearer ` + getFromLocalStorage("token"),
//         },
//         timeout: 10000,
//       });
//       if (response.success) {
//         setData(data.files);
//         setLoading(false);
//       }
//     } catch (e) {
//       setError(e);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(); 
//   }, [url]);
//   const refetch = () => {
//     fetchData();
//   };
//   return { data, loading, error, refetch };
// };

// export default useFetchData;
