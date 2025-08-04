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
    <section className="pt-12 lg:pt-8 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-primary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
          >
            <Star className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2
            className="text-[2.5rem] sm:text-[3.5rem] font-bold text-foreground mb-6 leading-tight"
            style={{ fontFamily: "Gothic" }}
          >
            Big Impact, Small Footprint
            <span className="text-primary block">Digital Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We transform your ideas into powerful digital solutions with
            cutting-edge technology and innovative design approaches.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-16 lg:space-y-32 mb-16">
          {/* Web Development */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20 py-1 px-4"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Popular
                  </Badge>
                </div>

                <div className="mt-5">
                  <h3
                    className="text-4xl font-bold text-foreground mb-4"
                    style={{ fontFamily: "Gothic" }}
                  >
                    Web Development
                  </h3>
                  <p className="text-md text-muted-foreground leading-relaxed mb-5">
                    Modern, responsive web applications that deliver exceptional
                    user experiences and drive business growth with cutting-edge
                    technologies.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      React, Next.js, Vue.js
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      Responsive & Mobile-First
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      SEO Optimized
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      Performance Optimized
                    </span>
                  </div>
                </div>

                <Button onClick={() => navigate.push("/web-development")} className="group bg-primary text-white text-[0.8rem] px-8 py-4 cursor-pointer">
                  <Globe className="h-4 w-4 text-white" />
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={webview.src}
                    alt="Web Development"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20 py-1 px-4"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Trending
                  </Badge>
                </div>

                <div>
                  <h3
                    className="text-4xl font-bold text-foreground mb-4"
                    style={{ fontFamily: "Gothic" }}
                  >
                    Mobile App Development
                  </h3>
                  <p className="text-md text-muted-foreground leading-relaxed mb-8">
                    Native and cross-platform mobile applications that engage
                    users and deliver seamless experiences across all devices
                    with modern frameworks.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      React Native & Flutter
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      iOS & Android
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      App Store Optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-md">
                      Push Notifications
                    </span>
                  </div>
                </div>

                <Button className="group bg-primary text-white text-[0.8rem] px-8 py-4 cursor-pointer">
                  <Smartphone className="h-4 w-4 text-white" />
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="lg:order-1 relative">
                <div className="relative z-10">
                  <img
                    src={mobileview1.src}
                    alt="Mobile App Development"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Custom Solutions */}
          <div className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 shadow-lg cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h4
                className="text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Gothic" }}
              >
                Custom Solutions
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tailored software solutions designed specifically for your
                unique business requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    Custom APIs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    Database Design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    Cloud Deployment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    Custom Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance & Support */}
          <div className="group relative p-5 rounded-3xl bg-gradient-to-br from-background via-background to-muted/30 border border-muted/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 shadow-lg cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h4
                className="text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Gothic" }}
              >
                Maintenance & Support
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ongoing support, updates, and maintenance to keep your
                applications running smoothly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    24/7 Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    Performance Optimization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
                    Security Updates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium text-md">
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
