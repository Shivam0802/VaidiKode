"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Sparkles,
  Rocket,
  Clock,
  Star,
  ArrowRight,
  Eye,
  Zap,
  Palette,
  Smartphone,
  Globe,
  Database,
  Shield,
  TrendingUp,
  Heart,
  Target,
  CheckCircle,
  Lightbulb,
  Users,
  Award,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MessageCircle,
  ShoppingCart
} from "lucide-react";
import { useState, useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Countdown timer (example: 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const portfolioCategories = [
    { name: "Web Applications", icon: Globe, count: 12, color: "from-blue-500 to-cyan-500" },
    { name: "Mobile Apps", icon: Smartphone, count: 8, color: "from-purple-500 to-pink-500" },
    { name: "E-commerce", icon: ShoppingCart, count: 6, color: "from-green-500 to-emerald-500" },
    { name: "Custom Software", icon: Code, count: 15, color: "from-orange-500 to-red-500" },
    { name: "UI/UX Design", icon: Palette, count: 20, color: "from-indigo-500 to-purple-500" },
    { name: "API Development", icon: Database, count: 10, color: "from-teal-500 to-blue-500" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Coming Soon Badge */}
            <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-primary font-semibold text-lg shadow-lg border border-primary/30 select-none animate-pulse">
                <Sparkles className="w-6 h-6 text-primary mr-2 animate-spin" />
                Coming Soon
                <span className="flex items-center gap-1 ml-2 text-sm bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                  <Rocket className="w-4 h-4" />
                  Launching Soon
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 
              className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ fontFamily: "Gothic" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Our
              </span>
              <span className="block text-primary animate-pulse">Portfolio</span>
            </h1>

            {/* Description */}
            <p className={`text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We're crafting something extraordinary. Our portfolio showcases 
              <span className="text-primary font-semibold"> innovative projects </span>
              that push the boundaries of digital excellence.
            </p>

            {/* Countdown Timer */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {Object.entries(countdown).map(([unit, value]) => (
                <Card key={unit} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 relative z-10 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{unit}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button size="lg" className="text-lg px-8 py-4 group hover:scale-105 transition-transform duration-300">
                <MessageCircle className="h-6 w-6 mr-2" />
                Get Notified
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
              >
                <Mail className="h-6 w-6 mr-2" />
                Contact Us
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
