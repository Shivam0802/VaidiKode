"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Rocket,
  Code,
  Shield,
  Sparkles,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Shivam from "@/assets/images/shivam.webp";
import Tarun from "@/assets/images/tarun.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TeamBanner from "@/assets/images/team.webp";

type TeamMember = {
  name: string;
  role: string;
  email: string;
  avatar: string;
  bio: string;
  links?: { linkedin?: string; github?: string; twitter?: string };
};

const team: TeamMember[] = [
  {
    name: "Shivam",
    role: "Co-Founder & CEO",
    avatar: Shivam.src,
    bio: "Product strategist passionate about driving results, seamless execution, and crafting exceptional user experiences.",
    email: "shivam@vaidikode.com",
    links: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },
  {
    name: "Tarun Kumar",
    role: "Co-Founder & CEO",
    avatar: Tarun.src,
    bio: "Product strategist passionate about driving results, seamless execution, and crafting exceptional user experiences.",
    email: "tarun@vaidikode.com",
    links: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" },
  },
];

export default function TeamPage() {
  const navigate = useRouter();
  return (
    <>
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

      {/* Hero - compact with background image */}
      <section className="py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              `url(${TeamBanner.src})`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* floating accents */}
        <motion.div
          className="absolute top-10 left-8 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-12 w-16 h-16 bg-accent/30 rounded-full blur-lg"
          animate={{ y: [0, 15, 0], x: [0, -15, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Liquid Glass Card */}
          <div className="liquid-glass-card">
            <div className="relative z-10 text-center text-white flex flex-col items-start justify-center px-4 py-[32px] md:p-[32px]">
              <div className="text-center text-white w-full">
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-xs md:text-sm font-semibold mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Users className="w-4 h-4" />
                  Meet the Team
                  <span className="ml-2 inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                    Builders at heart <Rocket className="w-3 h-3" />
                  </span>
                </motion.span>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: "Gothic" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  The People Behind
                  <span className="block text-[#D1A980]">Vaidikode</span>
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  A cross‑functional crew crafting reliable, elegant digital products with care.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <Button className="glass-button group relative overflow-hidden bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 text-white px-6 py-3 text-sm font-semibold border border-primary/30 hover:border-primary/50 transition-all duration-300"
                    onClick={() => navigate.push("/contact")}
                  >
                    <span className="relative z-10 flex items-center cursor-pointer">
                      <Headset className="h-4 w-4 mr-2" />
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button className="glass-button bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer"
                    onClick={() => navigate.push("/about")} >
                    <Users className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>   
                
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-3 px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Award className="w-4 h-4 mr-2" /> Our Core Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Gothic" }}>
              Small Team, Big Impact
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-white/10 backdrop-blur-md rounded-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-0 relative z-10">
                      <div className="relative overflow-hidden ring-1 ring-white/20 group/image">
                        <img src={m.avatar} alt={m.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        
                        {/* Hover Details Slider */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-bold mb-2 text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                              {m.name}
                            </h3>
                            
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                              {m.bio}
                            </p>

                            {/* Social Links */}
                            {(m.links?.linkedin || m.links?.github || m.links?.twitter) && (
                              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-300">
                                {m.links.linkedin && (
                                  <Link
                                    href={m.links.linkedin} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-gray-200"
                                  >
                                    <Linkedin className="h-4 w-4 text-gray-900" />
                                  </Link>
                                )}
                                {m.links.github && (
                                  <Link 
                                    href={m.links.github} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-gray-200"
                                  >
                                    <Github className="h-4 w-4 text-gray-900" />
                                  </Link>
                                )}
                                {m.links.twitter && (
                                  <Link 
                                    href={m.links.twitter} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-gray-200"
                                  >
                                    <Twitter className="h-4 w-4 text-gray-900" />
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div> 
                      
                      <div className="absolute top-2 right-2 z-20">
                        <Badge variant="secondary" className="bg-[#D1A980] text-gray-900 rounded-none">
                         <div className="flex flex-col">
                         <div className="flex items-center gap-2">
                          {m.name}
                          </div>
                          <div className="flex items-center gap-2">
                            {m.role}
                            </div>
                          </div>
                        </Badge>
                      </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code className="h-5 w-5 text-primary" />, title: "Craft", desc: "We sweat the details to build robust, maintainable systems." },
              { icon: <Shield className="h-5 w-5 text-primary" />, title: "Trust", desc: "Transparent process, reliable delivery, and long‑term support." },
              { icon: <Sparkles className="h-5 w-5 text-primary" />, title: "Delight", desc: "Thoughtful interactions that feel effortless and fast." },
            ].map((v) => (
              <Card key={v.title} className="border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                      {v.icon}
                    </div>
                    <h4 className="font-bold">{v.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                  Ready to work with our team?
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">Let's discuss your project and build something great together.</p>
              </div>
              <div className="flex gap-3">
                <Button className="cursor-pointer px-6 py-3" asChild>
                  <Link href="/contact">
                    <Sparkles className="h-4 w-4 mr-2" /> Start a Project
                  </Link>
                </Button>
                <Button variant="outline" className="cursor-pointer px-6 py-3" asChild>
                  <Link href="/about">
                    <ArrowRight className="h-4 w-4 mr-2" /> Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}


