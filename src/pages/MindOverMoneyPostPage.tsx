import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { components } from "@/components/markdown-components";
import MainLayout from "@/components/layout/MainLayout";
import { Clock } from "lucide-react";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/shared/ShareButton";

export default function MindOverMoneyPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchArticleData = async () => {
      try {
        const response = await fetch(`https://notion-server-delta.vercel.app/api/mind-over-money/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch article data');
        }
        
        const data = await response.json();
        console.log("Fetched article data:", data);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  function handleShare(title: string) {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title, url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  }

  if (loading) {
    return <MainLayout><Loader /></MainLayout>;
  }

  if (!article || !article.content) {
    return <MainLayout><div className="text-center py-10">Article not found.</div></MainLayout>;
  }

  return (
    <MainLayout>
      <div className="container max-w-3xl mx-auto py-8"> 
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-blue-400 dark:text-white-300 text-lg font-semibold bg-transparent border-0 p-0 hover:text-teal-500 dark:hover:text-cyan-200 focus:outline-none"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Mind Over Money
        </button>

        {article.name && (
          <h1 className="text-3xl font-bold mb-2">{article.name}</h1>
        )}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-muted-foreground">Found this helpful?</span>
          <ShareButton 
            title={article.name}
            url={window.location.href}
          />
        </div>
        {article.description && (
          <p className="text-muted-foreground mb-6">{article.description}</p>
        )}

        <header className="mb-8">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime || '5 min read'}</span>
          </div>
        </header>

        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {article.content}
          </ReactMarkdown>
        </article>
      </div>
    </MainLayout>
  );
} 