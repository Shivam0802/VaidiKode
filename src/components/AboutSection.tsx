"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Users, 
  Briefcase,
  Award, 
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const navigate = useRouter();
  return (
    <section className="relative py-8 md:py-14 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-3">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Vaidikode</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "Gothic" }}
          >
            Building Digital Excellence
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We craft sleek, scalable products for web and mobile—fast, reliable, and user-first.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-10">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-2 md:p-5">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold">0+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-2 md:p-5">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold">0+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-2 md:p-5">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3">
                <div className="p-2.5 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl font-bold">0%</div>
                  <div className="text-xs text-muted-foreground">Growth Focus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story + Checklist */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Gothic" }}>
              Human-centered. Performance-driven.
            </h3>
            <p className="text-muted-foreground">
              From prototypes to production, we help teams move faster with modern stacks, design systems,
              and a relentless focus on real user outcomes.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                </div>
                <span className="text-sm">Next.js, React Native, cloud-first deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                </div>
                <span className="text-sm">Design systems and accessible UI patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                </div>
                <span className="text-sm">SEO, performance, and analytics baked in</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                </div>
                <span className="text-sm">Agile delivery with tight feedback loops</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="cursor-pointer px-6 py-3 text-sm" onClick={() => navigate.push("/team")}>
                <Users className="h-4 w-4 mr-2" /> Meet Our Team
              </Button>
              <Button variant="outline" className="cursor-pointer px-6 py-3 text-sm" onClick={() => navigate.push("/portfolio")}>
                <Briefcase className="h-4 w-4 mr-2" /> View Our Work
              </Button>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-2 md:gap-4">
            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Engineering Excellence</div>
                    <p className="text-sm text-muted-foreground">Clean, maintainable code and scalable architectures.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Multi-platform</div>
                    <p className="text-sm text-muted-foreground">Web, iOS, Android with shared design language.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Security First</div>
                    <p className="text-sm text-muted-foreground">Best practices for auth, data, and compliance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Speed & Reliability</div>
                    <p className="text-sm text-muted-foreground">Optimized builds, caching, and observability.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values - simplified */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Outcome Oriented</div>
                  <p className="text-sm text-muted-foreground">We measure success by shipped value.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Collaborative</div>
                  <p className="text-sm text-muted-foreground">We partner closely with your team.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Craft & Care</div>
                  <p className="text-sm text-muted-foreground">Details matter—from UX to DX.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA strip */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                Ready to build with Vaidikode?
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">Let’s discuss your goals and the fastest way to reach them.</p>
            </div>
            <div className="flex gap-3">
              <Button className="cursor-pointer px-6 py-3" onClick={() => navigate.push("/contact")}>
                <Sparkles className="h-4 w-4 mr-2" /> Start a Project
              </Button>
              <Button variant="outline" className="cursor-pointer px-6 py-3" onClick={() => navigate.push("/about")}>
                <ArrowRight className="h-4 w-4 mr-2" /> Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 