"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Globe,
  Code,
  Trophy,
  User,
  Award,
  Users,
  Clock,
  Star,
  CheckCircle,
  MessageCircle,
  Clock as ClockIcon,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  experience: string;
  education: string;
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  achievements: string[];
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Full-Stack Developer",
    image: "/team/alex.jpg",
    bio: "Passionate about creating scalable web applications and mentoring junior developers. Specializes in React, Node.js, and cloud architecture.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"],
    experience: "8+ years in web development",
    education: "B.S. Computer Science, Stanford University",
    email: "alex@vaidikode.com",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    website: "https://alexjohnson.dev",
    achievements: [
      "Led development of 50+ successful web applications",
      "Mentored 20+ junior developers",
      "Speaker at ReactConf 2023",
      "Open source contributor with 1000+ stars"
    ],
    specialties: ["Frontend Architecture", "Backend Development", "DevOps", "Team Leadership"]
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Senior UI/UX Designer",
    image: "/team/sarah.jpg",
    bio: "Creative designer with a focus on user-centered design and creating beautiful, functional interfaces that users love.",
    skills: ["Figma","Prototyping", "Accessibility", "User Research", "Adobe Creative Suite" , "Design Systems"],
    experience: "6+ years in UI/UX design",
    education: "M.A. Design, Parsons School of Design",
    email: "sarah@vaidikode.com",
    linkedin: "https://linkedin.com/in/sarahchen",
    twitter: "https://twitter.com/sarahchen",
    website: "https://sarahchen.design",
    achievements: [
      "Designed interfaces for 30+ successful products",
      "Awarded Best UI Design at Design Awards 2023",
      "Published author on UX design principles",
      "Regular speaker at design conferences"
    ],
    specialties: ["User Experience Design", "Visual Design", "Design Systems", "User Research"]
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Mobile App Developer",
    image: "/team/michael.jpg",
    bio: "Expert in native and cross-platform mobile development with a track record of building high-performance apps.",
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Swift", "Kotlin"],
    experience: "7+ years in mobile development",
    education: "B.S. Software Engineering, MIT",
    email: "michael@vaidikode.com",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    github: "https://github.com/michaelrodriguez",
    achievements: [
      "Developed 25+ mobile applications",
      "Apps downloaded 1M+ times",
      "Expert in React Native and Flutter",
      "Mobile development consultant"
    ],
    specialties: ["Cross-platform Development", "Native iOS/Android", "Mobile Architecture", "Performance Optimization"]
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "DevOps Engineer",
    image: "/team/emily.jpg",
    bio: "Infrastructure specialist focused on building scalable, secure, and efficient deployment pipelines.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Monitoring", "Security"],
    experience: "5+ years in DevOps",
    education: "B.S. Information Technology, Georgia Tech",
    email: "emily@vaidikode.com",
    linkedin: "https://linkedin.com/in/emilywatson",
    github: "https://github.com/emilywatson",
    achievements: [
      "Reduced deployment time by 80%",
      "Implemented zero-downtime deployments",
      "AWS Certified Solutions Architect",
      "Security-first approach to infrastructure"
    ],
    specialties: ["Cloud Architecture", "CI/CD Pipelines", "Infrastructure as Code", "Security"]
  },
  {
    id: 5,
    name: "David Kim",
    role: "Backend Developer",
    image: "/team/david.jpg",
    bio: "Backend specialist with expertise in building robust APIs and scalable database architectures.",
    skills: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "GraphQL", "Microservices"],
    experience: "6+ years in backend development",
    education: "M.S. Computer Science, UC Berkeley",
    email: "david@vaidikode.com",
    linkedin: "https://linkedin.com/in/davidkim",
    github: "https://github.com/davidkim",
    achievements: [
      "Built APIs serving 10M+ requests daily",
      "Optimized database queries by 60%",
      "Microservices architecture expert",
      "Open source contributor to Django"
    ],
    specialties: ["API Development", "Database Design", "Microservices", "Performance Optimization"]
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Project Manager",
    image: "/team/lisa.jpg",
    bio: "Experienced project manager who ensures projects are delivered on time, within budget, and exceed client expectations.",
    skills: ["Agile", "Scrum", "Jira", "Risk Management", "Client Communication", "Team Leadership"],
    experience: "8+ years in project management",
    education: "MBA, Harvard Business School",
    email: "lisa@vaidikode.com",
    linkedin: "https://linkedin.com/in/lisapark",
    achievements: [
      "Managed 100+ successful projects",
      "99% client satisfaction rate",
      "Certified Scrum Master",
      "Led teams of 20+ developers"
    ],
    specialties: ["Agile Project Management", "Client Relations", "Team Coordination", "Risk Management"]
  }
];

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamModal({ isOpen, onClose }: TeamModalProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseMember = () => {
    setSelectedMember(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[90vw] sm:!max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-3xl font-bold" style={{ fontFamily: "Gothic" }}>
                Meet Our Team
              </DialogTitle>
              <DialogDescription className="text-lg mt-2">
                The passionate developers, designers, and innovators behind Vaidikode
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm cursor-pointer"
                onClick={() => handleMemberClick(member)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-4 relative z-10">
                  <div className="text-center space-y-4">
                    <div className="relative mx-auto w-16 h-16">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio.substring(0, 120)}...
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Individual Member Modal */}
        <Dialog open={!!selectedMember} onOpenChange={handleCloseMember}>
          <DialogContent className="!max-w-[90vw] sm:!max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-2xl font-bold" style={{ fontFamily: "Gothic" }}>
                        {selectedMember.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-primary font-semibold">
                        {selectedMember.role}
                      </DialogDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCloseMember}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </DialogHeader>

                <div className="mt-6 space-y-8">
                  {/* Bio Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      About
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Experience & Education */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Experience
                      </h3>
                      <p className="text-muted-foreground">{selectedMember.experience}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Education
                      </h3>
                      <p className="text-muted-foreground">{selectedMember.education}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Skills & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="border-primary/30 text-primary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact & Social */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Get In Touch
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </Button>
                      {selectedMember.linkedin && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </Button>
                      )}
                      {selectedMember.twitter && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Twitter className="h-4 w-4" />
                          Twitter
                        </Button>
                      )}
                      {selectedMember.github && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      )}
                      {selectedMember.website && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Website
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}