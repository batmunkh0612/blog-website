import { useEffect, useState } from "react";
import { AllBlogPost, Button, Carousel, Trending } from "../components";
import axios from "axios";

export const Home = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`).then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <Carousel mockData={articles} />
      <Trending articles={articles.splice(0,4)} />
      <AllBlogPost articles={articles} />
      <Button />
    </>
  );
};
