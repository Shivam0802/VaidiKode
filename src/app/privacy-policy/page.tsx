"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  ExternalLink,
  ArrowLeft,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function PrivacyPolicyPage() {
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
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop')",
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
              <Shield className="w-4 h-4" />
              Privacy Policy
              <span className="ml-2 inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                Your privacy matters <Lock className="w-3 h-3" />
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
                Privacy Policy
              </span>
              <span className="block text-[#D1A980]">Your Data, Your Rights</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
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
            <span className="text-primary font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Introduction
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Vaidikode, we respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website or use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website and services, you consent to the data practices described in this policy. 
                  If you do not agree with the terms of this Privacy Policy, please do not access the site.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Information We Collect
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Personal Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Register for an account or use our services</li>
                      <li>Fill out contact forms or request information</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Participate in surveys or feedback forms</li>
                      <li>Communicate with us via email, phone, or other channels</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-primary" />
                      Automatically Collected Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We may automatically collect certain information about your device and usage patterns:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website information</li>
                      <li>Device identifiers and characteristics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    How We Use Your Information
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Service Delivery</h4>
                        <p className="text-sm text-muted-foreground">Provide and maintain our services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Communication</h4>
                        <p className="text-sm text-muted-foreground">Respond to inquiries and provide support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Security</h4>
                        <p className="text-sm text-muted-foreground">Protect against fraud and security threats</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Improvement</h4>
                        <p className="text-sm text-muted-foreground">Enhance user experience and services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Legal Compliance</h4>
                        <p className="text-sm text-muted-foreground">Meet legal and regulatory requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Marketing</h4>
                        <p className="text-sm text-muted-foreground">Send relevant updates and offers (with consent)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Information Sharing and Disclosure
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Service Providers</h4>
                      <p className="text-sm text-muted-foreground">Trusted third-party service providers who assist us in operating our website and conducting our business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Legal Requirements</h4>
                      <p className="text-sm text-muted-foreground">When required by law or to protect our rights, property, or safety</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Transfers</h4>
                      <p className="text-sm text-muted-foreground">In connection with a merger, acquisition, or sale of assets</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Data Security
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Security Measures
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure data storage and backup systems</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and authentication</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-primary" />
                      Important Note
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Your Rights and Choices
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Eye className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Access</h4>
                        <p className="text-sm text-muted-foreground">Request access to your personal information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Correction</h4>
                        <p className="text-sm text-muted-foreground">Request correction of inaccurate information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Lock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Deletion</h4>
                        <p className="text-sm text-muted-foreground">Request deletion of your personal information</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Portability</h4>
                        <p className="text-sm text-muted-foreground">Request transfer of your data to another service</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Restriction</h4>
                        <p className="text-sm text-muted-foreground">Request restriction of processing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Objection</h4>
                        <p className="text-sm text-muted-foreground">Object to processing of your information</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Cookies and Tracking Technologies
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Types of Cookies We Use:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Managing Cookies:</h4>
                    <p className="text-sm text-muted-foreground">
                      You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Third-Party Services
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Important Notice</h4>
                      <p className="text-sm text-muted-foreground">
                        We encourage you to review the privacy policies of any third-party websites you visit through our links.
                      </p>
                    </div>
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
                    Contact Us
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">privacy@vaidikode.com</p>
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
                        <h4 className="font-semibold">Response Time</h4>
                        <p className="text-muted-foreground">We respond within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Policy Updates
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Notification of Changes</h4>
                      <p className="text-sm text-muted-foreground">
                        We will notify you of any material changes to this Privacy Policy by posting the updated policy on our website and updating the "Last Updated" date.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Your Continued Use</h4>
                      <p className="text-sm text-muted-foreground">
                        Your continued use of our website and services after any changes to this Privacy Policy constitutes acceptance of the updated policy.
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
                  Questions About Your Privacy?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're here to help. Contact us if you have any questions about this Privacy Policy or how we handle your personal information.
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
