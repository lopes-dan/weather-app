import { useState, useEffect } from "react";

const useFetchDeux = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return { data };
};

export default useFetchDeux;
