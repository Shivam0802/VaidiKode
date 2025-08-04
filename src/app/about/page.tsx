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
  Headset,
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Star,
  CheckCircle,
  Lightbulb,
  Rocket,
  Eye,
  Handshake,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import teamImage from "@/assets/images/homeBanner1.webp";
import ScrollToTop from "@/components/ScrollToTop";
import ContactSection from "@/components/ContactSection";
import TeamModal from "@/components/TeamModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AboutPage() {
  const navigate = useRouter();
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-8 lg:py-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">About Vaidikode</span>
            </div>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Gothic" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Building Digital
              </span>
              <span className="block text-primary">Excellence</span>
            </h1>
            <p className="text-md md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              <span className="text-primary font-semibold"> exceptional digital experiences </span>
              that drive business growth and transform ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-md px-8 py-4 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setIsTeamModalOpen(true)}
              >
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-md px-8 py-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Briefcase className="h-5 w-5 mr-2" />
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
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

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
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

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
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

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
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
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                </div>
                <h2 
                  className="text-4xl md:text-5xl font-bold leading-tight"
                  style={{ fontFamily: "Gothic" }}
                >
                  Building Digital Excellence 
                  <span className="block text-primary">Since Day One</span>
                </h2>
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
                  <p>
                    From startups to enterprise-level organizations, we've helped businesses of all sizes achieve their 
                    digital transformation goals. Our commitment to quality, innovation, and client success has made us 
                    a trusted partner in the digital landscape.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-md font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => navigate.push("/contact")}
                >
                  <span className="relative z-10 flex items-center cursor-pointer">
                    <Rocket className="h-5 w-5 mr-2" />
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
                <Button variant="outline" className="px-8 py-4 text-md font-semibold border-2 bg-primary/30 hover:bg-primary/80 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <Briefcase className="h-5 w-5 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src={teamImage}
                  alt="Vaidikode team collaboration"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">What Drives Us</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're driven by a clear purpose and an ambitious vision for the future of digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center">Our Mission</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
                  and create lasting value in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center">Our Vision</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
                  To be the leading force in digital innovation, setting new standards for excellence in web and mobile 
                  development while fostering meaningful partnerships that transform ideas into digital reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">What We Stand For</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, from the smallest detail to the biggest decisions, 
              ensuring we deliver exceptional results every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Innovation</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  We stay ahead of the curve with cutting-edge technologies and creative solutions that push boundaries and create new possibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Collaboration</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  We work closely with our clients to ensure every project exceeds expectations and delivers real value that drives business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Excellence</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  Quality is non-negotiable. We deliver exceptional results on every project, maintaining the highest standards of excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Trust</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  We build lasting relationships based on transparency, reliability, and mutual respect with our clients and partners.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Growth</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  We continuously learn, adapt, and evolve to stay at the forefront of technology and deliver better solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Passion</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed">
                  We're passionate about technology and creating solutions that make a real difference in people's lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the unique advantages that make Vaidikode your ideal partner for digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team of skilled developers specializes in modern technologies and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mobile-First Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We prioritize mobile experiences to ensure your app works perfectly on all devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build applications that grow with your business and handle increasing demands.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide ongoing support and maintenance to keep your applications running smoothly.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rigorous testing ensures your applications are bug-free and perform optimally.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We respect deadlines and deliver projects on time without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven development process ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">1. Discovery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We start by understanding your goals, requirements, and vision for the project.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">2. Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We create detailed plans, wireframes, and technical specifications for your project.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">3. Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expert team builds your application using the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-8 relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">4. Launch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deploy your application and provide ongoing support to ensure its success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="bg-muted/20 py-10">
        <div className="text-center mx-0 lg:mx-32">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 lg:rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3
                className="text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Gothic" }}
              >
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can bring your
                vision to life with our expert development team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-3 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => {
                    navigate.push("/contact");
                  }}
                >
                  <Headset className="h-5 w-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Users className="h-5 w-5 " />
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Team Modal */}
      <TeamModal 
        isOpen={isTeamModalOpen} 
        onClose={() => setIsTeamModalOpen(false)} 
      />
    </>
  );
}
