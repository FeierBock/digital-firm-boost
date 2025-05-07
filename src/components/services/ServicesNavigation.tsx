
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const ServicesNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  
  // Function to smoothly scroll to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust based on header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      
      // Update URL without reloading the page
      window.history.pushState(null, "", `/services#${sectionId}`);
    }
  };

  // Effect to set the active section based on hash from URL
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      setActiveSection(sectionId);
    }
  }, [location]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "website-creation",
        "social-media",
        "comprehensive-packages",
        "support-consulting",
        "custom-solutions",
        "documents",
      ];

      // Find the section that is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationMenu className="max-w-screen-xl mx-auto my-4">
      <NavigationMenuList className="flex-wrap justify-center">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              activeSection === "website-creation" && "bg-accent text-accent-foreground"
            )}
            onClick={() => scrollToSection("website-creation")}
          >
            Website-Erstellung
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              activeSection === "social-media" && "bg-accent text-accent-foreground"
            )}
            onClick={() => scrollToSection("social-media")}
          >
            Social Media
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              activeSection === "comprehensive-packages" && "bg-accent text-accent-foreground"
            )}
            onClick={() => scrollToSection("comprehensive-packages")}
          >
            Komplettpakete
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              activeSection === "support-consulting" && "bg-accent text-accent-foreground"
            )}
            onClick={() => scrollToSection("support-consulting")}
          >
            Beratung & Support
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              activeSection === "custom-solutions" && "bg-accent text-accent-foreground"
            )}
            onClick={() => scrollToSection("custom-solutions")}
          >
            Individuelle Lösungen
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              activeSection === "documents" && "bg-accent text-accent-foreground"
            )}
            onClick={() => scrollToSection("documents")}
          >
            Dokumente
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServicesNavigation;
