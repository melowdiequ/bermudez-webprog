import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ArticleList from "../../components/ArticleList";
import API from "../../constants";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API.HOST}/articles`);

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex w-full flex-col pt-20">
      <section className="relative overflow-hidden border-b-2 border-zinc-900 bg-[#fdfbf7] px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-[#92c57a] opacity-20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#6da158]">
            The Uguisu Yokocho Gazette
          </p>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-zinc-900 sm:text-5xl">
            The Fresh Scoop from Nightingale Lane!
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base font-medium">
            Catch up on the latest 3-on-3 basketball highlights, clumsy morning
            jogs, and the newest vegetarian recipes from Pochacco and the gang.
            Grab a bowl of banana ice cream and stay a while!
          </p>

          <div className="mt-8">
            <Button to="/">Jog Back Home</Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8 mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Recent Posts
          </p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-900">
            Nightingale Lane Local News
          </h2>
        </div>

        <div className="mx-auto max-w-7xl">
          <ArticleList articles={articles} />
        </div>
      </section>
    </div>
  );
};

export default ArticleListPage;