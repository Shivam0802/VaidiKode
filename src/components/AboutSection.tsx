"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Users, 
  Award, 
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">About Our Company</span>
          </div>
          <h2 
            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "Gothic" }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              About Vaidikode
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and innovators dedicated to creating 
            <span className="text-primary font-semibold"> exceptional digital experiences </span>
            that drive business growth and transform ideas into reality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Company Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h3 
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Gothic" }}
              >
                Building Digital Excellence 
                <span className="block text-primary">Since Day One</span>
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At Vaidikode, we believe in the power of technology to transform businesses and enhance human experiences. 
                  Our journey began with a simple mission: to create digital solutions that not only meet today's needs 
                  but anticipate tomorrow's challenges.
                </p>
                <p>
                  We specialize in modern web and mobile app development, bringing together cutting-edge technologies 
                  with user-centered design principles. Every project we undertake is an opportunity to innovate, 
                  collaborate, and deliver excellence.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-md font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center cursor-pointer">
                  <Users className="h-5 w-5 mr-2" />
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              <Button variant="outline" className="px-8 py-4 text-md font-semibold border-2 bg-primary/30 hover:bg-primary/80 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-3xl font-bold text-foreground">0+</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Projects Completed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-3xl font-bold text-foreground">0+</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Happy Clients</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-3xl font-bold text-foreground">0+</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Years Experience</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-3xl font-bold text-foreground">0%</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Client Satisfaction</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">What Drives Us</span>
            </div>
            <h3 
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, from the smallest detail to the biggest decisions, 
              ensuring we deliver exceptional results every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-[1.5rem] font-bold text-center">Innovation</h4>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-md">
                  We stay ahead of the curve with cutting-edge technologies and creative solutions that push boundaries and create new possibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-[1.5rem] font-bold text-center">Collaboration</h4>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-md">
                  We work closely with our clients to ensure every project exceeds expectations and delivers real value that drives business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-[1.5rem] font-bold text-center">Excellence</h4>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-md">
                  Quality is non-negotiable. We deliver exceptional results on every project, maintaining the highest standards of excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 