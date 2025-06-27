import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { components } from "@/components/markdown-components";
import MainLayout from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/shared/ShareButton";

export default function MoneyBasicsPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchArticleData = async () => {
      try {
        const response = await fetch(`https://notion-server-delta.vercel.app/api/money-basics/posts/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch article data');
        }
        
        const data = await response.json();
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
          Back to Money Basics
        </button>

        <header className="mb-4">
          <div className="flex items-center gap-4 mb-2">
            <Badge variant="outline" className="text-xs md:text-sm">{article.category}</Badge>
            <div className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime || '5 min read'}</span>
            </div>
          </div>
        </header>
        {article.title && (
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h1>
        )}
        {article.description && (
          <p className="text-muted-foreground mb-6 text-base md:text-lg">{article.description}</p>
        )}
        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {article.content}
          </ReactMarkdown>
        </article>
        <div className="mt-8 mb-4 flex items-center gap-2">
          <span className="text-muted-foreground text-sm">Found this helpful?</span>
          <ShareButton 
            title={article.title}
            url={window.location.href}
          />
        </div>
      </div>
    </MainLayout>
  );
}