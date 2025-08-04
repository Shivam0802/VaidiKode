"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import ContactForm from "./ContactForm";
import { MessageCircle, Rocket, X } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal after a short delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
        <div className="flex justify-center mb-2">
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-primary font-semibold text-sm shadow-md border border-primary/30 select-none">
            <MessageCircle className="w-3 h-3 text-primary mr-1" />
            Let's Connect!
            <span className="flex items-center gap-1 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
              We reply fast <Rocket className="w-2 h-2" />
            </span>
          </span>
        </div>
          <DialogTitle className="text-[1.5rem] sm:text-[1.75rem] font-bold text-center" style={{ fontFamily: 'Gothic' }}>
            Get In Touch With Us
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute top-0 right-0 z-10 text-muted-foreground hover:text-primary bg-transparent hover:bg-primary/10 rounded-full transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>

        <div className="mt-3">
          <div className="text-center mb-6">
            <p className="text-muted-foreground">
              Ready to start your project? Fill out the form below and we'll get
              back to you within 24 hours.
            </p>
          </div>

          <ContactForm
            onSuccess={() => {
              // Close modal after successful submission
              setTimeout(() => {
                setIsOpen(false);
              }, 2000);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
