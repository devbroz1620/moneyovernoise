
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Bookmark } from 'lucide-react';

interface VideoInsight {
  id: string;
  title: string;
  creator: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  duration: string;
  tags: string[];
  category: string;
}

const videoInsights: VideoInsight[] = [
  {
    id: '1',
    title: 'What is an ETF? (Explained for Beginners)',
    creator: 'CA Rachana Ranade',
    youtubeUrl: 'https://www.youtube.com/watch?v=example1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
    duration: '12:45',
    tags: ['Beginner', 'Basics'],
    category: 'Beginner ETF Explainers'
  },
  {
    id: '2',
    title: 'How to build your first ETF Portfolio',
    creator: 'Pranjal Kamra',
    youtubeUrl: 'https://www.youtube.com/watch?v=example2',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=225&fit=crop',
    duration: '18:30',
    tags: ['Asset Allocation', 'Psychology'],
    category: 'Investing Psychology'
  },
  {
    id: '3',
    title: 'Why GOLDBEES ETF is Trending in 2025',
    creator: 'AssetYogi',
    youtubeUrl: 'https://www.youtube.com/watch?v=example3',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop',
    duration: '15:20',
    tags: ['Gold', 'Strategy'],
    category: 'Gold & International ETFs'
  },
  {
    id: '4',
    title: 'Debt vs Equity ETFs: Complete Comparison',
    creator: 'FinShiksha',
    youtubeUrl: 'https://www.youtube.com/watch?v=example4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop',
    duration: '22:15',
    tags: ['Debt', 'Equity', 'Comparison'],
    category: 'Debt vs Equity'
  },
  {
    id: '5',
    title: 'Market Psychology & ETF Investing',
    creator: 'Investing Insights',
    youtubeUrl: 'https://www.youtube.com/watch?v=example5',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
    duration: '16:45',
    tags: ['Psychology', 'Behavioral Finance'],
    category: 'Investing Psychology'
  },
  {
    id: '6',
    title: '2025 Market Forecast: ETF Opportunities',
    creator: 'Market Movers',
    youtubeUrl: 'https://www.youtube.com/watch?v=example6',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
    duration: '25:30',
    tags: ['Forecast', 'Market Analysis'],
    category: 'Market Insights & Forecasts'
  }
];

const categories = [
  'All',
  'Beginner ETF Explainers',
  'Debt vs Equity',
  'Gold & International ETFs',
  'Investing Psychology',
  'Market Insights & Forecasts'
];

const VideoInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? videoInsights 
    : videoInsights.filter(video => video.category === selectedCategory);

  const handleVideoClick = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">🎙️ Video Insights</h2>
        <p className="text-muted-foreground text-lg">
          Curated videos and podcasts to sharpen your ETF investing game.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="text-xs"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="relative" onClick={() => handleVideoClick(video.youtubeUrl)}>
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {video.duration}
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-primary text-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="h-6 w-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                by {video.creator}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {video.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Button 
                  size="sm" 
                  onClick={() => handleVideoClick(video.youtubeUrl)}
                  className="flex items-center gap-1"
                >
                  <Play className="h-3 w-3" />
                  Watch
                </Button>
                
                <Button size="sm" variant="ghost">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No videos found for this category.</p>
        </div>
      )}
    </section>
  );
};

export default VideoInsights;
