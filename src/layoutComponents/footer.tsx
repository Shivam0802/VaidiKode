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
    <footer className="relative bg-gradient-to-br from-background via-background to-muted/10 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Company Branding Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Digital Excellence</span>
            </div>

            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Vaidikode
              </span>
            </div>

            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Transforming ideas into powerful digital solutions that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services Overview */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center">
                  <Globe className="h-3 w-3 text-primary-foreground" />
                </div>
                Our Expertise
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    Web Development
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    Mobile Apps
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Palette className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    UI/UX Design
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    API Development
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-primary-foreground" />
                </div>
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    Home
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <Users className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    About Us
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <Settings className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    Services
                  </span>
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    Blog
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    Contact
                  </span>
                </Link>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center">
                  <MessageCircle className="h-3 w-3 text-primary-foreground" />
                </div>
                Connect With Us
              </h3>

              {/* Social Media */}
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Follow us for updates
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-7 h-7 p-0 bg-background/50 border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-7 h-7 p-0 bg-background/50 border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4 text-primary" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-7 h-7 p-0 bg-background/50 border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md w-7 h-7 p-0 bg-background/50 border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4 text-primary" />
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Stay updated
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <div className="flex items-center bg-background/50 border border-border/50 rounded-md focus-within:border-primary/50 transition-colors">
                      <span className="pl-2 flex items-center">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </span>
                      <input
                        type="email"
                        placeholder="Enter email"
                        className="pl-2 pr-3 py-2 w-full bg-transparent focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="px-3 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 rounded-md"
                  >
                    <SendHorizonal className="w-4 h-4 text-primary-foreground" />   
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center">
                  <Mail className="h-3 w-3 text-primary-foreground" />
                </div>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Email</p>
                    <p className="text-muted-foreground text-xs">
                      hello@vaidikode.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Phone</p>
                    <p className="text-muted-foreground text-xs">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      Address
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      Response Time
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/30 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center">
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
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-condition"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
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
