import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Profile } from "./Profile";

export const BlogDetail = () => {
  const { id } = useParams();

  let [article, setArticle] = useState({
    user: {
        
    },
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
      });
  }, [id]);
  
  const markup = { __html: article.body_html };


  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-[36px] font-semibold leading-10 text-[#181A2A]">{article.title || "Hello"}</h1>
      <div className="flex items-center gap-5">
        <Profile
          image={article.user.profile_image || ""}
          username={article.user.username || ""}
        />
        <p className={"text-[#97989F] text-[16px] leading-[24px] font-normal"}>
          {article.published_at || ""}
        </p>
      </div>
  
      <img width="800px" height="462px" alt="detail" src={article.social_image} />
      <div dangerouslySetInnerHTML={markup} />
    </div>
  );
};
