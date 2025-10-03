"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ArrowLeft,
  Home,
  Scale,
  Gavel,
  Lock,
  X,
  Ban,
  DollarSign,
  Handshake,
  BookOpen,
  Scroll,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function TermsAndConditionsPage() {
  const navigate = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image + Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
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
              <Scale className="w-4 h-4" />
              Terms & Conditions
              <span className="ml-2 inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                Legal agreement <Gavel className="w-3 h-3" />
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
                Terms & Conditions
              </span>
              <span className="block text-[#D1A980]">Our Legal Agreement</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              These terms and conditions govern your use of our website and services. 
              Please read them carefully before using our platform.
            </motion.p>

            {/* Last Updated */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Last Updated: December 2024</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Effective Date: December 1, 2024</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="py-4 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate.push("/")}
              className="p-0 h-auto hover:text-primary"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Button>
            <ArrowRight className="w-3 h-3" />
            <span className="text-primary font-medium">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Introduction
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to Vaidikode. These Terms and Conditions ("Terms") govern your use of our website, 
                  services, and any related applications (collectively, the "Service") operated by Vaidikode 
                  ("us", "we", or "our").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                  with any part of these terms, then you may not access the Service.
                </p>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Acceptance of Terms
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Agreement to Terms</h4>
                      <p className="text-sm text-muted-foreground">
                        Your use of our Service constitutes acceptance of these Terms and our Privacy Policy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Age Requirements</h4>
                      <p className="text-sm text-muted-foreground">
                        You must be at least 18 years old to use our services or have parental consent.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Legal Capacity</h4>
                      <p className="text-sm text-muted-foreground">
                        You represent that you have the legal capacity to enter into this agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description of Services */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Description of Services
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vaidikode provides web development, mobile app development, and related digital services. Our services include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Web Development</h4>
                        <p className="text-sm text-muted-foreground">Custom websites and web applications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Mobile App Development</h4>
                        <p className="text-sm text-muted-foreground">iOS and Android applications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Consulting Services</h4>
                        <p className="text-sm text-muted-foreground">Technical consulting and strategy</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Lock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Maintenance & Support</h4>
                        <p className="text-sm text-muted-foreground">Ongoing technical support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Third-Party Integrations</h4>
                        <p className="text-sm text-muted-foreground">API development and integrations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Scale className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Project Management</h4>
                        <p className="text-sm text-muted-foreground">End-to-end project coordination</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Obligations */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    User Obligations
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a user of our services, you agree to the following obligations:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Permitted Uses
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Use our services for lawful purposes only</li>
                      <li>Provide accurate and complete information</li>
                      <li>Respect intellectual property rights</li>
                      <li>Maintain the confidentiality of any login credentials</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-primary" />
                      Prohibited Activities
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Use our services for any illegal or unauthorized purpose</li>
                      <li>Transmit viruses, malware, or other harmful code</li>
                      <li>Interfere with or disrupt our services</li>
                      <li>Reverse engineer or attempt to extract source code</li>
                      <li>Use automated systems to access our services without permission</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Payment Terms
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Payment Schedule</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Payment terms will be specified in individual project agreements. Generally:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Initial deposit required before project commencement</li>
                      <li>Milestone-based payments for larger projects</li>
                      <li>Final payment upon project completion and delivery</li>
                      <li>Payment due within 30 days of invoice date</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Late Payment</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Late payments may incur additional fees as specified in the project agreement. 
                      We reserve the right to suspend services for overdue accounts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Refunds</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Refund policies will be outlined in individual project agreements. 
                      Generally, refunds are not provided for completed work or services rendered.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Intellectual Property Rights
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Our Rights</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Vaidikode retains ownership of:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Our proprietary methodologies and processes</li>
                      <li>Pre-existing intellectual property and tools</li>
                      <li>General knowledge and expertise</li>
                      <li>Our website content and branding</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Client Rights</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Upon full payment, clients receive:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Full ownership of custom-developed deliverables</li>
                      <li>Source code for custom applications</li>
                      <li>Documentation and user manuals</li>
                      <li>Rights to modify and distribute the work</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Third-Party Components</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Projects may include third-party libraries, frameworks, or components. 
                      These remain subject to their respective licenses and terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Limitation of Liability
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Service Availability</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      While we strive to provide reliable services, we cannot guarantee uninterrupted access. 
                      We are not liable for temporary service disruptions or technical issues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Damages Limitation</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, our liability is limited to the amount paid 
                      for the specific service that gave rise to the claim. We are not liable for 
                      indirect, incidental, or consequential damages.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Force Majeure</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We are not liable for delays or failures due to circumstances beyond our reasonable 
                      control, including natural disasters, government actions, or internet outages.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <X className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Termination
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Termination by Either Party</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Either party may terminate services with written notice. Termination does not affect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Obligations that have already been incurred</li>
                      <li>Payment for work completed</li>
                      <li>Confidentiality obligations</li>
                      <li>Intellectual property rights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Immediate Termination</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We may terminate services immediately if you breach these terms, fail to pay 
                      invoices, or engage in prohibited activities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Post-Termination</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Upon termination, you must cease using our services and return any confidential 
                      information. We will provide deliverables for which payment has been received.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Gavel className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Governing Law and Disputes
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Governing Law</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms are governed by the laws of [Your Jurisdiction] without regard to 
                      conflict of law principles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dispute Resolution</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Any disputes arising from these Terms or our services will be resolved through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Good faith negotiations between the parties</li>
                      <li>Mediation if negotiations fail</li>
                      <li>Binding arbitration as a last resort</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Jurisdiction</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Any legal proceedings must be brought in the courts of [Your Jurisdiction]. 
                      You consent to the jurisdiction of such courts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Contact Information
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">legal@vaidikode.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-muted-foreground">
                          123 Tech Street<br />
                          Digital City, DC 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Business Hours</h4>
                        <p className="text-muted-foreground">Mon-Fri: 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Scroll className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Changes to Terms
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to modify these Terms and Conditions at any time. We will notify users of any material changes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Notification of Changes</h4>
                      <p className="text-sm text-muted-foreground">
                        We will post updated Terms on our website and update the "Last Updated" date.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Continued Use</h4>
                      <p className="text-sm text-muted-foreground">
                        Your continued use of our services after changes constitutes acceptance of the updated Terms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Material Changes</h4>
                      <p className="text-sm text-muted-foreground">
                        For material changes, we may provide additional notice via email or other communication methods.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center py-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                  Questions About Our Terms?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're here to help clarify any questions you may have about our Terms and Conditions. 
                  Contact us for more information.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={() => navigate.push("/contact")}
                    className="group"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate.push("/")}
                    className="group"
                  >
                    <Home className="h-4 w-4 mr-2" />
                    Back to Home
                    <ArrowLeft className="ml-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
