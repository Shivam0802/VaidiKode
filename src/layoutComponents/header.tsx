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
  Mail,
  Monitor,
  ChevronDown,
  Settings,
  FileText,
  Briefcase,
  MessageCircle,
  PhoneCall,
  Palette,
  Sparkles,
} from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Vaidikode</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8 items-center">
              {/* Services Dropdown */}
              <li className="relative group">
                <button
                  className="flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none text-base font-medium text-foreground py-2 transition-colors hover:font-semibold
                    hover:text-primary
                    after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200 after:origin-left
                    group-hover:after:scale-x-100
                    focus:text-primary
                  "
                  style={{ background: "none" }}
                >
                  <Settings className="h-4 w-4" />
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Dropdown */}
                <div className="absolute left-[-50px] top-full min-w-[520px] w-[520px] bg-background border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all z-50">
                  <div className="flex items-center justify-between w-full">
                    <div className="hidden md:flex flex-col justify-between w-56 bg-muted/50 rounded-lg p-6 m-2 cursor-pointer">
                      <Link href="/" className="flex items-center mb-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                          <Code className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="ml-2 text-lg font-bold text-foreground">
                          Vaidikode
                        </span>
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        Beautifully crafted web & app solutions for your
                        business. <br />
                        <span className="font-medium text-primary">
                          Let’s build something great!
                        </span>
                      </div>
                    </div>
                    <ul className="py-2">
                      <li>
                        <Link
                          href="/web-development"
                          className="flex items-start gap-3 px-5 py-3 text-foreground hover:bg-accent hover:text-white cursor-pointer rounded-sm mr-2 mb-2"
                        >
                          <Globe className="h-5 w-5 mt-0.5" />
                          <div>
                            <div className="font-semibold">Web Development</div>
                            <div className="text-xs">
                              Modern, scalable websites & web apps using latest
                              tech.
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/app-development"
                          className="flex items-start gap-3 px-5 py-3 hover:bg-accent hover:text-white transition-colors cursor-pointer rounded-sm mr-2"
                        >
                          <Smartphone className="h-5 w-5 mt-0.5" />
                          <div>
                            <div className="font-semibold">App Development</div>
                            <div className="text-xs">
                              Native & cross-platform mobile apps for
                              iOS/Android.
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Simple Links */}
              <li>
                <Link
                  href="/about"
                  className="relative flex items-center gap-2 text-base font-medium text-foreground py-2 transition-colors hover:font-semibold hover:text-primary
                    after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200 after:origin-left
                    hover:after:scale-x-100
                  "
                >
                  <Users className="h-4 w-4" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="relative flex items-center gap-2 text-base font-medium text-foreground py-2 transition-colors hover:font-semibold hover:text-primary
                    after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200 after:origin-left
                    hover:after:scale-x-100
                  "
                >
                  <Briefcase className="h-4 w-4" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="relative flex items-center gap-2 text-base font-medium text-foreground py-2 transition-colors hover:font-semibold hover:text-primary
                    after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200 after:origin-left
                    hover:after:scale-x-100
                  "
                >
                  <FileText className="h-4 w-4" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative flex items-center gap-2 text-base font-medium text-foreground py-2 transition-colors hover:font-semibold hover:text-primary
                    after:content-[''] after:block after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200 after:origin-left
                    hover:after:scale-x-100
                  "
                >
                  <PhoneCall className="h-4 w-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side - Theme toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 bg-primary/10 hover:bg-primary/70 cursor-pointer mr-0 md:mr-2"
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
            <Link href="/contact">
              <Button className="hidden sm:inline-flex cursor-pointer">
                <Sparkles className="h-4 w-4" />
                Start Project
              </Button>
            </Link>

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
