import React from "react";
import axios from "../apis/dadJokes";
import useAxios from "../hooks/useAxios";

const Jokes = () => {
  const [joke, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfg: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  return (
    <article>
      <h2>Random Dad Joke</h2>
      {loading && <p> Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && joke && <p>{joke?.joke}</p>}
      {!loading && !error && !joke && <p>No dad joke to display</p>}
    </article>
  );
};

export default Jokes;
