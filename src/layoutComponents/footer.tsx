import {
  Code,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Cloud,
  Users,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  SendHorizonal,
  Settings,
  FileText,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Company Branding Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Digital Excellence</span>
              <Sparkles className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <Code className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Vaidikode
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We transform ideas into powerful digital solutions that drive
              business growth. Your trusted partner for modern web and mobile
              app development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Services Overview */}
            <div className="space-y-8">
              <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-foreground mb-6 flex items-center gap-2" style={{ fontFamily: 'Gothic' }}>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-primary-foreground" />
                </div>
                Our Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 backdrop-blur-sm rounded-lg transition-all duration-300 group cursor-pointer">
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground hover:font-semibold scale-105 transition-all duration-300">
                    Web Development
                  </span>
                </div>
                <div className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer">
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground hover:font-semibold scale-105 transition-all duration-300">
                    Mobile Apps
                  </span>
                </div>
                    <div className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer">
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Palette className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground hover:font-semibold scale-105 transition-all duration-300">
                    UI/UX Design
                  </span>
                </div>
                <div className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer">
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground hover:font-semibold transition-all duration-300">
                    API Development
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-foreground mb-6 flex items-center gap-2" style={{ fontFamily: 'Gothic' }}>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </div>
                Quick Links
              </h3>
              <div className="space-y-4">
                <Link
                  href="/"
                  className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Home
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                >
                  <Users className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    About Us
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                >
                  <Settings className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Services
                  </span>
                </Link>
                {/* <Link href="/portfolio" className="flex items-center gap-3 bg-background/50 backdrop-blur-sm transition-all duration-300 group cursor-pointer">
                   <Palette className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                   <span className="font-medium text-foreground group-hover:text-primary transition-colors">Portfolio</span>
                 </Link> */}
                <Link
                  href="/blog"
                  className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Blog
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Contact
                  </span>
                </Link>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-8">
              <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-foreground mb-6 flex items-center gap-2" style={{ fontFamily: 'Gothic' }}>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                Connect With Us
              </h3>

              {/* Social Media */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Follow us for updates and insights
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-8 h-8 p-0 bg-background/50 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-8 h-8 p-0 bg-background/50 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <Twitter className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-8 h-8 p-0 bg-background/50 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-8 h-8 p-0 bg-background/50 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Stay updated with our newsletter
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    {/* Icon ko sahi dikhane ke liye input ko flex banaya aur icon ko input ke andar align kiya */}
                    <div className="flex items-center bg-background/50 backdrop-blur-sm border-2 border-border/50 rounded-lg focus-within:border-primary/50 transition-colors">
                      <span className="pl-3 flex items-center">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                      </span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-3 pr-4 py-1.5 w-full bg-transparent focus:outline-none text-sm"
                        style={{ minWidth: 0 }}
                      />
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="px-4 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 rounded-lg"
                  >
                    <SendHorizonal className="w-5 h-5 text-primary-foreground" />   
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
                <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-foreground mb-6 flex items-center gap-2" style={{ fontFamily: 'Gothic' }}>
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary-foreground" />
                </div>
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">
                      hello@vaidikode.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Address
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 backdrop-blur-sm transition-all duration-300 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Response Time
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/30 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Code className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Vaidikode
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                © 2024 Vaidikode. All rights reserved. Crafted with ❤️ in India.
              </p>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
