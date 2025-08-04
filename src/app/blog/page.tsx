"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  ArrowRight,
  Filter,
  Tag,
  BookOpen,
  TrendingUp,
  Sparkles,
  Zap,
  Code,
  Globe,
  Smartphone,
  Database,
  Palette,
  Shield,
  Rocket,
  Star,
  Bookmark,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: "Explore the latest trends and technologies that will shape the future of web development, from AI integration to advanced frameworks.",
    content: "Web development is evolving at an unprecedented pace. In 2024, we're seeing the rise of AI-powered development tools, advanced frameworks, and new paradigms that are reshaping how we build for the web...",
    author: "Alex Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "AI", "Frameworks", "Trends"],
    image: "/blog/web-dev-future.jpg",
    views: 1247,
    likes: 89,
    comments: 23
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn how to create robust and scalable APIs using Node.js and Express, with best practices for performance and security.",
    content: "Creating scalable APIs is crucial for modern applications. In this comprehensive guide, we'll explore how to build robust APIs using Node.js and Express...",
    author: "Sarah Chen",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Backend Development",
    tags: ["Node.js", "Express", "API", "Performance"],
    image: "/blog/nodejs-apis.jpg",
    views: 892,
    likes: 67,
    comments: 18
  },
  {
    id: 3,
    title: "Revolutionary Mobile App Development: React Native vs Flutter",
    excerpt: "A comprehensive comparison of React Native and Flutter for mobile app development, including performance, development speed, and ecosystem analysis.",
    content: "Mobile app development has never been more exciting. With React Native and Flutter leading the cross-platform development space, developers have powerful tools at their disposal...",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
    image: "/blog/mobile-comparison.jpg",
    views: 2156,
    likes: 156,
    comments: 42,
    featured: true
  },
  {
    id: 4,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt: "Deep dive into CSS Grid and Flexbox to create responsive and flexible layouts that work across all devices.",
    content: "CSS Grid and Flexbox have revolutionized how we create layouts on the web. Understanding these powerful layout systems is essential for modern web development...",
    author: "Emily Watson",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Frontend Development",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    image: "/blog/css-layouts.jpg",
    views: 743,
    likes: 45,
    comments: 12
  },
  {
    id: 5,
    title: "DevOps Best Practices for Modern Development Teams",
    excerpt: "Essential DevOps practices that every development team should implement for faster, more reliable software delivery.",
    content: "DevOps has become essential for modern software development. Implementing the right practices can dramatically improve your team's efficiency and product quality...",
    author: "David Kim",
    date: "2024-01-05",
    readTime: "14 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Automation", "Best Practices"],
    image: "/blog/devops-practices.jpg",
    views: 1103,
    likes: 78,
    comments: 29
  },
  {
    id: 6,
    title: "The Complete Guide to UI/UX Design Principles",
    excerpt: "Master the fundamental principles of UI/UX design to create user experiences that delight and convert.",
    content: "Great UI/UX design is the foundation of successful digital products. Understanding and applying these principles can make the difference between a good and great user experience...",
    author: "Lisa Park",
    date: "2024-01-03",
    readTime: "18 min read",
    category: "Design",
    tags: ["UI/UX", "Design", "User Experience", "Principles"],
    image: "/blog/uiux-guide.jpg",
    views: 1892,
    likes: 134,
    comments: 37,
    featured: true
  },
  {
    id: 7,
    title: "Optimizing Database Performance for Web Applications",
    excerpt: "Learn advanced techniques for optimizing database performance and ensuring your applications scale efficiently.",
    content: "Database performance is critical for web application success. Poor database optimization can lead to slow applications and poor user experience...",
    author: "Alex Johnson",
    date: "2024-01-01",
    readTime: "11 min read",
    category: "Database",
    tags: ["Database", "Performance", "Optimization", "SQL"],
    image: "/blog/database-optimization.jpg",
    views: 967,
    likes: 56,
    comments: 19
  },
  {
    id: 8,
    title: "Building Secure Applications: A Developer's Guide",
    excerpt: "Essential security practices and techniques for building applications that protect user data and prevent vulnerabilities.",
    content: "Security should be a top priority in every development project. This guide covers essential security practices that every developer should know...",
    author: "Sarah Chen",
    date: "2023-12-28",
    readTime: "13 min read",
    category: "Security",
    tags: ["Security", "Authentication", "Encryption", "Best Practices"],
    image: "/blog/security-guide.jpg",
    views: 1345,
    likes: 92,
    comments: 31
  },
  {
    id: 9,
    title: "The Rise of AI in Software Development: Tools and Trends",
    excerpt: "Explore how artificial intelligence is transforming software development and the tools that are leading this revolution.",
    content: "Artificial intelligence is revolutionizing software development. From code generation to testing, AI tools are becoming indispensable for modern developers...",
    author: "Michael Rodriguez",
    date: "2023-12-25",
    readTime: "16 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Machine Learning", "Development", "Tools"],
    image: "/blog/ai-development.jpg",
    views: 2789,
    likes: 203,
    comments: 67,
    featured: true
  }
];

const categories = [
  { name: "All", icon: BookOpen, count: blogPosts.length },
  { name: "Web Development", icon: Globe, count: 2 },
  { name: "Mobile Development", icon: Smartphone, count: 1 },
  { name: "Backend Development", icon: Database, count: 1 },
  { name: "Frontend Development", icon: Palette, count: 1 },
  { name: "DevOps", icon: Shield, count: 1 },
  { name: "Design", icon: Palette, count: 1 },
  { name: "Security", icon: Shield, count: 1 },
  { name: "AI & Machine Learning", icon: Zap, count: 1 }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-primary font-semibold text-base shadow-md border border-primary/30">
                <BookOpen className="w-5 h-5 text-primary mr-1" />
                Vaidikode Blog
                <span className="flex items-center gap-1 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                  Latest Insights <Sparkles className="w-4 h-4" />
                </span>
              </span>
            </div>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Gothic" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Our
              </span>
              <span className="block text-primary">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover insights, tutorials, and the latest trends in software development, 
              design, and technology from our expert team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const isFullWidth = (index + 1) % 3 === 0;
              const isLiked = likedPosts.includes(post.id);
              const isBookmarked = bookmarkedPosts.includes(post.id);

              return (
                <Card 
                  key={post.id}
                  className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm cursor-pointer ${
                    isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(post.id);
                      }}
                      className={`h-8 w-8 p-0 ${isBookmarked ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className={`h-8 w-8 p-0 ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    </Button>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    {/* Post Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Category */}
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>

                      {/* Title */}
                      <h3 className={`font-bold leading-tight ${isFullWidth ? 'text-3xl' : 'text-xl'}`}>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className={`text-muted-foreground leading-relaxed ${isFullWidth ? 'text-lg' : 'text-sm'}`}>
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-muted">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {post.likes + (isLiked ? 1 : 0)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button size="lg" className="px-8 py-4 group hover:scale-105 transition-transform duration-300">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Stay Updated</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Never Miss an Article
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest insights, tutorials, and industry updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
} 