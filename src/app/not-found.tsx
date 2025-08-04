"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Headset,
  Users,
  ExternalLink,
  ArrowRight,
  Globe,
  Smartphone,
  Code,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NotFound() {
  const navigate = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const popularPages = [
    { name: "Home", path: "/", icon: Home, description: "Back to homepage" },
    { name: "Web Development", path: "/web-development", icon: Globe, description: "Custom web solutions" },
    { name: "App Development", path: "/app-development", icon: Smartphone, description: "Mobile app development" },
    { name: "Portfolio", path: "/portfolio", icon: Code, description: "View our work" },
    { name: "About Us", path: "/about", icon: Users, description: "Learn about our team" },
    { name: "Contact", path: "/contact", icon: Headset, description: "Get in touch" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* 404 Number */}
          <div className="mb-8">
            <h1 
              className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-primary/20 select-none"
              style={{ fontFamily: "Gothic" }}
            >
              404
            </h1>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-4 group hover:scale-105 transition-transform duration-300"
              onClick={() => navigate.push("/")}
            >
              <Home className="h-6 w-6 mr-2" />
              Go Home
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
              onClick={() => navigate.back()}
            >
              <ArrowLeft className="h-6 w-6 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "Gothic" }}>
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page, index) => (
                <Card
                  key={page.name}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm cursor-pointer"
                  onClick={() => navigate.push(page.path)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <page.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg mb-1">{page.name}</h4>
                        <p className="text-sm text-muted-foreground">{page.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Can't find what you're looking for?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Try searching for specific services or contact us directly for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3 group hover:scale-105 transition-transform duration-300"
                onClick={() => navigate.push("/contact")}
              >
                <Headset className="h-5 w-5 mr-2" />
                Contact Support
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-300"
                onClick={() => navigate.push("/portfolio")}
              >
                <Users className="h-5 w-5 mr-2" />
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 