import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { components } from "@/components/markdown-components";
import MainLayout from "@/components/layout/MainLayout";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://notion-server-delta.vercel.app/api/money-basics/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setContent(data.content);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Failed to fetch post ${id}:`, error);
        setContent(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <MainLayout><div className="text-center py-10">Loading...</div></MainLayout>;
  }

  if (!content) {
    return <MainLayout><div className="text-center py-10">Article not found.</div></MainLayout>;
  }

  return (
    <MainLayout>
      <div className="container max-w-3xl mx-auto py-8"> 
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back
        </button>
        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </MainLayout>
  );
}