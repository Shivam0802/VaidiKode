"use client";

import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Globe,
  Users,
  ArrowRight,
  Star,
  Headset,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import { useRouter } from "next/navigation";

import homeBanner from "@/assets/images/homebanner.webp";
import homeBanner1 from "@/assets/images/homeBanner1.webp";
import AboutBanner from "@/assets/images/about.webp";

export default function Home() {
  const navigate = useRouter();
  return (
    <div className="min-h-screen">
      {/* SVG Filter for Glass Distortion */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.02 0.02"
              numOctaves="2" 
              seed="92" 
              result="noise" 
            />
            <feGaussianBlur 
              in="noise" 
              stdDeviation="2" 
              result="blurred" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="blurred" 
              scale="110"
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {(() => {
        const { useEffect, useState } = require("react");
        function DelayedContactModal() {
          const [show, setShow] = useState(false);
          useEffect(() => {
            // Random delay between 10 and 15 seconds
            const delay = 5000 + Math.floor(Math.random() * 5000);
            const timer = setTimeout(() => setShow(true), delay);
            return () => clearTimeout(timer);
          }, []);
          return show ? <ContactModal /> : null;
        }
        return <DelayedContactModal />;
      })()}
      {/* Hero Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${homeBanner1.src})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Liquid Glass Card */}
            <div className="liquid-glass-card">
              <div className="card-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-1 bg-gradient-to-r from-white to-white/50 rounded-full"></div>
                  <span className="text-white font-semibold text-xs uppercase tracking-wider">Welcome to Vaidikode</span>
                </div>
                <h1 
                  className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6"
                  style={{ fontFamily: "Gothic" }}
                >
                  We Build Digital Excellence
                  <span className="block text-[#D1A980]">Since Day One</span>
                </h1>
                <div className="space-y-4 text-white/90 leading-relaxed text-sm md:text-base mb-8 text-justify md:text-start">
                  <p>
                    Vaidikode is your trusted partner for modern web and mobile app development. 
                    We transform ideas into powerful digital solutions that drive business growth 
                    and create exceptional user experiences.
                  </p>
                  <p>
                    Our team of skilled developers, designers, and innovators is dedicated to delivering 
                    cutting-edge solutions that not only meet today's needs but anticipate tomorrow's challenges.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button className="glass-button group relative overflow-hidden bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 text-white px-6 py-3 text-sm font-semibold border border-primary/30 hover:border-primary/50 transition-all duration-300"
                    onClick={() => navigate.push("/contact")}
                  >
                    <span className="relative z-10 flex items-center cursor-pointer">
                      <Headset className="h-4 w-4 mr-2" />
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button className="glass-button bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer">
                    <Users className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
