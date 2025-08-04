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

export default function Home() {
  const navigate = useRouter();
  return (
    <div className="min-h-screen">
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
      <section className="relative overflow-hidden bg-gray-100 dark:bg-[#1b1a1a4f]/70"
        style={{
          backgroundImage: `url(${homeBanner1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative flex flex-col lg:flex-row justify-center items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 md:w-[60%]">
            <div className="text-center lg:text-start max-w-4xl mx-auto">
              <h1 className="text-[3rem] sm:text-[3rem] lg:text-[5rem] font-bold tracking-tight text-white mb-6" style={{ fontFamily: "Gothic" }}>
                We Build
                <span className="text-primary block leading-tight">Digital Excellence</span>
              </h1>
              <p className="text-md md:text-lg text-muted-foreground mb-8">
                Vaidikode is your trusted partner for modern web and mobile app
                development. We transform ideas into powerful digital solutions
                that drive business growth.
              </p>
              <div className="flex flex-row gap-2 md:gap-4 justify-start items-center">
                <Button size="sm" className="text-md px-8 py-5 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  navigate.push("/contact");
                }}
                >
                  <Headset className="h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-md px-8 md:px-12 py-5 hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-primary/50"
                  onClick={() => {
                    navigate.push("/portfolio");
                  }}
                >
                  <Users className="h-5 w-5 " />
                  View Our Work
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex relative w-[50%] h-full items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Shadow Container */}
              <div className="absolute top-8 left-8 w-full h-full bg-black/50 rounded-[2rem] shadow-[0_20px_60px_0_rgba(0,0,0,0.25),0_4px_24px_0_rgba(80,80,255,0.10)]"></div>

              {/* Main Image Container */}
              <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 shadow-[0_8px_32px_0_rgba(80,80,255,0.10)]">
                <Image
                  src={homeBanner}
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <div className="bg-muted/20 py-10">
        <div className="text-center mx-0 lg:mx-32">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 lg:rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3
                className="text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Gothic" }}
              >
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can bring your
                vision to life with our expert development team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-3 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => {
                    navigate.push("/contact");
                  }}
                >
                  <Headset className="h-5 w-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => {
                    navigate.push("/about");
                  }}
                >
                  <Users className="h-5 w-5 " />
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
