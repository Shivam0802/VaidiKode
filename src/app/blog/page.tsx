"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  ExternalLink,
  ChevronDown,
  X
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const postsPerPage = 6;

  const sortOptions = [
    { value: "newest", label: "Newest First", icon: Calendar },
    { value: "oldest", label: "Oldest First", icon: Clock },
    { value: "popular", label: "Most Popular", icon: TrendingUp },
    { value: "alphabetical", label: "A-Z", icon: ArrowRight },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort posts based on selected criteria
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "popular":
        return (b.views + b.likes + b.comments) - (a.views + a.likes + a.comments);
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("newest");
    setCurrentPage(1);
  };

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
      {/* SVG Filter for Glass Distortion */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.02 0.02"
              numOctaves="2" 
              seed="92" 
              result="noise" 
            />
            <feGaussianBlur 
              in="noise" 
              stdDeviation="2" 
              result="blurred" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="blurred" 
              scale="110"
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
          
        </div>


        {/* Content */}
        <div className="container mx-auto py-8 px-4 relative z-10">
          <div className="liquid-glass-card">
            <div className="card-content">
          <motion.div
            className="text-center max-w-5xl mx-auto text-white px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 mb-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              
                <BookOpen className="w-5 h-5 text-white" />
             
              <span className="text-sm font-semibold">Vaidikode Blog</span>
              <motion.span
                className="inline-flex items-center gap-1 bg-gradient-to-r from-primary/30 to-accent/30 px-3 py-1 rounded-full text-xs font-medium"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, rgba(209, 169, 128, 0.3), rgba(209, 169, 128, 0.1))",
                    "linear-gradient(135deg, rgba(209, 169, 128, 0.1), rgba(209, 169, 128, 0.3))",
                    "linear-gradient(45deg, rgba(209, 169, 128, 0.3), rgba(209, 169, 128, 0.1))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Latest Insights 
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3" />
                </motion.div>
              </motion.span>
            </motion.div>

            {/* Animated Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Gothic" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Our
              </motion.span>
              <motion.span 
                className="block text-[#D1A980]"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(209, 169, 128, 0.5)",
                    "0 0 40px rgba(209, 169, 128, 0.8)",
                    "0 0 20px rgba(209, 169, 128, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Blog
              </motion.span>
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover insights, tutorials, and the latest trends in software development, 
              design, and technology from our expert team.
            </motion.p>
          </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              
                <BookOpen className="w-4 h-4 text-primary" />
             
              <span className="text-sm font-semibold text-primary">Latest Articles</span>
            </motion.div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
            >
              Discover Our
              <span className="block text-primary">Latest Insights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of articles covering the latest trends, tutorials, and insights in technology.
            </p>
          </motion.div>

           {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-br from-muted/5 via-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          <motion.div
            className=" mx-auto flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <motion.div
              className="w-[50%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="relative mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                
                <div className="relative">
                 
                  <Input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pr-4 py-4 text-lg border-2 border-primary/20 focus:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur-md text-foreground placeholder:text-muted-foreground rounded-sm shadow-lg"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Category Filter Dropdown */}
             <div
               className="flex justify-center w-[20%]"
             >
              
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="flex items-center gap-2 border-2 border-primary/20 focus:border-primary/50 bg-background/50 text-foreground hover:bg-primary/5 transition-all duration-300 backdrop-blur-md w-full"
                    >
                      <motion.div
                        animate={{ rotate: selectedCategory === "All" ? 0 : 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {(() => {
                          const CategoryIcon = categories.find(cat => cat.name === selectedCategory)?.icon || BookOpen;
                          return <CategoryIcon className="h-4 w-4" />;
                        })()}
                      </motion.div>
                      <span className="flex-1 text-left">
                        {selectedCategory}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary text-xs"
                      >
                        {categories.find(cat => cat.name === selectedCategory)?.count || blogPosts.length}
                      </Badge>
                      <motion.div
                        animate={{ rotate: [0, 180, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-[300px] bg-background/95 backdrop-blur-xl border-primary/20 shadow-xl"
                    align="center"
                  >
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <DropdownMenuItem
                          onClick={() => handleCategoryChange(category.name)}
                          className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                            selectedCategory === category.name 
                              ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold" 
                              : "hover:bg-primary/5"
                          }`}
                        >
                          <motion.div
                            animate={{ rotate: selectedCategory === category.name ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <category.icon className="h-4 w-4" />
                          </motion.div>
                          <span className="flex-1">{category.name}</span>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${
                              selectedCategory === category.name 
                                ? "bg-primary/20 text-primary" 
                                : "bg-muted/50 text-muted-foreground"
                            }`}
                          >
                            {category.count}
                          </Badge>
                        </DropdownMenuItem>
                      </motion.div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center w-[20%]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex items-center gap-2 border-2 border-primary/20 focus:border-primary/50 bg-background/50 text-foreground hover:bg-primary/5 transition-all duration-300 backdrop-blur-md w-full"
                  >
                    <motion.div
                      animate={{ rotate: sortBy === "newest" ? 0 : 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {(() => {
                        const SortIcon = sortOptions.find(option => option.value === sortBy)?.icon || Calendar;
                        return <SortIcon className="h-4 w-4" />;
                      })()}
                    </motion.div>
                    <span className="flex-1 text-left">
                      {sortOptions.find(option => option.value === sortBy)?.label || "Newest First"}
                    </span>
                    <motion.div
                      animate={{ rotate: [0, 180, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[300px] bg-background/95 backdrop-blur-xl border-primary/20 shadow-xl"
                  align="center"
                >
                  {sortOptions.map((option, index) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <DropdownMenuItem
                        onClick={() => handleSortChange(option.value)}
                        className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                          sortBy === option.value 
                            ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold" 
                            : "hover:bg-primary/5"
                        }`}
                      >
                        <motion.div
                          animate={{ rotate: sortBy === option.value ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <option.icon className="h-4 w-4" />
                        </motion.div>
                        <span className="flex-1">{option.label}</span>
                      </DropdownMenuItem>
                    </motion.div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Clear All Button */}
            <div className="flex justify-center w-[8%]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  onClick={handleClearAll}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-red-200 hover:border-red-400 bg-gradient-to-r from-red-50/80 to-red-100/80 hover:from-red-100/90 hover:to-red-200/90 text-red-600 hover:text-red-700 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-md w-full group cursor-pointer"
                >
                    <X className="h-4 w-4" />
                  
                  <span className="font-semibold tracking-wide">Clear All</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => {
              const isLiked = likedPosts.includes(post.id);
              const isBookmarked = bookmarkedPosts.includes(post.id);

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-xl cursor-pointer h-full shadow-lg hover:shadow-primary/10">
                    {/* Animated Background Gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(209, 169, 128, 0.05), transparent, rgba(209, 169, 128, 0.05))",
                          "linear-gradient(135deg, rgba(209, 169, 128, 0.1), transparent, rgba(209, 169, 128, 0.1))",
                          "linear-gradient(45deg, rgba(209, 169, 128, 0.05), transparent, rgba(209, 169, 128, 0.05))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Featured Badge */}
                    {post.featured && (
                      <motion.div 
                        className="absolute top-4 left-4 z-20"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <Badge className="bg-gradient-to-r from-primary via-primary to-accent text-white border-0 shadow-lg">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Star className="h-3 w-3 mr-1" />
                          </motion.div>
                          Featured
                        </Badge>
                      </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div 
                      className="absolute top-4 right-4 z-20 flex gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookmark(post.id);
                          }}
                          className={`h-9 w-9 p-0 rounded-full backdrop-blur-md transition-all duration-300 ${
                            isBookmarked 
                              ? 'text-primary bg-primary/10 shadow-lg' 
                              : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                          }`}
                        >
                          <motion.div
                            animate={{ rotate: isBookmarked ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Bookmark className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(post.id);
                          }}
                          className={`h-9 w-9 p-0 rounded-full backdrop-blur-md transition-all duration-300 ${
                            isLiked 
                              ? 'text-red-500 bg-red-500/10 shadow-lg' 
                              : 'text-muted-foreground hover:text-red-500 hover:bg-red-500/5'
                          }`}
                        >
                          <motion.div
                            animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>

                    <CardContent className="p-6 relative z-10 flex flex-col h-full">
                      {/* Post Header */}
                      <div className="space-y-4 flex-1">
                        <motion.div 
                          className="flex items-center gap-4 text-sm text-muted-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        >
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <User className="h-4 w-4" />
                            {post.author}
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </motion.div>
                        </motion.div>

                        {/* Category */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs w-fit bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-colors duration-300"
                          >
                            {post.category}
                          </Badge>
                        </motion.div>

                        {/* Title */}
                        <motion.h3 
                          className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                        >
                          {post.title}
                        </motion.h3>

                        {/* Excerpt */}
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                        >
                          {post.excerpt}
                        </motion.p>

                        {/* Tags */}
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                        >
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.1 + 1 + tagIndex * 0.1 
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3} more
                            </Badge>
                          )}
                        </motion.div>
                      </div>

                      {/* Stats */}
                      <motion.div 
                        className="flex items-center justify-between pt-4 border-t border-muted mt-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 1.1 }}
                      >
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05, color: "#D1A980" }}
                            transition={{ duration: 0.2 }}
                          >
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05, color: "#ef4444" }}
                            transition={{ duration: 0.2 }}
                          >
                            <Heart className="h-4 w-4" />
                            {post.likes + (isLiked ? 1 : 0)}
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05, color: "#3b82f6" }}
                            transition={{ duration: 0.2 }}
                          >
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </motion.div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            Read More
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Compact Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center gap-1 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Previous Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="h-8 w-8 p-0 disabled:opacity-50 disabled:cursor-not-allowed border-primary/20 hover:border-primary/50"
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </Button>
              </motion.div>

              {/* Page Numbers - Smart Display */}
              <div className="flex items-center gap-1">
                {/* First Page */}
                {currentPage > 3 && (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(1)}
                        className="h-8 w-8 p-0 hover:bg-primary/5 border-primary/20 hover:border-primary/50 "
                      >
                        1
                      </Button>
                    </motion.div>
                    {currentPage > 4 && <span className="text-muted-foreground px-1">...</span>}
                  </>
                )}

                {/* Current Page Range */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => {
                    if (totalPages <= 7) return true;
                    return page >= Math.max(1, currentPage - 2) && 
                           page <= Math.min(totalPages, currentPage + 2);
                  })
                  .map((page) => (
                    <motion.div
                      key={page}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={`h-8 w-8 p-0 cursor-pointer ${
                          currentPage === page 
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg" 
                            : "hover:bg-primary/5 border-primary/20 hover:border-primary/50 hover:text-primary"
                        }`}
                      >
                        {page}
                      </Button>
                    </motion.div>
                  ))}

                {/* Last Page */}
                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && <span className="text-muted-foreground px-1">...</span>}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                        className="h-8 w-8 p-0 hover:bg-primary/5 border-primary/20 hover:border-primary/50"
                      >
                        {totalPages}
                      </Button>
                    </motion.div>
                  </>
                )}
              </div>

              {/* Next Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 p-0 disabled:opacity-50 disabled:cursor-not-allowed border-primary/20 hover:border-primary/50"
                >
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* No Results */}
          {currentPosts.length === 0 && filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Gothic" }}>No articles found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setCurrentPage(1);
                }}
                className="hover:scale-105 transition-transform duration-300"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-muted/10 via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated Background Elements */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(209, 169, 128, 0.1), transparent, rgba(209, 169, 128, 0.05))",
                  "linear-gradient(135deg, rgba(209, 169, 128, 0.05), transparent, rgba(209, 169, 128, 0.1))",
                  "linear-gradient(45deg, rgba(209, 169, 128, 0.1), transparent, rgba(209, 169, 128, 0.05))"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated Border Lines */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ 
                backgroundPosition: ["100% 0%", "0% 0%", "100% 0%"],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Floating Elements */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg"
              animate={{ 
                y: [0, -10, 0], 
                x: [0, 5, 0], 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-md"
              animate={{ 
                y: [0, 8, 0], 
                x: [0, -3, 0], 
                scale: [1, 0.9, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-semibold text-primary">Stay Updated</span>
              </motion.div>

              <motion.h4 
                className="text-2xl md:text-3xl font-bold mb-4" 
                style={{ fontFamily: "Gothic" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Never Miss an
                <span className="block text-primary">Article</span>
              </motion.h4>

              <motion.p 
                className="text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Subscribe to our newsletter and get the latest insights, tutorials, and industry updates 
                delivered directly to your inbox.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  className="relative flex-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-sm"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="relative w-full pl-4 pr-4 py-3 border-2 border-primary/20 focus:border-primary/50 transition-all duration-300 bg-white/10 backdrop-blur-md text-foreground placeholder:text-muted-foreground rounded-xl"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Subscribe
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
} 