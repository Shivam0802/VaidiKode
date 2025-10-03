"use client";
import * as React from "react";
import { useState, useEffect } from "react";
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
  Search,
} from "lucide-react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  phone: "",
  countryCode: "IN", // Default to India
  projectType: "",
  message: "",
};

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<any>({
    cca2: 'IN',
    name: { common: 'India' },
    flags: { png: 'https://flagcdn.com/w320/in.png' },
    phoneCode: '+91'
  });

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


  const fetchCountryCode = async () => {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,idd,cca2,flag,flags"
      );
      
      const countriesData = response.data.map((country: any) => ({
        ...country,
        phoneCode: country.idd?.root + (country.idd?.suffixes?.[0] || ''),
      })).filter((country: any) => country.phoneCode && country.phoneCode.length > 1);

      
      const sortedCountries = countriesData.sort((a: any, b: any) => {
        const nameA = a.name?.common?.toLowerCase() || "";
        const nameB = b.name?.common?.toLowerCase() || "";
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      setCountries(sortedCountries);
      setFilteredCountries(sortedCountries);
      
      const india = countriesData.find((country: any) => country.cca2 === 'IN');
      if (india) {
        setSelectedCountry(india);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
      const fallbackIndia = {
        cca2: 'IN',
        name: { common: 'India' },
        flags: { png: 'https://flagcdn.com/w320/in.png' },
        phoneCode: '+91'
      };
      setCountries([fallbackIndia]);
      setFilteredCountries([fallbackIndia]);
      setSelectedCountry(fallbackIndia);
    }
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.name?.common?.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        country.name?.official?.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [debouncedSearchQuery, countries]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm(initialState);
      if (onSuccess) onSuccess();
    }, 1200);
  }

  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="name" className="text-xs font-medium text-muted-foreground">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="h-9 pl-10 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="h-9 pl-10 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="phone" className="text-xs font-medium text-muted-foreground">
          Phone Number
        </Label>
        <div className="flex gap-2">
          
          <div className="w-28">
            <Select
              value={form.countryCode}
              onValueChange={(value) => {
                const country = countries.find(c => c.cca2 === value);
                setSelectedCountry(country);
                setForm({ ...form, countryCode: value });
                setSearchQuery("");
                setDebouncedSearchQuery("");
              }}
            >
              <SelectTrigger className="h-12 transition-colors w-full">
                <SelectValue placeholder="Select country">
                  {selectedCountry && (
                    <div className="flex items-center gap-2">
                      <img src={selectedCountry.flags?.png} alt={selectedCountry.name?.common} className="w-4 h-4 rounded-sm" />
                      <span>{selectedCountry.phoneCode}</span>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-60 p-0">
                <div className="sticky top-0 bg-background border-b p-2 z-10">
                  <div className="relative ">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                    <Input
                      placeholder="Search countries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-8 text-xs pl-7"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
                
                <div className="max-h-48 overflow-y-auto">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <SelectItem
                        key={country.cca2}
                        value={country.cca2}
                        className="hover:bg-primary/40 hover:text-white "
                      >
                        <div className="flex items-center gap-2 w-[270px] md:w-auto ">
                          <img src={country.flags?.png} alt={country.name?.common} className="w-4 h-4 rounded-sm" />
                          <span className="text-[0.85rem] font-medium">{country.phoneCode}</span>
                          <span className="hover:text-white text-[0.85rem] font-medium">{country.name?.common}</span>
                        </div>
                      </SelectItem>
                    ))
                  ) : (
                    <div className="p-4 text-sm text-muted-foreground text-center">
                      No countries found
                    </div>
                  )}
                </div>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1 relative">
            <PhoneCallIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder={selectedCountry ? `${selectedCountry.phoneCode} 98765 43210` : "Phone number"}
              required
              className="h-9 pl-10 text-sm"
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
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="message" className="text-xs font-medium text-muted-foreground">
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
        <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-md p-2">
          <div className="w-1.5 h-1.5 bg-destructive rounded-full"></div>
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-start gap-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
          <div>
            <div className="font-medium text-green-800">Message sent!</div>
            <div className="text-green-600">We'll respond within 24 hours.</div>
          </div>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          disabled={loading}
          className="h-9 px-6 text-sm font-medium cursor-pointer"
        >   
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Send Message</span>
              <SendHorizontal className="w-3 h-3" />
            </div>
          )}
        </Button>
      </div>
    </form>
  );
}
