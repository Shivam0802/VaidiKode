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
import { useRouter } from "next/navigation";
import AboutBanner from "@/assets/images/about.webp";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AboutPage() {
  const navigate = useRouter();
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [activeProcessSlide, setActiveProcessSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const processSliderRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for interactive animations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Spring animations for mouse following
  const mouseX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Transform mouse position to card movement
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);

  useEffect(() => {
    const processSlider = processSliderRef.current;
    if (!processSlider) return;

    const handleProcessScroll = () => {
      const scrollLeft = processSlider.scrollLeft;
      const cardWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      const totalCardWidth = cardWidth + gap;
      const currentSlide = Math.round(scrollLeft / totalCardWidth);
      setActiveProcessSlide(currentSlide);
    };

    processSlider.addEventListener('scroll', handleProcessScroll);
    return () => processSlider.removeEventListener('scroll', handleProcessScroll);
  }, []);
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

      {/* Hero Section (Compact + Background Image + Motion) */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image + Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              `url(${AboutBanner.src})`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-10 left-8 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-12 w-16 h-16 bg-accent/30 rounded-full blur-lg"
          animate={{ y: [0, 15, 0], x: [0, -15, 0], scale: [1, 0.9, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-16 left-1/4 w-12 h-12 bg-secondary/25 rounded-full blur-md"
          animate={{ y: [0, -15, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-xs md:text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4" />
              About Vaidikode
              <span className="ml-2 inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                Building excellence <Rocket className="w-3 h-3" />
              </span>
            </motion.span>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Gothic" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                Building Digital
              </span>
              <span className="block text-[#D1A980]">Excellence</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              <span className="font-semibold">
                {" "}
                exceptional digital experiences{" "}
              </span>{" "}
              that drive business growth and transform ideas into reality.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <Button className="glass-button group relative overflow-hidden bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 text-white px-6 py-3 text-sm font-semibold border border-primary/30 hover:border-primary/50 transition-all duration-300"
                    onClick={() => navigate.push("/team")}
                  >
                    <span className="relative z-10 flex items-center cursor-pointer">
                      <Users className="h-4 w-4 mr-2" />
                      Meet Our Team
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button className="glass-button bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer">
                    <Briefcase className="h-4 w-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-0 relative z-10 mt-16 md:mt-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Liquid Glass Card */}
            <div className="liquid-glass-card">
              <div className="card-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-1 bg-gradient-to-r from-white to-white/50 rounded-full"></div>
                  <span className="text-white font-semibold text-xs uppercase tracking-wider">Our Story</span>
                </div>
                <h2 
                  className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6"
                  style={{ fontFamily: "Gothic" }}
                >
                  Building Digital Excellence 
                  <span className="block text-[#D1A980]">Since Day One</span>
                </h2>
                <div className="space-y-4 text-white/90 leading-relaxed text-sm md:text-base mb-8 text-justify md:text-start">
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
                
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button className="glass-button group relative overflow-hidden bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 text-white px-6 py-3 text-sm font-semibold border border-primary/30 hover:border-primary/50 transition-all duration-300"
                    onClick={() => navigate.push("/contact")}
                  >
                    <span className="relative z-10 flex items-center cursor-pointer">
                      <Rocket className="h-4 w-4 mr-2" />
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button className="glass-button bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer">
                    <Briefcase className="h-4 w-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>


          </div>
        </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Target className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary">What Drives Us</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
            >
              Our Mission & Vision
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're driven by a clear purpose and an ambitious vision for the future of digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Our Mission</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
                  and create lasting value in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">Our Vision</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  To be the leading force in digital innovation, setting new standards for excellence in web and mobile 
                  development while fostering meaningful partnerships that transform ideas into digital reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Star className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary">What We Stand For</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
            >
              Our Core Values
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from the smallest detail to the biggest decisions, 
              ensuring we deliver exceptional results every time.
            </p>
          </div>
          
          {/* Desktop/Laptop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">Innovation</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  We stay ahead of the curve with cutting-edge technologies and creative solutions that push boundaries and create new possibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">Collaboration</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  We work closely with our clients to ensure every project exceeds expectations and delivers real value that drives business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">Excellence</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  Quality is non-negotiable. We deliver exceptional results on every project, maintaining the highest standards of excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">Trust</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  We build lasting relationships based on transparency, reliability, and mutual respect with our clients and partners.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">Growth</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  We continuously learn, adapt, and evolve to stay at the forefront of technology and deliver better solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">Passion</h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  We're passionate about technology and creating solutions that make a real difference in people's lives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center">Innovation</h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      We stay ahead of the curve with cutting-edge technologies and creative solutions that push boundaries and create new possibilities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center">Collaboration</h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      We work closely with our clients to ensure every project exceeds expectations and delivers real value that drives business growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center">Excellence</h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      Quality is non-negotiable. We deliver exceptional results on every project, maintaining the highest standards of excellence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center">Trust</h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      We build lasting relationships based on transparency, reliability, and mutual respect with our clients and partners.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center">Growth</h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      We continuously learn, adapt, and evolve to stay at the forefront of technology and deliver better solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center">Passion</h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      We're passionate about technology and creating solutions that make a real difference in people's lives.
                    </p>
                  </CardContent>
                </Card>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <CheckCircle className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
            >
              What Sets Us Apart
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the unique advantages that make Vaidikode your ideal partner for digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Expert Development</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Our team of skilled developers specializes in modern technologies and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Mobile-First Approach</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We prioritize mobile experiences to ensure your app works perfectly on all devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Scalable Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We build applications that grow with your business and handle increasing demands.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Dedicated Support</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We provide ongoing support and maintenance to keep your applications running smoothly.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Quality Assurance</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Rigorous testing ensures your applications are bug-free and perform optimally.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/20 rounded-md">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Timely Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We respect deadlines and deliver projects on time without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="px-4 py-3 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-xl font-bold text-foreground">0+</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Projects Completed</p>
                </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="px-4 py-3 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-xl font-bold text-foreground">0+</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Happy Clients</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="px-4 py-3 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2">
              
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-xl font-bold text-foreground">0+</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Years Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="px-4 py-3 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-2">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-xl font-bold text-foreground">0%</h4>
                  <p className="text-sm text-muted-foreground text-center font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Rocket className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary">Our Process</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
            >
              How We Work
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our proven development process ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          {/* Desktop/Laptop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardContent className="p-6 relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">1. Discovery</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We start by understanding your goals, requirements, and vision for the project.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardContent className="p-6 relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">2. Planning</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We create detailed plans, wireframes, and technical specifications for your project.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardContent className="p-6 relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">3. Development</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our expert team builds your application using the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardContent className="p-6 relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">4. Launch</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We deploy your application and provide ongoing support to ensure its success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden">
            <div className="relative">
              <div 
                ref={processSliderRef}
                className="flex overflow-x-auto scrollbar-hide gap-6 pb-4" 
                style={{ scrollSnapType: 'x mandatory' }}
              >
                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">1. Discovery</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We start by understanding your goals, requirements, and vision for the project.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">2. Planning</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We create detailed plans, wireframes, and technical specifications for your project.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">3. Development</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Our expert team builds your application using the latest technologies and best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm flex-shrink-0 w-80" style={{ scrollSnapAlign: 'start' }}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">4. Launch</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      We deploy your application and provide ongoing support to ensure its success.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
            
            </div>
          </div>
        </div>
      </section>

      <div className="bg-muted/10 py-8">
        <div className="text-center mx-0 lg:mx-16">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
              <h4 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                Ready to build with Vaidikode?
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">Let’s discuss your goals and the fastest way to reach them.</p>
            </div>
            <div className="flex gap-3">
              <Button className="cursor-pointer px-6 py-3" onClick={() => navigate.push("/contact")}>
                <Sparkles className="h-4 w-4 mr-2" /> Start a Project
              </Button>
              <Button variant="outline" className="cursor-pointer px-6 py-3" onClick={() => navigate.push("/about")}>
                <ArrowRight className="h-4 w-4 mr-2" /> Learn More
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

      
    </>
  );
}
