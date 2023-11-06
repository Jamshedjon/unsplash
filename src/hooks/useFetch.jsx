import { useEffect, useState } from "react";
export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState();

  const postNewDate = (newData) => {
    setPostData({
      method: method,
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(newData),
    });
  };

  useEffect(() => {
    const getData = async (postData) => {
      setIsPanding(true);
      try {
        const req = await fetch(url, { ...postData });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPanding(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPanding(false);
      }
    };
    if (method === "POST" && postData) {
      getData(postData);
    }
    if (method === "GET" && url) {
      getData();
    }
  }, [url, method, postData]);
  return { data, isPanding, error, postNewDate };
}
