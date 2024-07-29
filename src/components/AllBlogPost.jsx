import { useNavigate } from "react-router-dom";
import { Post } from "./Post";
import { useState } from "react";

const category = [
  "All",
  "Design",
  "Travel",
  "Fashion",
  "Technology",
  "Branding",
];

export const AllBlogPost = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => navigate("/BlogListing");

  const handleClickCategory = (index) => setCurrentIndex(index);

  const handleClickPost = (id) => {
    navigate(`/${id}`)
  } 

  return (
    <div className="flex flex-col gap-[32px]">
      <h3 className="text-[#181A2A] text-2xl font-bold leading-7">
        All Blog Post
      </h3>
      <div className="flex justify-between">
        <div className="flex gap-5">
          {category.map((cate, i) => (
            <p
              onClick={() => handleClickCategory(i)}
              className={i === currentIndex ? "text-[#D4A373]" : ""}>
              {cate}
            </p>
          ))}
        </div>
        <p onClick={handleClick} className="cursor-pointer">
          View All
        </p>
      </div>
      <div className="flex flex-wrap items-start gap-5">
        {articles.map((article) => {
          return <Post onClick={() => handleClickPost(article.id)} username={article.user.username} profileImage={article.user.profile_image} label={article.tag_list[0]} image={article.social_image} title={article.title} date={article.published_timestamp} />;
        })}
      </div>
    </div>
  );
};
