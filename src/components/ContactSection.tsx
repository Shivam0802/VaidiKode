import { Mail, Phone, MapPin, Clock, MessageCircle, Rocket, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function ContactSection() {
  const navigate = useRouter();

 

  return (
    <section className="py-12 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-primary font-semibold text-base shadow-md border border-primary/30 select-none">
            <MessageCircle className="w-5 h-5 text-primary mr-1" />
            Let's Connect!
            <span className="flex items-center gap-1 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
              We reply fast <Rocket className="w-4 h-4" />
            </span>
          </span>
        </div>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: 'Gothic' }}>
            Ready to Build Something Amazing?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and explore how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Gothic' }}>
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-6 text-base">
                Whether you have a project in mind or just want to explore possibilities, 
                we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details - Compact Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-xs text-muted-foreground">hello@vaidikode.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Phone</h4>
                  <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Location</h4>
                  <p className="text-xs text-muted-foreground">Mumbai, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Response</h4>
                  <p className="text-xs text-muted-foreground">Within 24h</p>
                </div>
              </div>
            </div>

          {/* Social Links - Compact Row */}
          <div className="flex flex-col gap-2 mt-8">
            <h4 className="font-semibold text-foreground text-sm mb-1">Connect with us</h4>
            <div className="flex gap-3">
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/vaidikode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-start w-9 h-9 rounded-full bg-primary/10 transition-all duration-300 cursor-pointer hover:w-32  hover:bg-primary/20"
                  aria-label="Twitter"
                >
                  <span className="flex items-center justify-center w-9 h-9 ml-2">
                    <FaTwitter className="w-5 h-5 text-primary transition-colors duration-300" />
                  </span>
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 whitespace-nowrap">
                    Twitter
                  </span>
                </a>
                <a
                  href="https://linkedin.com/company/vaidikode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-start w-9 h-9 rounded-full bg-primary/10 transition-all duration-300 cursor-pointer hover:w-36 hover:bg-primary/20"
                  aria-label="LinkedIn"
                >
                  <span className="flex items-center justify-center w-9 h-9 ml-2">
                    <FaLinkedin className="w-5 h-5 text-primary transition-colors duration-300" />
                  </span>
                  <span className=" text-primary text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://github.com/vaidikode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-start w-9 h-9 rounded-full bg-primary/10 transition-all duration-300 cursor-pointer hover:w-32 hover:bg-primary/20"
                  aria-label="GitHub"
                >
                  <span className="flex items-center justify-center w-9 h-9 ml-2">
                    <FaGithub className="w-5 h-5 text-primary transition-colors duration-300" />
                  </span>
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 whitespace-nowrap">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-background via-background to-muted/20 rounded-2xl p-6 shadow-xl border border-border/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Gothic' }}>
                  Send us a Message
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 