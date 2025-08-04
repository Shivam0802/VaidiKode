"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Globe,
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
} from "lucide-react";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
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
import { useRouter } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, Python, and various databases like PostgreSQL and MongoDB. Our tech stack is chosen based on project requirements and scalability needs.",
    category: "Technology",
  },
  {
    question: "How long does it take to develop a custom website?",
    answer:
      "Development time varies based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the planning phase.",
    category: "Timeline",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer comprehensive maintenance packages including updates, security patches, performance monitoring, and 24/7 support. We ensure your website stays secure and performs optimally.",
    category: "Support",
  },
  {
    question: "Can you help with SEO optimization?",
    answer:
      "Absolutely! We implement SEO best practices during development and provide ongoing optimization services. This includes technical SEO, content optimization, and performance improvements.",
    category: "SEO",
  },
  {
    question: "What about mobile responsiveness?",
    answer:
      "All our websites are built with mobile-first design principles. We ensure perfect functionality across all devices and screen sizes, providing an optimal user experience everywhere.",
    category: "Mobile",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, we offer complete hosting solutions with reliable cloud infrastructure, SSL certificates, CDN integration, and domain management. We handle all technical aspects for you.",
    category: "Hosting",
  },
  {
    question: "How do you ensure website security?",
    answer:
      "We implement multiple security layers including HTTPS, input validation, SQL injection prevention, XSS protection, and regular security audits. We follow OWASP guidelines for web security.",
    category: "Security",
  },
  {
    question: "Can you integrate third-party services and APIs?",
    answer:
      "Yes, we have extensive experience integrating payment gateways, CRM systems, email services, analytics tools, and custom APIs. We ensure seamless integration with your existing systems.",
    category: "Integration",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process includes discovery, planning, design, development, testing, deployment, and maintenance. We use agile methodology with regular client communication and iterative development.",
    category: "Process",
  },
  {
    question: "Do you provide training for content management?",
    answer:
      "Yes, we provide comprehensive training for your team on how to manage and update website content. We also create detailed documentation and video tutorials for easy reference.",
    category: "Training",
  },
];

const technologies = [
  { name: "React", icon: react, category: "Frontend" },
  { name: "Next.js", icon: nextjs, category: "Frontend" },
  { name: "Vue.js", icon: vue, category: "Frontend" },
  { name: "Angular", icon: angular, category: "Frontend" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "TypeScript", icon: typescript, category: "Language" },
  { name: "JavaScript", icon: javascript, category: "Language" },
  { name: "HTML", icon: html, category: "Frontend" },
  { name: "CSS", icon: css, category: "Frontend" },
  { name: "Laravel", icon: laravel, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "MS SQL", icon: mssql, category: "Database" },
];

const services = [
  {
    title: "Custom Website Development",
    description:
      "Tailored websites built from scratch to meet your specific business needs and brand identity.",
    icon: Globe,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Custom Functionality",
    ],
  },
  {
    title: "Web Application Development",
    description:
      "Complex web applications with advanced features, user management, and business logic.",
    icon: Code,
    features: [
      "User Authentication",
      "Database Integration",
      "API Development",
      "Real-time Features",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online stores with payment processing, inventory management, and order tracking.",
    icon: ShoppingCart,
    features: [
      "Payment Gateways",
      "Inventory Management",
      "Order Processing",
      "Analytics",
    ],
  }
];

export default function WebDevelopmentPage() {
  const navigate = useRouter();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQ =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const categories = [
    "All",
    "Technology",
    "Timeline",
    "Support",
    "SEO",
    "Mobile",
    "Hosting",
    "Security",
    "Integration",
    "Process",
    "Training",
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
                <Code className="w-5 h-5 text-primary mr-1" />
                Web Development
                <span className="flex items-center gap-1 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                  Custom Solutions <Rocket className="w-4 h-4" />
                </span>
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Gothic" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Web
              </span>
              <span className="block text-primary">Development</span>
            </h1>
            <p className="text-md md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              We create cutting-edge web solutions that drive business growth.
              From simple websites to complex web applications, we bring your
              digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-md px-8 py-4 group hover:scale-105 transition-transform duration-300"
                onClick={() => {
                    navigate.push("/contact");
                }}
              >
                <Headset className="h-6 w-6 mr-2" />
                Start Your Project
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-md px-8 py-4 hover:scale-105 transition-transform duration-300"
              >
                <ExternalLink className="h-6 w-6 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Services
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development services tailored to your business
              needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Settings className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Technologies
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Modern Tech Stack
            </h2>
            <p className="text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We leverage cutting-edge technologies and frameworks to build
              fast, scalable, and maintainable web applications. Our carefully
              curated tech stack ensures optimal performance, security, and user
              experience across all platforms.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From frontend frameworks to backend services, we stay updated with
              the latest industry standards to deliver exceptional digital
              solutions that drive business growth.
            </p>
          </div>

          {/* Tech Stack Tabs */}
          <div className="max-w-7xl mx-auto">
          
            <div className="relative mb-8 sm:mb-12 bg-primary/10 rounded-full p-1 sm:p-2">
              {(() => {
                const categories = [
                  "All",
                  "Frontend",
                  "Backend",
                  "Language",
                  "Database",
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
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
            <div className="mt-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h3
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Gothic" }}
                >
                  Why This Tech Stack?
                </h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          Performance Optimized
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Our tech stack is optimized for speed and efficiency,
                          ensuring fast loading times and smooth user
                          experiences across all devices.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Security First</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Built-in security features and best practices protect
                          your data and users from vulnerabilities and threats.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <ArrowUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          Scalable Architecture
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Designed to grow with your business, our solutions can
                          handle increasing traffic and data without performance
                          degradation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          Developer Friendly
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Extensive documentation, large communities, and proven
                          reliability make maintenance and updates
                          straightforward.
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Process
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven development process that ensures quality, transparency,
              and successful project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We analyze your requirements, define project scope, and create a detailed development plan.",
                icon: Search,
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Our designers create wireframes and prototypes to visualize the user experience.",
                icon: Palette,
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "We build your application using agile methodology with regular testing and feedback.",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We deploy your application and provide ongoing maintenance and support services.",
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our web development
              services.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-transform duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-6xl mx-auto space-y-4">
            {filteredFAQ.map((faq, index) => {
              // Determine if this FAQ should be open (clicked or hovered)
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
                        <p className="text-muted-foreground leading-relaxed">
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
