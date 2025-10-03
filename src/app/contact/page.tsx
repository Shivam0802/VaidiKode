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
  TrendingUp,
  Star,
  CheckCircle,
  Lightbulb,
  Rocket,
  Eye,
  Handshake,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
  Headset,
  MessageCircle,
  Calendar,
  Clock as ClockIcon,
  ShoppingCart,
  Settings,
  Database,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  return (
    <>
      {/* Hero Section (Compact + Background Image + Motion) */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image + Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')",
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
              <MessageCircle className="w-4 h-4" />
              Let's Connect!
              <span className="ml-2 inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                We reply fast <Rocket className="w-3 h-3" />
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
                Let's Build
              </span>
              <span className="block text-[#D1A980]">Something Amazing</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Ready to start your next project? We'd love to hear from you and
              discuss how we can
              <span className="font-semibold">
                {" "}
                bring your ideas to life
              </span>{" "}
              with our expert team.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="text-base px-6 py-3 group backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50"
              >
                <Headset className="h-5 w-5 mr-2" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-6 py-3 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/30 hover:border-white/50"
                onClick={() => setIsTeamModalOpen(true)}
              >
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
              </Button>
            </motion.div>
          </motion.div>

          {/* What We Build Section - Below Contact Form */}
          <div className="container mx-auto px-4 md:px-0 relative z-10 mt-16 md:mt-20">
            <div className="liquid-glass-card">
              <div className="card-content">
                <div className="">
                  <div className="text-center mb-12">
                    <div className=" inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-[0.7rem] text-white font-semibold text-sm shadow-lg mb-6">
                      <Code className="w-4 h-4 text-white" />
                      Our Expertise
                    </div>

                    <h2
                      className="text-3xl md:text-5xl font-bold mb-4 text-[#D1A980]"
                      style={{ fontFamily: "Gothic" }}
                    >
                      What We Build
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                      From web applications to mobile apps, we specialize in
                      creating cutting-edge digital solutions.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-[#334443]/5 to-[#334443]/5 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="px-4 py-3 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#D1A980]/5 to-[#D1A980]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Globe className="h-5 w-5 text-[#D1A980]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold  text-[#D1A980] font-Gothic">
                              Web Applications
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                              Modern, responsive web applications built with the
                              latest technologies and best practices.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-[#334443]/5 to-[#334443]/5 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#D1A980]/5 to-[#D1A980]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Smartphone className="h-5 w-5 text-[#D1A980]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#D1A980] font-Gothic">
                              Mobile Apps
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                              Native and cross-platform mobile applications for
                              iOS and Android platforms.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-[#334443]/5 to-[#334443]/5 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#D1A980]/5 to-[#D1A980]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <ShoppingCart className="h-5 w-5 text-[#D1A980]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#D1A980] font-Gothic">
                              E-commerce Platforms
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                              Complete online shopping solutions with payment
                              processing and inventory management.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-[#334443]/5 to-[#334443]/5 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#D1A980]/5 to-[#D1A980]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Settings className="h-5 w-5 text-[#D1A980]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#D1A980] font-Gothic">
                              Custom Software
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                              Tailored software solutions designed to meet your
                              specific business requirements.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-[#334443]/5 to-[#334443]/5 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#D1A980]/5 to-[#D1A980]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Database className="h-5 w-5 text-[#D1A980]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#D1A980] font-Gothic">
                              API Development
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                              Robust APIs and backend services to power your
                              applications and integrations.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-[#334443]/5 to-[#334443]/5 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#D1A980]/5 to-[#D1A980]/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Shield className="h-5 w-5 text-[#D1A980]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#D1A980] font-Gothic  ">
                              Cloud Solutions
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-sm">
                              Scalable cloud infrastructure and deployment
                              solutions for modern applications.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Send Message
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight"
                  style={{ fontFamily: "Gothic" }}
                >
                  Tell Us About
                  <span className="block text-primary">Your Project</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you within 24
                  hours. We're excited to learn about your project and explore
                  how we can help you succeed.
                </p>
              </div>

              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Left Sidebar - Quick Start Guide */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Quick Start
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "Gothic" }}
                >
                  Ready to Start?
                  <span className="block text-primary">Here's How</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Follow these simple steps to get your project started with our
                  expert team.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-primary font-bold text-lg">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Send Message</h4>
                        <p className="text-sm text-muted-foreground">
                          Fill out the contact form with your project details
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-primary font-bold text-lg">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Free Consultation</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll schedule a call to discuss your requirements
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-primary font-bold text-lg">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Get Proposal</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive a detailed project proposal and timeline
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-primary font-bold text-lg">
                          4
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Start Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Begin building your project with our expert team
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Card */}
              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10 text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Ready to Launch?
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Let's discuss your project and get started today!
                      </p>
                      {/* <Button
                        size="sm"
                        className="w-full group-hover:scale-105 transition-transform duration-300"
                        onClick={() =>
                          document
                            .getElementById("contact-form")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Contact Info
                </span>
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "Gothic" }}
              >
                Get In Touch
                <span className="block text-primary">With Us</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Contact Cards */}
              <div className="space-y-6 w-full md:w-[30%]">
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm rounded-lg relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">Email Us</h4>
                        <p className="text-muted-foreground">
                          info@vaidikode.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm rounded-lg relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">Call Us</h4>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Mon-Fri 9AM-6PM EST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm rounded-lg relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                        <p className="text-muted-foreground">
                          123 Tech Street, Digital City
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Available for meetings
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-3 hover:scale-105 transition-transform duration-300 cursor-pointer bg-primary/5 border-primary/10 hover:bg-primary/30 hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-3 hover:scale-105 transition-transform duration-300 cursor-pointer bg-primary/5 border-primary/10 hover:bg-primary/30 hover:text-primary"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-3 hover:scale-105 transition-transform duration-300 cursor-pointer bg-primary/5 border-primary/10 hover:bg-primary/30 hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Office Location Map */}
              <div className="space-y-6 w-full md:w-[70%]">
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm rounded-lg relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold">Office Location</h4>
                    </div>

                    {/* Map Container */}
                    <div className="relative w-full flex-1 rounded-lg overflow-hidden border border-primary/20 min-h-[150px] md:min-h-[300px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986532929688!3d40.69714941978941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title="Vaidikode Office Location"
                      ></iframe>

                      {/* Map Overlay with Office Info */}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <div className="text-xs">
                            <p className="font-semibold text-primary">
                              Vaidikode Office
                            </p>
                            <p className="text-muted-foreground">
                              123 Tech Street, Digital City
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                      <div className="space-y-1">
                        <p className="font-semibold text-primary">Address</p>
                        <p className="text-muted-foreground">
                          123 Tech Street
                          <br />
                          Digital City, DC 12345
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-primary">Hours</p>
                        <p className="text-muted-foreground">
                          Mon-Fri: 9AM-6PM
                          <br />
                          Sat: 10AM-4PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="hidden md:block py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Gothic" }}
            >
              What Makes Us Different
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the unique advantages that make Vaidikode your ideal
              partner for digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team of skilled developers specializes in modern
                    technologies and best practices.
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
                  <h3 className="text-xl font-bold mb-2">
                    Mobile-First Approach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We prioritize mobile experiences to ensure your app works
                    perfectly on all devices.
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
                    We build applications that grow with your business and
                    handle increasing demands.
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
                    We provide ongoing support and maintenance to keep your
                    applications running smoothly.
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
                    Rigorous testing ensures your applications are bug-free and
                    perform optimally.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We respect deadlines and deliver projects on time without
                    compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />

     
      <ScrollToTop />
    </>
  );
}
