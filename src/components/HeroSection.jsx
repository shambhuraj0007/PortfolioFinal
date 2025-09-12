import {
Github,
Linkedin,
FileText,
ArrowDown,
Code2,
ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
{
name: "LinkedIn",
link: "https://www.linkedin.com/in/shambhuraj-gadhave-39b221347",
icon: <Linkedin className="w-5 h-5" />,
},
{
name: "GitHub",
link: "https://github.com/shambhuraj0007",
icon: <Github className="w-5 h-5" />,
},
{
name: "LeetCode",
link: "https://leetcode.com/u/shambhuraj007/",
icon: <Code2 className="w-5 h-5" />,
},
{
name: "GFG",
link: "https://auth.geeksforgeeks.org/user/shambhurajgadhave/",
icon: <ExternalLink className="w-5 h-5" />,
},
{
name: "Resume",
link: "https://drive.google.com/file/d/1PjvOBQvTEBzaEmFUSb85Pss1vhJv-tJK/view?usp=sharing",
icon: <FileText className="w-5 h-5" />,
},
];

export const HeroSection = () => {
return (

<section    
id="hero"    
className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8"    
>  
<div className="container max-w-4xl mx-auto text-center z-10 space-y-6">  
<h1 className="text-4xl md:text-6xl font-bold tracking-tight">  
<span className="opacity-0 animate-fade-in">Hi, I'm</span>  
<span className="text-primary opacity-0 animate-fade-in-delay-1">  
{" "}  
Shambhuraj  
</span>  
<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">  
{" "}  
Gadhave  
</span>  
</h1>  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">    
      I create stellar web experiences with modern technologies.    
      Specializing in Full stack development, I build interfaces that are    
      both beautiful and functional — optimized for performance and user    
      experience.    
    </p>    {/* Social Links */}    
<div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-4 pt-2">    
  {navItems.map((item, key) => (    
    <a    
      key={key}    
      href={item.link}    
      target="_blank"    
      rel="noopener noreferrer"    
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-900 text-white hover:bg-[#cd7c2e] transition-all text-sm sm:text-base shadow border border-zinc-700"    
    >    
      {item.icon}    
      <span>{item.name}</span>    
    </a>    
  ))}    
</div>    

<div className="pt-4 opacity-0 animate-fade-in-delay-4">    
  <a href="#projects" className="cosmic-button">    
    View My Work    
  </a>    
      
</div>

  </div>    
  <div className="mt-4">  <ThemeToggle className="absolute bottom-4 right-4 z-10 pt-2" /></div>      <div className="absolute bottom-8 mt-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">    
    <span className="text-sm text-muted-foreground mt-2">Scroll</span>    
    <ArrowDown className="h-5 w-5 text-primary" />    
  </div>    
</section>  );
};

