"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone,
  Zap,
  Settings,
  Target,
  Search,
  Palette,
  Rocket,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ShoppingCart,
  CheckCircle,
  Shield,
  Headset,
  Users,
  ArrowUp,
  User,
  Globe,
  Database,
  Server,
  FileCode,
  Layers,
  HardDrive,
  Box,
  Cloud,
  Lightbulb,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Import technology icons
import react from "@/assets/images/icons/react.webp";
import nextjs from "@/assets/images/icons/next.webp";
import android from "@/assets/images/icons/android.webp";
import angular from "@/assets/images/icons/AngularJS.webp";
import aws from "@/assets/images/icons/aws.webp";
import git from "@/assets/images/icons/Git.webp";
import html from "@/assets/images/icons/html.webp";
import css from "@/assets/images/icons/css.webp";
import csharp from "@/assets/images/icons/Csharp.webp";
import github from "@/assets/images/icons/GitHub.webp";
import javascript from "@/assets/images/icons/JavaScript.webp";
import laravel from "@/assets/images/icons/Laravel.webp";
import mongodb from "@/assets/images/icons/MongoDB.webp";
import mssql from "@/assets/images/icons/ms-sql.webp";
import dotnet from "@/assets/images/icons/NET core.webp";
import nodejs from "@/assets/images/icons/Node.js.webp";
import typescript from "@/assets/images/icons/TypeScript.webp";
import vue from "@/assets/images/icons/Vue.js.webp";
import ios from "@/assets/images/icons/ios.webp";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What platforms do you develop apps for?",
    answer:
      "We develop native and cross-platform mobile applications for iOS and Android, as well as progressive web apps (PWAs) that work across all devices. We choose the best approach based on your specific requirements.",
    category: "Platforms",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Development time varies from 6-12 weeks for simple apps to 4-8 months for complex applications. We provide detailed timelines during the planning phase and use agile methodology for efficient delivery.",
    category: "Timeline",
  },
  {
    question: "Do you provide app store submission services?",
    answer:
      "Yes, we handle the complete app store submission process including app store optimization (ASO), metadata preparation, screenshots, and compliance with store guidelines for both iOS App Store and Google Play Store.",
    category: "Deployment",
  },
  {
    question: "Can you integrate with existing backend systems?",
    answer:
      "Absolutely! We can integrate your mobile app with existing APIs, databases, and third-party services. We ensure secure and efficient data synchronization across all platforms.",
    category: "Integration",
  },
  {
    question: "What about app maintenance and updates?",
    answer:
      "We offer comprehensive maintenance packages including bug fixes, feature updates, performance optimization, and compatibility updates for new OS versions and devices.",
    category: "Maintenance",
  },
  {
    question: "Do you provide app analytics and monitoring?",
    answer:
      "Yes, we implement analytics tools to track user behavior, app performance, and business metrics. We provide regular reports and insights to help optimize your app.",
    category: "Analytics",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement multiple security layers including data encryption, secure API communication, biometric authentication, and follow OWASP mobile security guidelines.",
    category: "Security",
  },
  {
    question: "Can you develop apps for wearables and IoT devices?",
    answer:
      "Yes, we have experience developing apps for smartwatches, fitness trackers, and IoT devices. We can create companion apps and integrate with various IoT platforms.",
    category: "IoT",
  },
  {
    question: "What is your app testing process?",
    answer:
      "Our testing includes unit testing, integration testing, UI/UX testing, performance testing, and real device testing across multiple screen sizes and OS versions.",
    category: "Testing",
  },
  {
    question: "Do you provide app marketing support?",
    answer:
      "We offer app store optimization (ASO), marketing strategy consultation, and can help with app launch campaigns to maximize your app's visibility and downloads.",
    category: "Marketing",
  },
];

const technologies = [
  { name: "React Native", icon: react, category: "Cross-Platform" },
  { name: "Flutter", icon: nextjs, category: "Cross-Platform" },
  { name: "iOS Native", icon: ios, category: "Native" },
  { name: "Android Native", icon: android, category: "Native" },
  { name: "Ionic", icon: angular, category: "Hybrid" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "Firebase", icon: aws, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "AWS", icon: aws, category: "Cloud" },
  { name: "Git", icon: git, category: "DevOps" },
  { name: "GitHub", icon: github, category: "DevOps" },
];

const services = [
  {
    title: "Native Mobile Apps",
    description:
      "High-performance native applications built specifically for iOS and Android platforms with platform-specific features and optimizations.",
    icon: Smartphone,
    features: [
      "Platform-Specific UI",
      "Native Performance",
      "Device Features",
      "App Store Ready",
    ],
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Efficient apps that work seamlessly across multiple platforms using React Native, Flutter, or Xamarin frameworks.",
    icon: Globe,
    features: [
      "Single Codebase",
      "Faster Development",
      "Cost Effective",
      "Consistent UI",
    ],
  },
  {
    title: "Progressive Web Apps",
    description:
      "Modern web applications that provide app-like experiences with offline functionality and push notifications.",
    icon: Code,
    features: [
      "Offline Support",
      "Push Notifications",
      "App-like Experience",
      "Easy Updates",
    ],
  },
  {
    title: "App Maintenance",
    description:
      "Comprehensive maintenance services including updates, bug fixes, performance optimization, and feature enhancements.",
    icon: Settings,
    features: [
      "Regular Updates",
      "Bug Fixes",
      "Performance Tuning",
      "Feature Additions",
    ],
  },
];

export default function AppDevelopmentPage() {
  const navigate = useRouter();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const filteredFAQ =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const categories = [
    "All",
    "Platforms",
    "Timeline",
    "Deployment",
    "Integration",
    "Maintenance",
    "Analytics",
    "Security",
    "IoT",
    "Testing",
    "Marketing",
  ];

  return (
    <>
      {/* Compact Hero Section with Background Image */}
      <section className="py-12 relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/85"></div>
        
        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-10 left-8 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-12 w-16 h-16 bg-accent/30 rounded-full blur-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-16 left-1/4 w-12 h-12 bg-secondary/25 rounded-full blur-md"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="liquid-glass-card">
            <div className="relative z-10 flex flex-col items-start justify-center text-center text-white px-4 py-[32px] md:p-[32px]">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Compact Glass Effect Badge */}
                <motion.div 
                  className="w-full md:w-auto inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-[0.7rem] text-white font-semibold text-sm shadow-lg mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className=""
                  >
                    <Smartphone className="w-4 h-4 text-white" />
                  </motion.div>
                App Development
                  <motion.span 
                    className="flex items-center gap-1 ml-2 text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Mobile Solutions 
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Rocket className="w-3 h-3" />
                    </motion.div>
                  </motion.span>
                </motion.div>

                {/* Compact Main Heading */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
              style={{ fontFamily: "Gothic" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    App
                  </motion.span>
                  <motion.span 
                    className="block text-[#D1A980]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ 
                      scale: 1.03,
                      color: "#D1A980",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Development
                  </motion.span>
                </motion.h1>

                {/* Compact Description */}
                <motion.p 
                  className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
              We create innovative mobile applications that engage users and drive business growth.
              From native apps to cross-platform solutions, we bring your app ideas to life.
                </motion.p>

                {/* Compact Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
              <Button
                size="lg"
                      className="text-base px-6 py-3 group backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-300 cursor-pointer"
                      onClick={() => navigate.push("/contact")}
                    >
                      <motion.div
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Headset className="h-5 w-5 mr-2" />
                      </motion.div>
                Start Your Project
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
              </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block"
                  >
              <Button
                variant="outline"
                size="lg"
                      className="text-base px-6 py-3 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white border border-white/30 hover:border-white/50 transition-all duration-300 cursor-pointer"
              >
                      
                        <ExternalLink className="h-5 w-5 mr-2" />
                      
                View Portfolio
              </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Services Section with Glass Effects */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              What We Build
            </motion.h2>
            <motion.p 
              className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Comprehensive mobile app development services tailored to your business needs and goals.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 shadow-lg cursor-pointer h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4
                      className="text-2xl font-bold text-foreground w-[80%]"
                      style={{ fontFamily: "Gothic" }}
                    >
                        {service.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed mt-4">
                        {service.description}
                      </p>
                  <div className="space-y-2 mt-auto">
                        {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-foreground font-medium text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Technologies Section with Glass Effects */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-muted/20 via-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-primary/10 border border-primary/20 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">
                Technologies
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Mobile Tech Stack
            </motion.h2>
            <motion.p 
              className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We leverage cutting-edge mobile technologies and frameworks to build fast, scalable, and user-friendly applications.
            </motion.p>
          </motion.div>

          {/* Responsive Tech Stack Tabs */}
          <div className="max-w-6xl mx-auto">
            {/* Mobile/Tablet: Horizontal Scrollable Tabs */}
            <motion.div 
              className="block lg:hidden mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {["All", "Native", "Cross-Platform", "Backend"].map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      flex-shrink-0 px-4 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap
                      ${selectedCategory === category 
                        ? "bg-primary text-white shadow-lg" 
                        : "bg-white/10 text-muted-foreground hover:bg-white/20 hover:text-primary"
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm">{category}</span>
                  </motion.button>
                ))}
          </div>
            </motion.div>

            {/* Desktop: Full Width Tabs */}
            <motion.div 
              className="hidden lg:block relative mb-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {(() => {
                const categories = [
                  "All",
                  "Native",
                  "Cross-Platform",
                  "Backend",
                ];
                const tabCount = categories.length;
                const activeIndex = categories.findIndex(
                  (cat) => cat === selectedCategory
                );
                return (
                  <div className="flex w-full">
                    {/* Sliding Indicator */}
                    <motion.div
                      className="absolute left-0 top-0 h-full z-0 backdrop-blur-md bg-primary/20 border border-primary/30 rounded-full"
                      style={{
                        width: `calc(100% / ${tabCount})`,
                      }}
                      animate={{
                        x: `${activeIndex * 100}%`,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    {categories.map((category, idx) => {
                      const isActive = selectedCategory === category;
                      return (
                        <motion.button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`
                            relative z-10 flex-1 flex items-center justify-center px-2 py-2 rounded-full font-semibold transition-all duration-300
                            ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}
                          `}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-sm transition-colors duration-300">
                            {category}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                );
              })()}
            </motion.div>

            {/* Mobile/Tablet: Tech Stack Slider */}
            <motion.div 
              className="block lg:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Slider Container */}
                <div className="overflow-x-auto">
                  <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {technologies
                .filter(
                  (tech) =>
                    selectedCategory === "All" ||
                    tech.category === selectedCategory
                )
                      .map((tech, index) => (
                        <motion.div
                    key={tech.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="flex-shrink-0 w-32"
                        >
                          <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 backdrop-blur-md bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-center h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardContent className="p-4 relative z-10 h-full flex flex-col justify-center">
                              <div className="space-y-3">
                                <motion.div 
                                  className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                  whileHover={{ rotate: 5 }}
                                >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                  />
                                </motion.div>
                        <div>
                                  <h4 className="font-bold text-sm mb-2">
                            {tech.name}
                          </h4>
                                  <Badge variant="outline" className="text-xs px-2 py-1">
                            {tech.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                        </motion.div>
                ))}
            </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop: Tech Stack Grid */}
            <motion.div 
              className="hidden lg:grid grid-cols-5 xl:grid-cols-6 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {technologies
                .filter(
                  (tech) =>
                    selectedCategory === "All" ||
                    tech.category === selectedCategory
                )
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 backdrop-blur-md bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-4 relative z-10">
                        <div className="space-y-3">
                          <motion.div 
                            className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 5 }}
                          >
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={32}
                              height={32}
                              className="w-8 h-8"
                            />
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-sm mb-1">
                              {tech.name}
                            </h4>
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              {tech.category}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>

            {/* Technology Description */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ fontFamily: "Gothic" }}
                >
                  Why This Mobile Tech Stack?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 sm:mb-2 text-sm">
                          Performance Optimized
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Our mobile tech stack is optimized for speed and efficiency,
                          ensuring fast loading times and smooth user experiences
                          across all devices and platforms.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 sm:mb-2 text-sm">Security First</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Built-in security features and best practices protect
                          your app data and users from vulnerabilities and threats.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <ArrowUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 sm:mb-2 text-sm">
                          Scalable Architecture
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Designed to grow with your business, our mobile solutions
                          can handle increasing users and data without performance
                          degradation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 sm:mb-2 text-sm">
                          Developer Friendly
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Extensive documentation, large communities, and proven
                          reliability make maintenance and updates straightforward.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-6">
              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Our Process
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              How We Work
            </h2>
            <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              A proven mobile app development process that ensures quality,
              transparency, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We analyze your requirements, define app features, and create a detailed development roadmap.",
                icon: Search,
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Our designers create wireframes and interactive prototypes to visualize the user experience.",
                icon: Palette,
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your app using agile methodology with regular testing and user feedback.",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment & Launch",
                description:
                  "We deploy your app to app stores and provide ongoing maintenance and support services.",
                icon: Rocket,
              },
            ].map((phase, index) => (
              <Card
                key={phase.step}
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <phase.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary" style={{ fontFamily: "MonooLogoRegular" }}>
                        {phase.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-6">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Get answers to common questions about our mobile app development
              services.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 sm:mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-6xl mx-auto space-y-4">
            {filteredFAQ.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border border-primary/10 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm"
                  onMouseEnter={() => setOpenFAQ(index)}
                  onMouseLeave={() => setOpenFAQ(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-4 relative z-10">
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                      className="w-full text-left flex items-center justify-between group"
                      tabIndex={0}
                      type="button"
                    >
                      <h3 className="text-md font-semibold pr-4">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-muted">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Build Your App?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your app idea and explore how we can bring your
                vision to life with our expert mobile development team.
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
                  onClick={() => {
                    navigate.push("/about");
                  }}
                >
                  <Users className="h-5 w-5 " />
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
