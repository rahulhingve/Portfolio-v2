"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, User, Briefcase, Mail, Download } from 'lucide-react';

export function FloatingDock() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4" />,
    },
    {
      name: "Resume",
      link: "/resume.pdf",
      icon: <Download className="h-4 w-4" />,
    },
  ];

  return (
    <FloatingNav 
      navItems={navItems}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
    />
  );
}

