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
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import ContactSection from "@/components/ContactSection";
import TeamModal from "@/components/TeamModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-primary font-semibold text-base shadow-md border border-primary/30 select-none">
                <MessageCircle className="w-5 h-5 text-primary mr-1" />
                Let's Connect!
                <span className="flex items-center gap-1 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                  We reply fast <Rocket className="w-4 h-4" />
                </span>
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Gothic" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Let's Build
              </span>
              <span className="block text-primary">Something Amazing</span>
            </h1>
            <p className="text-md md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you and
              discuss how we can help
              <span className="text-primary font-semibold">
                {" "}
                bring your ideas to life{" "}
              </span>
              with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-md px-8 py-4 group hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Headset className="h-5 w-5 mr-2" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-md px-8 py-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setIsTeamModalOpen(true)}
              >
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* What We Build Section - Below Contact Form */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Our Expertise
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Gothic" }}
              >
                What We Build
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From web applications to mobile apps, we specialize in creating
                cutting-edge digital solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Web Applications
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Modern, responsive web applications built with the
                        latest technologies and best practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Native and cross-platform mobile applications for iOS
                        and Android platforms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        E-commerce Platforms
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Complete online shopping solutions with payment
                        processing and inventory management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Custom Software
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Tailored software solutions designed to meet your
                        specific business requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        API Development
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Robust APIs and backend services to power your
                        applications and integrations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Cloud Solutions
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Scalable cloud infrastructure and deployment solutions
                        for modern applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
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
                  className="text-4xl md:text-5xl font-bold leading-tight"
                  style={{ fontFamily: "Gothic" }}
                >
                  Tell Us About
                  <span className="block text-primary">Your Project</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you within 24
                  hours. We're excited to learn about your project and explore
                  how we can help you succeed.
                </p>
              </div>

              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8 relative z-10">
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
      <section className="hidden md:block py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Gothic" }}
            >
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the unique advantages that make Vaidikode your ideal
              partner for digital transformation.
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

      {/* Team Modal */}
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />

      <ScrollToTop />
    </>
  );
}
