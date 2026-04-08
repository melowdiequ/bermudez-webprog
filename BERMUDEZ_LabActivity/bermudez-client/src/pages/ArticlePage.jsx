import { useParams } from 'react-router-dom';
import articles from '../assets/article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((a) => a.name === name);

  if (!article) return <NotFoundPage />;

  return (
    <div className="flex w-full flex-col items-center bg-white pb-20 pt-24">
      <header className="w-full max-w-4xl px-4 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6da158] mb-4">
          Nightingale Lane Gazette
        </p>
        <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 leading-tight">
          {article.title}
        </h1>
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-[2.5rem] border-2 border-zinc-900 shadow-[0_8px_0_0_#18181b]">
          <img src={article.imageUrl} alt={article.title} className="h-full w-full object-cover" />
        </div>
      </header>

      <main className="mt-12 w-full max-w-2xl px-6">
        <div className="space-y-8">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-zinc-700">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;