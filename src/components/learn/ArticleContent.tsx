
interface ArticleContentProps {
  content: string;
  isMobile: boolean;
}

export function ArticleContent({ content, isMobile }: ArticleContentProps) {
  return (
    <div className={`prose max-w-none ${isMobile ? 'prose-sm' : 'prose-lg'}`}>
      <style>{`
        .prose {
          line-height: 1.8;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        .prose h2 {
          margin-top: 2.5em;
          margin-bottom: 1em;
          font-size: ${isMobile ? '1.5em' : '1.75em'};
          font-weight: 700;
          line-height: 1.3;
          color: hsl(var(--foreground));
        }
        .prose h3 {
          margin-top: 2em;
          margin-bottom: 0.75em;
          font-size: ${isMobile ? '1.25em' : '1.5em'};
          font-weight: 600;
          line-height: 1.4;
          color: hsl(var(--foreground));
        }
        .prose p {
          margin-bottom: 1.75em;
          line-height: 1.8;
          font-size: ${isMobile ? '16px' : '18px'};
          color: hsl(var(--foreground));
        }
        .prose ul, .prose ol {
          margin-bottom: 1.75em;
          padding-left: 1.5em;
        }
        .prose li {
          margin-bottom: 0.75em;
          line-height: 1.7;
          font-size: ${isMobile ? '16px' : '18px'};
          position: relative;
          color: hsl(var(--foreground));
        }
        .prose ul li {
          list-style: none;
          padding-left: 1.5em;
        }
        .prose ul li:before {
          content: "•";
          color: hsl(var(--primary));
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.2em;
          line-height: 1.4;
        }
        .prose ol li {
          padding-left: 0.5em;
        }
        .prose strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        .prose blockquote {
          margin: 2.5em 0;
          padding: 1.5em;
          background: hsl(var(--muted));
          border-left: 4px solid hsl(var(--primary));
          border-radius: 0 8px 8px 0;
          font-style: italic;
        }
        .prose blockquote p {
          color: hsl(var(--muted-foreground));
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 2em 0;
          font-size: ${isMobile ? '14px' : '16px'};
          overflow-x: auto;
          display: block;
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .prose table {
            display: table;
            white-space: normal;
          }
        }
        .prose th, .prose td {
          padding: ${isMobile ? '8px 6px' : '12px 16px'};
          text-align: left;
          border-bottom: 1px solid hsl(var(--border));
        }
        .prose th {
          font-weight: 600;
          background: hsl(var(--muted));
          font-size: ${isMobile ? '13px' : '15px'};
        }
        .prose td {
          font-size: ${isMobile ? '13px' : '15px'};
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
