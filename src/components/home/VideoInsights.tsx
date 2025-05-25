
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Bookmark } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

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
    youtubeUrl: 'https://youtu.be/R5aDUli_sAc?si=16p8cBxJZwJQW8Rq',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
    duration: '12:45',
    tags: ['Beginner', 'Basics', 'ETF'],
    category: 'Beginner ETF Explainers'
  },
  {
    id: '2',
    title: 'How to build your first ETF Portfolio',
    creator: 'Pranjal Kamra',
    youtubeUrl: 'https://youtu.be/Wec_gpnLLmE?si=inHtmZC9TM0SeMIE',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=225&fit=crop',
    duration: '18:30',
    tags: ['Portfolio', 'Asset Allocation', 'Strategy'],
    category: 'Investing Psychology'
  },
  {
    id: '3',
    title: 'ETF vs Mutual Fund: Complete Analysis',
    creator: 'Finance Expert',
    youtubeUrl: 'https://youtu.be/EzjYVb2Y5EM?si=PSdCwYOvqRNmGDTp',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop',
    duration: '15:20',
    tags: ['Comparison', 'Analysis', 'Investment'],
    category: 'Market Insights & Forecasts'
  },
  {
    id: '4',
    title: 'Debt vs Equity ETFs: Complete Guide',
    creator: 'Investment Guru',
    youtubeUrl: 'https://youtu.be/t86OsSL7Opk?si=btyRoZh358QLq3Ha',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop',
    duration: '22:15',
    tags: ['Debt', 'Equity', 'Comparison', 'Guide'],
    category: 'Debt vs Equity'
  },
  {
    id: '5',
    title: 'Gold ETF Investment Strategy 2025',
    creator: 'Wealth Builder',
    youtubeUrl: 'https://youtu.be/OvoDRnAFNuw?si=-aSJvlSw6_PEpOrC',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
    duration: '16:45',
    tags: ['Gold', 'Strategy', '2025', 'Commodities'],
    category: 'Gold & International ETFs'
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

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Beginner ETF Explainers':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'Debt vs Equity':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Gold & International ETFs':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Investing Psychology':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'Market Insights & Forecasts':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const VideoInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const isMobile = useIsMobile();

  const filteredVideos = selectedCategory === 'All' 
    ? videoInsights 
    : videoInsights.filter(video => video.category === selectedCategory);

  const handleVideoClick = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  const VideoCard = ({ video }: { video: VideoInsight }) => (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
      <div className="relative flex-shrink-0" onClick={() => handleVideoClick(video.youtubeUrl)}>
        <img 
          src={video.thumbnailUrl} 
          alt={video.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${isMobile ? 'h-32' : 'h-48'}`}
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

      <CardContent className={`flex flex-col flex-grow ${isMobile ? 'p-3' : 'p-4'}`}>
        <h3 className={`font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors ${isMobile ? 'text-sm' : 'text-lg'}`}>
          {video.title}
        </h3>
        
        <p className={`text-muted-foreground mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>
          by {video.creator}
        </p>

        <div className="flex flex-wrap gap-1 mb-4 flex-grow">
          {video.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className={`${isMobile ? 'text-xs px-2 py-0.5' : 'text-xs'} ${getCategoryColor(video.category)}`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <Button 
            size={isMobile ? "sm" : "sm"}
            onClick={() => handleVideoClick(video.youtubeUrl)}
            className={`flex items-center gap-1 ${isMobile ? 'text-xs px-3 py-1 h-7' : ''}`}
          >
            <Play className={`${isMobile ? 'h-2.5 w-2.5' : 'h-3 w-3'}`} />
            Watch
          </Button>
          
          <Button size={isMobile ? "sm" : "sm"} variant="ghost" className={isMobile ? 'h-7 w-7 p-0' : ''}>
            <Bookmark className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="container py-8 md:py-12">
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
            className={`${isMobile ? 'text-xs px-2 py-1 h-7' : 'text-xs'} ${selectedCategory === category ? '' : getCategoryColor(category)}`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Video Carousel - Always use carousel for consistent horizontal scrolling */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {filteredVideos.map((video) => (
            <CarouselItem 
              key={video.id} 
              className={`pl-2 md:pl-4 ${isMobile ? 'basis-4/5' : 'basis-1/3'}`}
            >
              <VideoCard video={video} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {filteredVideos.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No videos found for this category.</p>
        </div>
      )}
    </section>
  );
};

export default VideoInsights;
