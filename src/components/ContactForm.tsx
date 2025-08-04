"use client";
import * as React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Target,
  Cloud,
  Zap,
  Palette,
  Wrench,
  Lightbulb,
  Sparkles,
  User,
  Mail,
  PhoneCallIcon,
  SendHorizontal,
} from "lucide-react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function validate() {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      return "Valid email is required.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (!form.projectType.trim()) return "Please select a project type.";
    if (!form.message.trim()) return "Message is required.";
    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm(initialState);
      if (onSuccess) onSuccess();
    }, 1200);
  }

  return (
    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="h-9 pl-10 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="space-y-2 w-full">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="h-9 pl-10 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </Label>
          <div className="relative">
            <PhoneCallIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="h-9 pl-10 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType" className="text-sm font-medium">
          Project Type
        </Label>
        <Select
          value={form.projectType}
          onValueChange={(value) => setForm({ ...form, projectType: value })}
        >
          <SelectTrigger className="h-12 transition-colors w-full">
            <SelectValue placeholder="Select your project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="web-development"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 hover:text-primary-foreground" />
                <span>Web Development</span>
              </div>
            </SelectItem>
            <SelectItem
              value="mobile-app"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 hover:text-primary-foreground" />
                <span>Mobile App Development</span>
              </div>
            </SelectItem>
            <SelectItem
              value="ecommerce"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 hover:text-primary-foreground" />
                <span>E-commerce Website</span>
              </div>
            </SelectItem>
            <SelectItem
              value="landing-page"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 hover:text-primary-foreground" />
                <span>Landing Page</span>
              </div>
            </SelectItem>
            <SelectItem
              value="saas-platform"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 hover:text-primary-foreground" />
                <span>SaaS Platform</span>
              </div>
            </SelectItem>
            <SelectItem
              value="api-development"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 hover:text-primary-foreground" />
                <span>API Development</span>
              </div>
            </SelectItem>
            <SelectItem
              value="ui-ux-design"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4 hover:text-primary-foreground" />
                <span>UI/UX Design</span>
              </div>
            </SelectItem>
            <SelectItem
              value="maintenance"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 hover:text-primary-foreground" />
                <span>Website Maintenance</span>
              </div>
            </SelectItem>
            <SelectItem
              value="consultation"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 hover:text-primary-foreground" />
                <span>Consultation</span>
              </div>
            </SelectItem>
            <SelectItem
              value="other"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 hover:text-primary-foreground" />
                <span>Other</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project or how we can help you..."
            required
            rows={3}
            className="md:min-h-20 min-h-30 resize-none transition-colors outline-none focus:outline-none focus:ring-0 focus:border-none"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md p-3">
          <div className="w-2 h-2 bg-destructive rounded-full"></div>
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-start space-x-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-4">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
          <div>
            <div className="font-medium text-green-800">
              Message sent successfully!
            </div>
            <div className="text-green-600 mt-1">
              We'll get back to you within 24 hours.
            </div>
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-fit h-10 font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ml-auto flex"
      >   
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            <span>Sending Message...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span>Send Message</span>
            <SendHorizontal className="w-4 h-4" />
          </div>
        )}
      </Button>
    </form>
  );
}
