
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, Send } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

interface CommentsProps {
  articleId: string;
}

const Comments = ({ articleId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Rajesh Kumar',
      content: 'Great article! This really helped me understand ETFs better. I was confused about expense ratios but now it makes sense.',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      author: 'Priya Sharma',
      content: 'Thanks for breaking this down so simply. Can you write about debt funds next?',
      timestamp: '1 day ago'
    }
  ]);
  
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: authorName,
        content: newComment,
        timestamp: 'Just now'
      };
      
      setComments([comment, ...comments]);
      setNewComment('');
      setAuthorName('');
      setIsSubmitting(false);
    }, 1000);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <section className="mt-12 pt-8 border-t">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>
      </div>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <h4 className="font-semibold">Join the Discussion</h4>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Your name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
              />
              <div></div>
            </div>
            <Textarea
              placeholder="Share your thoughts about this article..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              required
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting || !newComment.trim() || !authorName.trim()}>
                {isSubmitting ? 'Posting...' : 'Post Comment'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id} className="border-l-4 border-l-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {getInitials(comment.author)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-medium">{comment.author}</h5>
                    <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{comment.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {comments.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comments;
