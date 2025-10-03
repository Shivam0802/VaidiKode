"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  Users,
  Monitor,
  ChevronDown,
  Settings,
  FileText,
  Briefcase,
  PhoneCall,
  Palette,
  Sparkles,
} from "lucide-react";
import { PiCirclesThreeDuotone } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import WebView from "@/assets/images/website.webp";
import AppView from "@/assets/images/app.webp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Vaidikode</span>
          </Link>

          {/* Right side - Theme toggle and CTA */}
          <div className="flex items-center">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 bg-primary/10 hover:bg-primary/90 cursor-pointer mr-0 md:mr-2"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 cursor-pointer">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="h-4 w-4 hover:text-white cursor-pointer" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="h-4 w-4 hover:text-white cursor-pointer" />
                  Dark
                </DropdownMenuItem>

                <div className="my-1 border-t border-border" />
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="h-4 w-4 hover:text-white cursor-pointer" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Link href="/contact" className="mr-2">
              <Button className="hidden sm:inline-flex cursor-pointer">
                <Sparkles className="h-4 w-4" />
                Start Project
              </Button>
            </Link>

            {/* Language Toggle */}
            <div className="hidden lg:block">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 bg-primary/10 hover:bg-primary/90 cursor-pointer mr-0"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <motion.span
                  key={isSidebarOpen ? "close" : "open"}
                  initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex items-center justify-center"
                >
                  {isSidebarOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <PiCirclesThreeDuotone className="h-9 w-9" />
                  )}
                </motion.span>
              </Button>
            </div>

            {/* Desktop Sidebar */}
            <div
              className={cn(
                "hidden lg:block",
                isSidebarOpen
                  ? "fixed inset-0 z-[60] pointer-events-auto"
                  : "pointer-events-none"
              )}
            > 
              <AnimatePresence>
                {isSidebarOpen && (
                  <>
                    <motion.div
                      key="overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-black"
                      onClick={() => setIsSidebarOpen(false)}
                    />

                    <motion.aside
                      key="panel"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      className="fixed right-0 top-0 h-dvh w-[20rem] max-w-[70%] bg-background shadow-2xl overflow-y-auto"
                      role="dialog"
                      aria-label="Navigation sidebar"
                    >
                      <div className="sticky top-0 z-10 flex justify-between p-3 bg-background/90 backdrop-blur">

                          <Link href="/" className="flex items-center mb-4 cursor-pointer">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                              <Code className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="ml-2 text-lg font-bold text-foreground">
                              Vaidikode
                            </span>
                          </Link>
                        
                          <motion.span
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          >
                            <X className="h-6 w-6 cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
                          </motion.span>
                       
                      </div>

                      <nav className="py-2 px-2">
                  <div className="grid gap-2">
                    <Link
                      href="/web-development"
                      className="px-1.5 py-1.5 rounded-md text-base font-medium hover:bg-accent/50 dark:hover:bg-accent hover:text-accent-foreground group"
                      onClick={() => setIsSidebarOpen(false)}
                    >

                      <img
                        src={WebView.src}
                        alt="Vaidikode Logo"
                        className="w-full h-auto mb-2 rounded-md group-hover:shadow-xl transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[1rem] font-semibold text-foreground group-hover:text-foreground">
                          <Globe className="h-4 w-4" />
                          Web Development
                        </span>
                        <span className="text-xs text-foreground group-hover:text-foreground">
                          Modern, scalable websites & web apps for your business.
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/app-development"
                      className="px-1.5 py-1.5 rounded-md text-base font-medium hover:bg-accent/50 dark:hover:bg-accent hover:text-accent-foreground group"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <img
                        src={AppView.src}
                        alt="Vaidikode Logo"
                        className="w-full h-auto mb-2 rounded-md group-hover:shadow-xl transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[1rem] font-semibold text-foreground group-hover:text-foreground">
                          <Smartphone className="h-4 w-4" />
                          App Development
                        </span>
                        <span className="text-xs text-foreground group-hover:text-foreground">
                          Native & cross-platform mobile apps for iOS/Android.
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/about"
                      className="px-1.5 py-1.5 rounded-md text-base font-medium hover:bg-accent/50 dark:hover:bg-accent hover:text-accent-foreground group"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[1rem] font-semibold text-foreground group-hover:text-foreground">
                          <Users className="h-4 w-4" />
                          About
                        </span>
                      
                      <span className="text-xs text-foreground group-hover:text-foreground">
                        Learn more about us and our mission.
                      </span>
                    </div>
                    </Link>
                    {/* <Link
                      href="/portfolio"
                      className="px-3 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Portfolio
                    </Link> */}
                    <Link
                      href="/blog"
                      className="px-1.5 py-1.5 rounded-md text-base font-medium hover:bg-accent/50 dark:hover:bg-accent hover:text-accent-foreground group"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[1rem] font-semibold text-foreground group-hover:text-foreground">
                          <FileText className="h-4 w-4" />
                          Blogs
                        </span>
                      
                      <span className="text-xs text-foreground group-hover:text-foreground">
                        Stay updated with our latest blog posts.
                      </span>
                    </div>
                    </Link>
                    <Link
                      href="/contact"
                      className="px-1.5 py-1.5 rounded-md text-base font-medium hover:bg-accent/50 dark:hover:bg-accent hover:text-accent-foreground group"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[1rem] font-semibold text-foreground group-hover:text-foreground">
                          <PhoneCall className="h-4 w-4" />
                          Contact
                        </span>
                        <span className="text-xs text-foreground group-hover:text-foreground">
                          Contact us for inquiries or collaborations.
                        </span>
                      
                      </div>
                    </Link>
                  </div>
                      </nav>
                    </motion.aside>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-primary/10 hover:bg-primary/70 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                href="/web-development"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <Globe className="h-4 w-4" />
                <span>Web Development</span>
              </Link>
              <Link
                href="/app-development"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <Smartphone className="h-4 w-4" />
                <span>App Development</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <Users className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <Palette className="h-4 w-4" />
                <span>Portfolio</span>
              </Link>
              <Link
                href="/blog"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <FileText className="h-4 w-4" />
                <span>Blog</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Contact</span>
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full flex items-center justify-center space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Start Project</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
