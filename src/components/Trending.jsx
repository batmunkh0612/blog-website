import { Card } from "./Card";

export const Trending = ({ articles }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-[#181A2A] text-2xl font-bold leading-7">Trending</h3>
      <div className="flex gap-6">
        {articles.map((article) => {
          return (
            <Card
              image={article.social_image}
              tagName={article.tag_list[0]}
              title={article.title}
            />
          );
        })}
      </div>
    </div>
  );
};
