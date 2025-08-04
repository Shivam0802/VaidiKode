import { Mail, Phone, MapPin, Clock, MessageCircle, Rocket } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-24 bg-muted/30">
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-bold text-foreground mb-4" style={{ fontFamily: 'Gothic' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
            We're here to answer any questions and provide expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Gothic' }}>
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you have a project in mind or just want to explore possibilities, 
                we'd love to hear from you. Our team is ready to help you succeed.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@vaidikode.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  <p className="text-sm text-muted-foreground">Available for in-person meetings</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground">Quick turnaround for urgent projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-background via-background to-muted/20 rounded-2xl p-8 shadow-xl border border-border/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Gothic' }}  >
                  Send us a Message
                </h3>
                <p className="text-muted-foreground text-base">
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