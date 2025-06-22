import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { components } from "@/components/markdown-components";
import MainLayout from "@/components/layout/MainLayout";
import { Clock } from "lucide-react";
import Loader from "@/components/ui/Loader";

export default function EtfPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchArticleData = async () => {
      try {
        const response = await fetch(`https://notion-server-delta.vercel.app/api/etfs/${id}`);

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
          className="mb-6 flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to ETFs
        </button>

        <header className="mb-8">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime || '5 min read'}</span>
          </div>
          {/* The title is expected to be part of the markdown content */}
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