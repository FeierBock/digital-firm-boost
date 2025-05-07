
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
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown } from "lucide-react";

const ServicesNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
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
      
      // Close mobile dropdown if open
      if (isMobile) {
        setMobileMenuOpen(false);
      }
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

  // Services menu items
  const serviceItems = [
    { id: "website-creation", label: "Website-Erstellung" },
    { id: "social-media", label: "Social Media" },
    { id: "comprehensive-packages", label: "Komplettpakete" },
    { id: "support-consulting", label: "Beratung & Support" },
    { id: "custom-solutions", label: "Individuelle Lösungen" },
    { id: "documents", label: "Dokumente" },
  ];

  // Mobile dropdown menu
  if (isMobile) {
    return (
      <div className="relative z-10 mx-4 my-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-left"
        >
          <span>
            {serviceItems.find(item => item.id === activeSection)?.label || "Leistungen wählen"}
          </span>
          <ChevronDown className={`transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} size={20} />
        </button>
        
        {mobileMenuOpen && (
          <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            {serviceItems.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0",
                  activeSection === item.id && "bg-gray-50 text-brand-600 font-medium"
                )}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop navigation menu
  return (
    <NavigationMenu className="max-w-screen-xl mx-auto my-4 flex justify-center">
      <NavigationMenuList className="flex-wrap justify-center">
        {serviceItems.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                activeSection === item.id && "bg-accent text-accent-foreground"
              )}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServicesNavigation;
