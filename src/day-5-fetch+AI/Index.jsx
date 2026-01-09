import React from "react";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState("");

  // useEffect(() => {

  //     fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => res.json())
  //     .then((result) => setData(result))

  // },[])

  //====================================

  // using loading, error and succes

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) {
          throw new error("Failed to fetch data");
        }
        return res.json();
      })

      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p> Loading... </p>}
      {error && <p> {error} </p>}
      {!loading && !error && (
        <div>
          <h2>Day 5 – Fetch API</h2>
          <p> {data.userId}</p>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
