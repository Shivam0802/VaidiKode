import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Code,
  Database,
  Cloud,
  Zap,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Layers,
} from "lucide-react";
import { useRouter } from "next/navigation";

import mobileview1 from "@/assets/images/mobileview1.webp";
import webview from "@/assets/images/webview.webp";

export default function ServiceSection() {
  const navigate = useRouter();
  return (
    <section className="pt-8 lg:pt-6 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-primary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge
            variant="secondary"
            className="mb-3 px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20"
          >
            <Star className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2
            className="text-[2rem] sm:text-[3rem] font-bold text-foreground mb-3 leading-tight"
            style={{ fontFamily: "Gothic" }}
          >
            Big Impact, Small Footprint
            <span className="text-primary block">Digital Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We transform your ideas into powerful digital solutions with
            cutting-edge technology and innovative design approaches.
          </p>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 shadow-lg cursor-pointer"  onClick={() => navigate.push("/web-development")}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 ">

              <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-5 w-5 text-primary" />
              </div>

              <h4
                className="text-2xl font-bold text-foreground w-[80%]"
                style={{ fontFamily: "Gothic" }}
              >
                Web Development
              </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed mt-4">
                Modern, responsive web applications that deliver exceptional
                user experiences and drive business growth with cutting-edge
                technologies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    React, Next.js, Vue.js
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Responsive & Mobile-First
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    SEO Optimized
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Performance Optimized
                  </span>
                </div>
              </div>
              
            </div>
          </div>

        <div className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 shadow-lg cursor-pointer"  onClick={() => navigate.push("/app-development")}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 w-full"> 
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <h4
                className="text-2xl font-bold text-foreground w-[80%]"
                style={{ fontFamily: "Gothic" }}
              >
                Mobile App Development
              </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed mt-4">
                Native and cross-platform mobile applications that engage
                users and deliver seamless experiences across all devices
                with modern frameworks.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    React Native & Flutter
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    iOS & Android
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    App Store Optimization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Push Notifications
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 shadow-lg cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <h4
                className="text-2xl font-bold text-foreground w-[80%]"
                style={{ fontFamily: "Gothic" }}
              >
                Custom Solutions
              </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed mt-4">
                Tailored software solutions designed specifically for your
                unique business requirements.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Custom APIs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Database Design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Cloud Deployment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Custom Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance & Support */}
          <div className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-102 shadow-lg cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <h4
                className="text-2xl font-bold text-foreground w-[80%]"
                style={{ fontFamily: "Gothic" }}
              >
                Maintenance & Support
              </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed mt-4">
                Ongoing support, updates, and maintenance to keep your
                applications running smoothly.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    24/7 Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Performance Optimization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Security Updates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">
                    Maintenance & Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
