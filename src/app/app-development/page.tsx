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
import { useState } from "react";
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-8 lg:py-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-sm text-primary font-semibold text-base shadow-md border border-primary/30">
                <Smartphone className="w-5 h-5 text-primary mr-1" />
                App Development
                <span className="flex items-center gap-1 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                  Mobile Solutions <Rocket className="w-4 h-4" />
                </span>
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight"
              style={{ fontFamily: "Gothic" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                App
              </span>
              <span className="block text-primary">Development</span>
            </h1>
            <p className="text-sm sm:text-md md:text-lg text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              We create innovative mobile applications that engage users and drive business growth.
              From native apps to cross-platform solutions, we bring your app ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="text-sm sm:text-md px-6 sm:px-8 py-3 sm:py-4 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  navigate.push("/contact");
                }}
              >
                <Headset className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm sm:text-md px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  navigate.push("/portfolio");
                }}
              >
                <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-6">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Our Services
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              What We Build
            </h2>
            <p className="text-sm sm:text-md md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive mobile app development services tailored to your business
              needs and target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 md:p-8 relative z-10">
                  <div className="space-y-4 md:space-y-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 md:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs sm:text-sm"
                          >
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-8 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 sm:mb-6">
              <Settings className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Technologies
              </span>
            </div>
            <h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Mobile Tech Stack
            </h2>
            <p className="text-sm sm:text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              We leverage cutting-edge mobile technologies and frameworks to build
              fast, scalable, and user-friendly applications. Our carefully curated
              tech stack ensures optimal performance across all devices and platforms.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              From native development to cross-platform solutions, we stay updated
              with the latest industry standards to deliver exceptional mobile
              experiences that drive user engagement.
            </p>
          </div>

          {/* Tech Stack Tabs */}
          <div className="max-w-7xl mx-auto">
          
            <div className="relative mb-8 sm:mb-12 bg-primary/10 rounded-full p-1 sm:p-2">
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
                    <div
                      className="absolute left-0 top-0 h-full transition-all duration-300 ease-in-out z-0"
                      style={{
                        width: `calc(100% / ${tabCount})`,
                        transform: `translateX(${activeIndex * 100}%)`,
                        borderRadius: "9999px",
                        background:
                          "linear-gradient(90deg, var(--tw-gradient-stops))",
                        backgroundColor: "var(--tw-prose-invert) !important",
                        backgroundImage:
                          "linear-gradient(to right, var(--tw-gradient-stops), rgba(80,72,229,0.12), rgba(80,72,229,0.08))",
                        boxShadow:
                          "0 4px 16px 0 rgba(80, 72, 229, 0.10)",
                      }}
                    ></div>
                    {categories.map((category, idx) => {
                      const isActive = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`
                            relative z-10 flex-1 flex items-center justify-center gap-1 sm:gap-2 px-0 py-1 sm:py-2 rounded-full font-semibold transition-all duration-300
                            border border-transparent
                            ${
                              isActive
                                ? "text-primary bg-accent/30"
                                : "text-primary/70 hover:text-primary"
                            }
                            focus:outline-primary focus:ring-2 focus:ring-primary/40
                          `}
                          style={{
                            minWidth: 0,
                            width: "100%",
                            background: "primary",
                          }}
                        >
                          <span
                            className={`text-xs sm:text-sm md:text-base transition-colors duration-300 ${
                              isActive ? "text-primary font-bold" : ""
                            }`}
                          >
                            {category}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                );
              })()}
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {technologies
                .filter(
                  (tech) =>
                    selectedCategory === "All" ||
                    tech.category === selectedCategory
                )
                .map((tech) => (
                  <Card
                    key={tech.name}
                    className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
                            {tech.name}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {tech.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

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
