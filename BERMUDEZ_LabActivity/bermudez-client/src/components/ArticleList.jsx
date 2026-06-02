import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => {
        const imageSrc = article.image || article.imageUrl;
        const previewText = Array.isArray(article.content)
          ? article.content[0]
          : article.content;

        return (
          <article
            key={article._id || article.name}
            className="rounded-3xl border-2 border-zinc-900 bg-[#92c57a] p-4 flex flex-col transition-colors"
          >
            <div className="aspect-4/3 rounded-[1.25rem] border-2 border-zinc-900 overflow-hidden bg-zinc-200">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-zinc-500">
                  No Image
                </div>
              )}
            </div>

            <div className="flex grow flex-col justify-between">
              <div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
                  Story {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-50">
                  {previewText ? `${previewText.substring(0, 100)}...` : ""}
                </p>
              </div>

              <Link to={`/articles/${article.name}`}>
                <Button className="mt-4 w-full">Read More</Button>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;