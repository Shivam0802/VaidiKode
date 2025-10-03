"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye, 
  Database, 
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
  Lock,
  CheckCircle,
  AlertTriangle,
  X,
  Info,
  BarChart3,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  Heart,
  Star,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function CookiePolicyPage() {
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
              "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')",
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
              <Cookie className="w-4 h-4" />
              Cookie Policy
              <span className="ml-2 inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                Your preferences <Settings className="w-3 h-3" />
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
                Cookie Policy
              </span>
              <span className="block text-[#D1A980]">Your Digital Preferences</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              This Cookie Policy explains how we use cookies and similar technologies on our website 
              to enhance your browsing experience and provide personalized content.
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
            <span className="text-primary font-medium">Cookie Policy</span>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    What Are Cookies?
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and enabling various website functions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies can be "session" cookies (temporary and deleted when you close your browser) 
                  or "persistent" cookies (stored on your device for a set period of time).
                </p>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Types of Cookies We Use
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Essential Cookies
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Authentication and login status</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance</li>
                      <li>Basic website functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      Analytics Cookies
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies help us understand how visitors use our website to improve performance.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Page views and user interactions</li>
                      <li>Traffic sources and referral data</li>
                      <li>User behavior and preferences</li>
                      <li>Website performance metrics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Marketing Cookies
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies are used to deliver relevant advertisements and track marketing campaigns.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Ad targeting and personalization</li>
                      <li>Campaign performance tracking</li>
                      <li>Social media integration</li>
                      <li>Retargeting and remarketing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Preference Cookies
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies remember your choices and preferences to personalize your experience.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Language and region settings</li>
                      <li>Theme and display preferences</li>
                      <li>Accessibility options</li>
                      <li>Customized content delivery</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Purposes */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    How We Use Cookies
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies for various purposes to enhance your experience on our website:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">User Experience</h4>
                        <p className="text-sm text-muted-foreground">Remember your preferences and settings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Analytics</h4>
                        <p className="text-sm text-muted-foreground">Understand website usage and performance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Security</h4>
                        <p className="text-sm text-muted-foreground">Protect against fraud and unauthorized access</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Personalization</h4>
                        <p className="text-sm text-muted-foreground">Deliver relevant content and recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Performance</h4>
                        <p className="text-sm text-muted-foreground">Optimize website speed and functionality</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Communication</h4>
                        <p className="text-sm text-muted-foreground">Enable contact forms and support features</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Third-Party Cookies
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that set their own cookies. These services help us 
                  provide better functionality and analytics:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Google Analytics</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      We use Google Analytics to understand how visitors interact with our website. 
                      This helps us improve our content and user experience.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Purpose:</strong> Website analytics and performance monitoring
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Social Media Platforms</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Social media buttons and widgets may set cookies to enable sharing and integration features.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Purpose:</strong> Social sharing and platform integration
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Marketing Tools</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      We may use marketing and advertising tools that set cookies for campaign tracking and optimization.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Purpose:</strong> Marketing campaign tracking and optimization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Management */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Managing Your Cookie Preferences
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have control over cookies and can manage your preferences in several ways:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      Browser Settings
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Most web browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set preferences for specific websites</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Cookie Consent
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      When you first visit our website, you'll see a cookie consent banner where you can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                      <li>Accept all cookies</li>
                      <li>Reject non-essential cookies</li>
                      <li>Customize your preferences</li>
                      <li>Learn more about each cookie type</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-primary" />
                      Important Note
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Disabling certain cookies may affect website functionality and your user experience. 
                      Essential cookies cannot be disabled as they are necessary for basic website operation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Device-Specific Information */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Monitor className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Device-Specific Cookie Management
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Monitor className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Desktop Browsers</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Chrome: Settings → Privacy → Cookies</li>
                      <li>Firefox: Options → Privacy → Cookies</li>
                      <li>Safari: Preferences → Privacy</li>
                      <li>Edge: Settings → Cookies</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Mobile Browsers</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>iOS Safari: Settings → Safari → Privacy</li>
                      <li>Android Chrome: Settings → Site Settings</li>
                      <li>Mobile Firefox: Settings → Privacy</li>
                      <li>Mobile Edge: Settings → Site Permissions</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">General Tips</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Clear cookies regularly</li>
                      <li>Use incognito/private mode</li>
                      <li>Review cookie settings periodically</li>
                      <li>Check third-party cookie policies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Retention */}
            <Card className="mb-8 group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-muted/30 backdrop-blur-sm">
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                    Cookie Retention Periods
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different types of cookies are stored for different periods of time:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Session Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Deleted when you close your browser (temporary storage)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Persistent Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Stored for a specific period (typically 30 days to 2 years)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Security Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        May be stored longer for security and fraud prevention purposes
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
                    Contact Us About Cookies
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">cookies@vaidikode.com</p>
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
                    Updates to This Policy
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-primary/20 rounded-md">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Notification of Changes</h4>
                      <p className="text-sm text-muted-foreground">
                        We will post updated policies on our website and update the "Last Updated" date.
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
                        Your continued use of our website after changes constitutes acceptance of the updated policy.
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
                        For material changes, we may provide additional notice via email or website notifications.
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
                  Questions About Our Cookies?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're here to help clarify any questions you may have about our cookie usage and your privacy preferences.
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
                    onClick={() => navigate.push("/privacy-policy")}
                    className="group"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy Policy
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
